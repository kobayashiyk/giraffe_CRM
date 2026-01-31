"use client"

import { Shell } from "@/components/layout/Shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertCircle, Clock, CheckCircle2, ArrowRight } from "lucide-react"

const salesData = [
    { name: '佐藤 朋子', sales: 4000000, cases: 5 },
    { name: '田中 正志', sales: 3000000, cases: 3 },
    { name: '鈴木 一郎', sales: 2000000, cases: 8 },
    { name: '高橋 健太', sales: 2780000, cases: 4 },
    { name: '伊藤 由美', sales: 1890000, cases: 2 },
];

const pipelineData = [
    { name: '見込み', value: 12 },
    { name: '適格性確認', value: 8 },
    { name: '提案', value: 15 },
    { name: '交渉', value: 6 },
    { name: 'クローズ済み', value: 24 },
];

const COLORS = ['#94a3b8', '#64748b', '#3b82f6', '#f59e0b', '#10b981'];

export default function DashboardPage() {
    return (
        <Shell>
            <div className="max-w-7xl mx-auto py-8 px-6 space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">マネジメントダッシュボード</h1>
                        <p className="text-slate-500">チームの売上実績および案件の進捗状況を可視化します</p>
                    </div>
                </div>

                {/* Top Alerts Row - Action Required */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-2 bg-amber-100 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-amber-900">要アクション: 期限切れ間近の案件 (3件)</h3>
                            <p className="text-sm text-amber-700 mt-1">「株式会社 エー・ビー・シー」他2件の完了予定日が3日後に迫っています。</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-blue-900">停滞中の案件 (5件)</h3>
                            <p className="text-sm text-blue-700 mt-1">過去14日間アクティビティがない案件があります。ステータスの更新を確認してください。</p>
                        </div>
                    </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="rounded-xl shadow-sm hover:shadow-md transition-all border-slate-200">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">今月の総売上</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-800">¥13,670,000</div>
                            <p className="text-xs text-green-600 font-bold flex items-center mt-1">
                                +20.1% 前月比
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow-sm hover:shadow-md transition-all border-slate-200 hover:border-blue-400 cursor-pointer group relative bg-gradient-to-br from-white to-blue-50/50">
                        <a href="/customers" className="absolute inset-0 z-10"></a>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500 group-hover:text-blue-600">進行中の案件数</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-800 group-hover:text-blue-600">41 件</div>
                            <p className="text-xs text-slate-500 mt-1">
                                平均確度 45%
                            </p>
                            <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow-sm hover:shadow-md transition-all border-slate-200">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-slate-500">目標達成率</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-slate-800">82%</div>
                            <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full shadow-sm" style={{ width: '82%' }}></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts & Activity Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Charts Column (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Sales by Rep */}
                        <Card className="col-span-1 rounded-xl shadow-sm border-slate-200">
                            <CardHeader>
                                <CardTitle>メンバー別 売上実績</CardTitle>
                                <CardDescription>今月の個人別売上高 (JPY)</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={salesData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <Tooltip
                                            cursor={{ fill: '#f1f5f9' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            formatter={(value: number | undefined) => value ? `¥${value.toLocaleString()}` : ''}
                                        />
                                        <Bar dataKey="sales" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24}>
                                            {salesData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={`hsl(217, 91%, ${60 - (index * 5)}%)`} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Pipeline Status */}
                        <Card className="col-span-1 rounded-xl shadow-sm border-slate-200">
                            <CardHeader>
                                <CardTitle>フェーズ別 案件数</CardTitle>
                                <CardDescription>現在のパイプライン分布状況</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={pipelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                        <Tooltip
                                            cursor={{ fill: '#f1f5f9' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                                            {pipelineData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Activity Feed Column (1/3 width) */}
                    <div className="lg:col-span-1">
                        <Card className="h-full rounded-xl shadow-sm border-slate-200">
                            <CardHeader>
                                <CardTitle>最近の活動</CardTitle>
                                <CardDescription>チームの最新アクション</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {[
                                        { user: "佐藤 朋子", action: "フェーズ更新", target: "株式会社アルファ", detail: "提案 → 交渉", time: "10分前", icon: ArrowRight, color: "text-blue-500", bg: "bg-blue-50" },
                                        { user: "田中 正志", action: "完了", target: "〇〇市役所 案件", detail: "契約書を送付しました", time: "1時間前", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50" },
                                        { user: "鈴木 一郎", action: "予定作成", target: "次回ミーティング", detail: "来週月曜 14:00~", time: "3時間前", icon: Clock, color: "text-purple-500", bg: "bg-purple-50" },
                                        { user: "佐藤 朋子", action: "新規作成", target: "新規案件C", detail: "問い合わせフォームより", time: "昨日", icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-50" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className={`mt-1 h-8 w-8 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                                <item.icon className={`h-4 w-4 ${item.color}`} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-800">
                                                    <span className="font-bold">{item.user}</span>が{item.action}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-0.5">{item.target}</p>
                                                <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                                                <p className="text-[10px] text-slate-400 mt-2 font-mono">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Shell>
    )
}
