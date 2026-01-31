import { Shell } from "@/components/layout/Shell"
import { CaseSearchFilters } from "@/components/features/CaseSearchFilters"
import { CaseList } from "@/components/features/CaseList"

export default function Home() {
  return (
    <Shell>
      {/* Yellow Banner */}
      <div className="bg-[#FFE55C] w-full py-12 mb-8 flex items-center justify-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800 tracking-wider">案件検索</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <CaseSearchFilters />
        <div className="mt-12">
          <CaseList />
        </div>
      </div>
    </Shell>
  )
}
