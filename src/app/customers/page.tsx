"use client"

import { Shell } from "@/components/layout/Shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, MapPin, Phone, Mail } from "lucide-react"

// Mock Data
const customers = [
    { id: 1, name: "東京都 渋谷区", type: "自治体", address: "東京都渋谷区宇田川町1-1", phone: "03-3463-1211", rank: "A", assignee: "佐藤 朋子" },
    { id: 2, name: "株式会社 TechConstruct", type: "民間企業", address: "東京都港区六本木6-10-1", phone: "03-1234-5678", rank: "B", assignee: "田中 正志" },
    { id: 3, name: "神奈川県 横浜市", type: "自治体", address: "横浜市中区港町1-1", phone: "045-671-2121", rank: "A", assignee: "佐藤 朋子" },
    { id: 4, name: "有限会社 下町建設", type: "民間企業", address: "東京都台東区浅草1-1", phone: "03-9999-8888", rank: "C", assignee: "鈴木 一郎" },
]

const RankBadge = ({ rank }: { rank: string }) => {
    let styles = "bg-slate-100 text-slate-600"
    if (rank === "A") styles = "bg-yellow-100 text-yellow-700 border-yellow-200"
    if (rank === "B") styles = "bg-slate-100 text-slate-700 border-slate-200"
    if (rank === "C") styles = "bg-orange-50 text-orange-800 border-orange-100"

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${styles}`}>
            ランク {rank}
        </span>
    )
}

export default function CustomersPage() {
    return (
        <Shell>
            <div className="max-w-7xl mx-auto py-8 px-6">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">顧客管理</h1>
                        <p className="text-slate-500 text-sm">自治体および取引先企業の情報を管理します</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                        <Plus className="h-4 w-4" />
                        新規登録
                    </Button>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-96">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <Input placeholder="顧客名・住所で検索..." className="pl-10" />
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-slate-50">
                                <TableHead className="w-[300px]">顧客名</TableHead>
                                <TableHead>ランク</TableHead>
                                <TableHead>担当者</TableHead>
                                <TableHead>種別</TableHead>
                                <TableHead>住所</TableHead>
                                <TableHead>電話番号</TableHead>
                                <TableHead className="text-right">アクション</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((c) => (
                                <TableRow key={c.id}>
                                    <TableCell className="font-bold text-slate-700">{c.name}</TableCell>
                                    <TableCell>
                                        <RankBadge rank={c.rank} />
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        {c.assignee}
                                    </TableCell>
                                    <TableCell>
                                        <span className="px-2 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                                            {c.type}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-slate-600 flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {c.address}
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        <div className="flex items-center gap-1">
                                            <Phone className="h-3 w-3" />
                                            {c.phone}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" className="text-blue-600">詳細</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </Shell>
    )
}
