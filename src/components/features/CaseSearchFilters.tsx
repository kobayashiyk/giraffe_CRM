"use client"

import React from "react"
import { Search, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function CaseSearchFilters() {
    return (
        <div className="bg-white p-6 rounded-none space-y-6">

            <div className="flex items-center gap-2 mb-2">
                <h2 className="text-lg font-bold text-slate-700">検索条件</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
                {/* Row 1 */}
                <div className="space-y-2">
                    <Label htmlFor="caseName" className="text-xs font-bold text-slate-600">件名（部分一致）</Label>
                    <Input id="caseName" className="bg-slate-50 border-slate-100" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="municipality" className="text-xs font-bold text-slate-600">自治体</Label>
                    <Input id="municipality" className="bg-slate-50 border-slate-100" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="type" className="text-xs font-bold text-slate-600">種別</Label>
                    <Select>
                        <SelectTrigger className="bg-slate-50 border-slate-100">
                            <SelectValue placeholder="すべて" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">すべて</SelectItem>
                            <SelectItem value="construction">工事</SelectItem>
                            <SelectItem value="consulting">委託</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="industryMajor" className="text-xs font-bold text-slate-600">業種（大分類）</Label>
                    <Select>
                        <SelectTrigger className="bg-slate-50 border-slate-100">
                            <SelectValue placeholder="すべて" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">すべて</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Row 2 */}
                <div className="space-y-2">
                    <Label htmlFor="location" className="text-xs font-bold text-slate-600">履行場所</Label>
                    <Input id="location" className="bg-slate-50 border-slate-100" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="announceDate" className="text-xs font-bold text-slate-600">公示開始日</Label>
                    <Input id="announceDate" placeholder="12/21/2025" className="bg-slate-50 border-slate-100" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="openDate" className="text-xs font-bold text-slate-600">開札日</Label>
                    <Input id="openDate" placeholder="12/21/2025" className="bg-slate-50 border-slate-100" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="industryMinor" className="text-xs font-bold text-slate-600">業種（小分類）</Label>
                    <Select>
                        <SelectTrigger className="bg-slate-50 border-slate-100">
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">すべて</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Row 3 (Winning/Bidding) */}
                <div className="space-y-2">
                    <Label htmlFor="winner" className="text-xs font-bold text-slate-600">落札企業</Label>
                    <Input id="winner" className="bg-slate-50 border-slate-100" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bidder" className="text-xs font-bold text-slate-600">入札企業</Label>
                    <Input id="bidder" className="bg-slate-50 border-slate-100" />
                </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
                <Button className="bg-[#FFE55C] hover:bg-[#FDD835] text-slate-800 font-bold px-8 shadow-sm">
                    <Search className="h-4 w-4 mr-2" />
                    検索
                </Button>
                <Button variant="outline" className="text-slate-500 border-slate-200 bg-slate-50 shadow-sm">
                    <Save className="h-4 w-4 mr-2" />
                    検索条件を保存
                </Button>
            </div>
        </div>
    )
}
