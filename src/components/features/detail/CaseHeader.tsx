"use client"

import React from "react"
import { Check, Edit, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
    { label: "見込み", status: "complete" },
    { label: "適格性確認", status: "complete" },
    { label: "提案", status: "current" },
    { label: "交渉", status: "upcoming" },
    { label: "クローズ済み", status: "upcoming" },
]

export function CaseHeader() {
    return (
        <div className="bg-white border-b border-slate-200 p-6 space-y-6">
            {/* Top Row: Icon + Title + Actions */}
            <div className="flex justify-between items-start">
                <div className="flex gap-4">
                    <div className="h-12 w-12 bg-orange-500 rounded-md flex items-center justify-center shadow-sm text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L1 21h22L12 2zm0 3.8L19.5 19H4.5L12 5.8z" opacity="0.5" />
                            <path d="M12 7L7 17h10L12 7z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-slate-500">商談</div>
                        <h1 className="text-xl font-bold text-slate-900">ABC株式会社 新規契約</h1>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Plus className="h-4 w-4" /> フォローする
                    </Button>
                    <Button variant="outline">新規行動</Button>
                    <Button variant="outline">新規ToDo</Button>
                    <Button variant="outline" className="gap-2">
                        編集 <ChevronDown className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Bottom Row: Pipeline */}
            <div className="w-full">
                <div className="flex w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200 h-10">
                    {steps.map((step, index) => {
                        let bgColor = "bg-slate-100 text-slate-500"
                        let shapeClass = "clip-chevron-right" // Would need styling or svg background

                        if (step.status === "complete") {
                            bgColor = "bg-green-100 text-green-700 font-bold border-r border-white"
                        } else if (step.status === "current") {
                            bgColor = "bg-[#0A2647] text-white font-bold"
                        }

                        return (
                            <div key={index} className={`flex-1 flex items-center justify-center relative ${bgColor} group cursor-pointer transition-colors relative`}>
                                {/* Chevron CSS Hack simulation via simple borders for now, or SVG overlay */}
                                <div className="flex items-center gap-2 z-10 px-4">
                                    {step.status === "complete" && <Check className="h-4 w-4" />}
                                    <span className="text-sm whitespace-nowrap">{step.label}</span>
                                </div>

                                {/* Visual separator/chevron effect (simplified for speed) */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white z-20" />
                                )}
                            </div>
                        )
                    })}
                    <div className="px-4 flex items-center bg-blue-600 text-white font-bold text-sm cursor-pointer hover:bg-blue-700">
                        フェーズを完了としてマーク
                    </div>
                </div>
            </div>
        </div>
    )
}
