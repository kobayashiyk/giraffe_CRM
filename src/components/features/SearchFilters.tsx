"use client"

import React from "react"
import { Search, Filter, Plus, Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

export function SearchFilters() {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">

            {/* Search Input */}
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                    placeholder="Search projects..."
                    className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
            </div>

            {/* Filters & Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2 text-slate-600 border-slate-200">
                            <Filter className="h-4 w-4" />
                            Status
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>On Hold</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2 text-slate-600 border-slate-200">
                            <Calendar className="h-4 w-4" />
                            Date
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>Newest First</DropdownMenuItem>
                        <DropdownMenuItem>Oldest First</DropdownMenuItem>
                        <DropdownMenuItem>Due Soon</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-sm shadow-blue-200">
                    <Plus className="h-4 w-4" />
                    New Project
                </Button>
            </div>
        </div>
    )
}
