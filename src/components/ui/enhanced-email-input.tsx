"use client"

import React, { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

interface EnhancedEmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onEmailChange?: (email: string) => void
}

const COMMON_DOMAINS = [
    "gmail.com",
    "yahoo.co.jp",
    "outlook.com",
    "icloud.com",
    "softbank.ne.jp",
    "docomo.ne.jp"
]

export function EnhancedEmailInput({ className, onEmailChange, ...props }: EnhancedEmailInputProps) {
    const [value, setValue] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [suggestionQuery, setSuggestionQuery] = useState("")
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        if (onEmailChange) onEmailChange(newValue)

        // Check if we should show suggestions
        const parts = newValue.split("@")
        if (parts.length === 2 && newValue.includes("@")) {
            // User has typed '@', show suggestions matching the part after @
            setSuggestionQuery(parts[1])
            setShowSuggestions(true)
        } else {
            setShowSuggestions(false)
        }
    }

    const handleSelectDomain = (domain: string) => {
        const parts = value.split("@")
        const newValue = `${parts[0]}@${domain}`
        setValue(newValue)
        if (onEmailChange) onEmailChange(newValue)
        setShowSuggestions(false)
    }

    const filteredDomains = COMMON_DOMAINS.filter(domain =>
        domain.toLowerCase().startsWith(suggestionQuery.toLowerCase())
    )

    return (
        <div className="relative" ref={wrapperRef}>
            <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                    {...props}
                    type="email"
                    className={`pl-10 ${className}`}
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>

            {showSuggestions && filteredDomains.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
                    <div className="p-1">
                        <div className="px-2 py-1.5 text-xs font-semibold text-slate-500 bg-slate-50 rounded-sm mb-1">
                            ドメイン候補
                        </div>
                        {filteredDomains.map((domain) => (
                            <button
                                key={domain}
                                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-sm flex items-center gap-2"
                                onClick={() => handleSelectDomain(domain)}
                            >
                                <span className="text-slate-400">@</span>
                                {domain}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
