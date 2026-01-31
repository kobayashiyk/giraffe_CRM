"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Pencil, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CaseInfoSidebar() {
    return (
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <Accordion type="single" collapsible defaultValue="about">
                <AccordionItem value="about" className="border-b-0">
                    <AccordionTrigger className="bg-slate-50 px-4 py-3 hover:no-underline font-bold text-slate-700">
                        詳細
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                        <div className="p-4 space-y-4">

                            <div className="group relative">
                                <div className="text-xs text-slate-500">商談名</div>
                                <div className="text-sm font-medium text-slate-900 border-b border-transparent group-hover:border-slate-300 pb-1 flex justify-between">
                                    ABC株式会社 新規契約
                                    <Pencil className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="text-xs text-slate-500">取引先名</div>
                                <div className="text-sm font-medium text-blue-600 hover:underline border-b border-transparent group-hover:border-slate-300 pb-1 flex justify-between cursor-pointer">
                                    ABC株式会社
                                    <Pencil className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer text-slate-400" />
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="text-xs text-slate-500">完了予定日</div>
                                <div className="text-sm font-medium text-slate-900 border-b border-transparent group-hover:border-slate-300 pb-1 flex justify-between">
                                    2025/08/03
                                    <Pencil className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="text-xs text-slate-500">金額</div>
                                <div className="text-sm font-medium text-slate-900 border-b border-transparent group-hover:border-slate-300 pb-1 flex justify-between">
                                    ¥1,200,000
                                    <Pencil className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>

                            <div className="group relative pt-2">
                                <div className="text-xs text-slate-500">商談 所有者</div>
                                <div className="flex items-center justify-between border-b border-transparent group-hover:border-slate-300 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>SP</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm text-blue-600 hover:underline cursor-pointer">佐藤 朋子</span>
                                    </div>
                                    <User className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="status" className="border-t border-slate-200">
                    <AccordionTrigger className="bg-slate-50 px-4 py-3 hover:no-underline font-bold text-slate-700">
                        ステータス
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                        <div className="space-y-4">
                            <div className="group relative">
                                <div className="text-xs text-slate-500">フェーズ</div>
                                <div className="text-sm font-medium text-slate-900">提案 (Proposal)</div>
                            </div>
                            <div className="group relative">
                                <div className="text-xs text-slate-500">確度</div>
                                <div className="text-sm font-medium text-slate-900">60%</div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
