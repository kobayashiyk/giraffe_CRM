"use client"

import React from "react"
import { Eye, FileText, Landmark, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock Data matching "Case Search" context
const cases = [
    {
        id: 1,
        title: "庁舎改修工事に伴う設計業務委託",
        municipality: "東京都 渋谷区",
        type: "委託",
        industryMajor: "建設コンサルタント",
        announceDate: "2024/12/20",
        bidDate: "2025/01/15",
        status: "公募中",
    },
    {
        id: 2,
        title: "学校給食調理業務委託",
        municipality: "東京都 世田谷区",
        type: "委託",
        industryMajor: "役務の提供",
        announceDate: "2024/12/19",
        bidDate: "2025/01/20",
        status: "公募中",
    },
    {
        id: 3,
        title: "区立公園遊具設置工事",
        municipality: "東京都 新宿区",
        type: "工事",
        industryMajor: "土木一式",
        announceDate: "2024/12/18",
        bidDate: "2025/01/10",
        status: "終了",
    },
]

export function CaseList() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <h3 className="text-lg font-bold text-slate-700">検索結果</h3>
                <span className="text-sm text-slate-500">該当件数: {cases.length}件</span>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 bg-slate-50 p-4 border-b border-slate-200 text-xs font-bold text-slate-500">
                    <div className="col-span-5">案件名 / 発注者</div>
                    <div className="col-span-2">種別 / 業種</div>
                    <div className="col-span-3">日程 (公示/開札)</div>
                    <div className="col-span-2 text-center">ステータス</div>
                </div>

                {/* List Items */}
                {cases.map((c) => (
                    <div key={c.id} className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 items-center hover:bg-[#FFFDE7]/50 transition-colors group">
                        <div className="col-span-5 space-y-1">
                            <a href={`/cases/${c.id}`} className="text-blue-600 font-bold text-base hover:underline cursor-pointer flex items-center gap-2">
                                {c.title}
                            </a>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Landmark className="h-4 w-4 text-slate-400" />
                                {c.municipality}
                            </div>
                        </div>

                        <div className="col-span-2 space-y-1">
                            <Badge variant="outline" className="bg-white font-normal text-slate-600">
                                {c.type}
                            </Badge>
                            <div className="text-xs text-slate-500">{c.industryMajor}</div>
                        </div>

                        <div className="col-span-3 space-y-1 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400 min-w-[30px]">公示</span>
                                {c.announceDate}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400 min-w-[30px]">開札</span>
                                {c.bidDate}
                            </div>
                        </div>

                        <div className="col-span-2 flex justify-center">
                            <Badge className={
                                c.status === "公募中"
                                    ? "bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 border-slate-200"
                            }>
                                {c.status}
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Mock */}
            <div className="flex justify-center py-4">
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>前へ</Button>
                    <Button variant="outline" size="sm" className="bg-[#FFE55C] border-yellow-400 text-slate-900 font-bold">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">次へ</Button>
                </div>
            </div>
        </div>
    )
}
