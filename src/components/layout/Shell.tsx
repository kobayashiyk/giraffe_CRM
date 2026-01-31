"use client"

import React, { useState } from "react"
import { Menu, Search, Briefcase, Users, Settings, Bell, Home, MessageSquare, UserCheck, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ShellProps {
  children: React.ReactNode
}

export function Shell({ children }: ShellProps) {
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200 text-sm">
      <div className="p-6 flex items-center justify-center">
        {/* Mock Logo matching GIRAFFE */}
        <div className="flex items-center gap-2">
          <div className="text-yellow-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h2v2H7V2zm4 4h2v2h-2V6zm-4 4h2v2H7v-2zm-2 4h2v10H5V14zm14 0h2v10h-2V14zm-4-8h2v18h-2V6z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-wider">GIRAFFE</span>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {/* Navigation Items could go here if needed, but screenshot implies a top-level focus */}
      </nav>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="h-16 bg-white flex items-center justify-between px-6 border-b border-slate-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-1 text-slate-600 font-bold hover:bg-slate-50" onClick={() => window.history.back()}>
            <ChevronLeft className="h-4 w-4" />
            戻る
          </Button>
          <div className="h-6 w-[1px] bg-slate-200 mx-2" />
          <nav className="flex items-center gap-1">
            <a href="/" className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50">案件検索</a>
            <a href="/customers" className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50">顧客管理</a>
            <a href="/dashboard" className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50">ダッシュボード</a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-yellow-500">
            {/* Giraffe Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h2v2H7V2zm4 4h2v2h-2V6zm-4 4h2v2H7v-2zm-2 4h2v10H5V14zm14 0h2v10h-2V14zm-4-8h2v18h-2V6z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-wider">GIRAFFE</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-amber-700 hover:bg-amber-50 rounded-lg">
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-amber-700 hover:bg-amber-50 rounded-lg">
            <UserCheck className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white min-h-[calc(100vh-64px)]">
        {children}
      </main>
    </div>
  )
}
