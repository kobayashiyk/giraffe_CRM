"use client"

import React from "react"
import { Users, FileText, Tag, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RelatedListSidebar() {
    return (
        <div className="space-y-4">
            {/* Contacts Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-0 overflow-hidden shadow-sm">
                <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white">
                            <Users className="h-3 w-3" />
                        </div>
                        取引先責任者の役割 (1)
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                <div className="p-4">
                    <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center text-white">
                            <User className="h-4 w-4" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">田中 正志</div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mt-1">
                                <span className="text-slate-500">ロール:</span>
                                <span className="text-slate-900">ビジネスユーザ</span>
                                <span className="text-slate-500">役職:</span>
                                <span className="text-slate-900">部長</span>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-slate-400 ml-auto" />
                    </div>
                </div>
                <div className="p-2 border-t border-slate-100 text-center">
                    <Button variant="link" className="text-blue-600 h-auto py-1 text-xs">すべて表示</Button>
                </div>
            </div>

            {/* Files Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-0 overflow-hidden shadow-sm">
                <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <div className="h-6 w-6 rounded bg-slate-400 flex items-center justify-center text-white">
                            <FileText className="h-3 w-3" />
                        </div>
                        ファイル (1)
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                <div className="p-4">
                    <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                            {/* Tiny visual representation of PDF/Image */}
                            <div className="w-full h-full bg-white flex flex-col items-center justify-center text-[8px] text-slate-300">PDF</div>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">Pro Suite提案書</div>
                            <div className="text-xs text-slate-500 mt-1">2025/06/19 • 531KB • png</div>
                        </div>
                    </div>
                </div>
                <div className="p-2 border-t border-slate-100 text-center">
                    <Button variant="link" className="text-blue-600 h-auto py-1 text-xs">すべて表示</Button>
                </div>
            </div>

            {/* Quotes Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-0 overflow-hidden shadow-sm">
                <div className="p-3 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <div className="h-6 w-6 rounded bg-green-600 flex items-center justify-center text-white">
                            <Tag className="h-3 w-3" />
                        </div>
                        Quotes (0)
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
                <div className="p-2 border-t border-slate-100 text-center">

                </div>
            </div>
        </div>
    )
}
