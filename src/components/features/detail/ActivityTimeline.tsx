"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Calendar, CheckSquare, Settings, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { EnhancedEmailInput } from "@/components/ui/enhanced-email-input"

export function ActivityTimeline() {
    return (
        <div className="space-y-4">
            {/* Activity Composer */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                <Tabs defaultValue="log" className="w-full">
                    <div className="flex justify-between items-center mb-4">
                        <TabsList className="bg-transparent h-auto p-0 gap-2">
                            <TabsTrigger value="email" className="data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 border border-slate-200 rounded-md px-3 py-2 text-slate-600 gap-2">
                                <Mail className="h-4 w-4" />
                            </TabsTrigger>
                            <TabsTrigger value="task" className="data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 border border-slate-200 rounded-md px-3 py-2 text-slate-600 gap-2">
                                <CheckSquare className="h-4 w-4" />
                            </TabsTrigger>
                            <TabsTrigger value="event" className="data-[state=active]:bg-slate-100 data-[state=active]:text-blue-600 border border-slate-200 rounded-md px-3 py-2 text-slate-600 gap-2">
                                <Calendar className="h-4 w-4" />
                            </TabsTrigger>
                            <TabsTrigger value="log" className="data-[state=active]:bg-[#0A2647] data-[state=active]:text-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 gap-2">
                                <Phone className="h-4 w-4" />
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="email" className="space-y-4 mt-0">
                        <div className="bg-slate-50 p-3 rounded-md border border-slate-200 flex flex-col gap-3">
                            <Input placeholder="件名: 商談の件について" className="bg-white" />
                            <EnhancedEmailInput placeholder="宛先: email@domain.com" className="bg-white" />
                        </div>

                        <div className="relative">
                            <Input placeholder="メール本文を作成..." className="pb-24 pt-3 h-32 align-top" />
                            <div className="absolute bottom-2 right-2 flex gap-2">
                                <Button size="sm" variant="outline">下書き保存</Button>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">送信</Button>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="log" className="space-y-4 mt-0">
                        <div className="bg-slate-50 p-3 rounded-md border border-slate-200 flex items-center justify-between text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Settings className="h-4 w-4 text-blue-500" />
                                インサイトのある活動のみを表示
                            </div>
                            <Switch />
                        </div>

                        <div className="relative">
                            <Input placeholder="活動の詳細を記入..." className="pb-12 pt-3" />
                            <div className="absolute bottom-2 right-2 flex gap-2">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">保存</Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Timeline Feed */}
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-6">
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-sm mb-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <ChevronDown className="h-4 w-4" />
                        今後 & 期限切れ
                    </div>
                </div>

                <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <Calendar className="h-4 w-4" />
                        </div>
                        <div className="w-[1px] h-full bg-slate-200 my-2" />
                    </div>
                    <div className="flex-1 pb-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">訪問予定</div>
                                <div className="text-xs text-slate-500 mt-1">
                                    <span className="text-blue-600 hover:underline cursor-pointer">田中 正志</span> さんとの今後の行動があります
                                </div>
                            </div>
                            <div className="text-xs text-slate-500">14:00 | 06/27</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-sm mb-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <ChevronDown className="h-4 w-4" />
                        6月 • 2025
                    </div>
                    <span className="text-xs text-slate-500">今月</span>
                </div>

                <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <Phone className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="flex-1 pb-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">電話</div>
                                <div className="text-xs text-slate-500 mt-1">
                                    <span className="text-blue-600 hover:underline cursor-pointer">田中 正志</span> さんとの活動を記録しました
                                </div>
                            </div>
                            <div className="text-xs text-slate-500">今日</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
