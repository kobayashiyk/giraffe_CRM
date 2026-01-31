"use client"

import { Shell } from "@/components/layout/Shell"
import { CaseHeader } from "@/components/features/detail/CaseHeader"
import { CaseInfoSidebar } from "@/components/features/detail/CaseInfoSidebar"
import { ActivityTimeline } from "@/components/features/detail/ActivityTimeline"
import { RelatedListSidebar } from "@/components/features/detail/RelatedListSidebar"

export default function CaseDetailPage() {
    return (
        <Shell>
            <div className="bg-slate-50 min-h-full">
                <CaseHeader />

                <div className="max-w-[1600px] mx-auto p-4 md:p-6 grid grid-cols-12 gap-6 items-start">
                    {/* Left: Info Sidebar (3 cols) */}
                    <div className="col-span-12 lg:col-span-3">
                        <CaseInfoSidebar />
                    </div>

                    {/* Center: Activity Timeline (6 cols) */}
                    <div className="col-span-12 lg:col-span-6">
                        <ActivityTimeline />
                    </div>

                    {/* Right: Related Lists (3 cols) */}
                    <div className="col-span-12 lg:col-span-3">
                        <RelatedListSidebar />
                    </div>
                </div>
            </div>
        </Shell>
    )
}
