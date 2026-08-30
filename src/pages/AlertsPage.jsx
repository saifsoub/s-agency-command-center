import { useQuery } from '@tanstack/react-query'
import { base44 } from '@/api/base44Client'
import { cn } from '@/lib/utils'
import { Bell } from 'lucide-react'

const sev = {
  HIGH: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  ELEVATED: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  MODERATE: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  LOW: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
}

export default function AlertsPage() {
  const { data: alerts = [] } = useQuery({ queryKey: ['alerts'], queryFn: () => base44.alerts.list() })
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">ALERTS BOARD</h1>
          <p className="text-xs text-slate-400 font-mono">Live risk & compliance signals</p>
        </div>
      </div>
      <div className="space-y-3 max-w-3xl">
        {alerts.map((a) => (
          <div key={a.id} className="glass-panel p-4 flex items-start gap-4">
            <span className={cn('text-[10px] font-mono px-2 py-1 rounded border', sev[a.severity] || sev.MODERATE)}>{a.severity}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-cyan-100">{a.title}</div>
              <div className="text-[10px] font-mono text-slate-500 mt-1">{a.source} · {a.status} · {new Date(a.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
