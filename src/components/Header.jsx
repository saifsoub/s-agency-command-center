import { useState, useEffect } from 'react'
import { Lock, Activity, Wifi } from 'lucide-react'
import { formatTime, formatDate } from '@/lib/utils'

export function Header() {
  const [time, setTime] = useState(formatTime())
  const [date, setDate] = useState(formatDate())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime())
      setDate(formatDate())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-cyan-500/10 bg-navy-900/80 backdrop-blur-md flex-shrink-0">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-cyan-50 flex items-center gap-2">
            S/AGENCY COMMAND CENTER
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
              TOP SECRET
            </span>
          </h1>
          <p className="text-[11px] text-cyan-400/70 font-mono tracking-wider">
            LUMEN · INTELLIGENCE & OPERATIONS
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
            <span className="status-dot status-active" />
            <span className="font-mono">CORE ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400/80">
            <Wifi className="w-3.5 h-3.5" />
            <span className="font-mono">FEDERATED</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400/80">
            <Lock className="w-3.5 h-3.5" />
            <span className="font-mono">AES-256</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400/80">
            <Activity className="w-3.5 h-3.5" />
            <span className="font-mono">18ms</span>
          </div>
        </div>

        <div className="text-right border-l border-white/10 pl-5">
          <div className="text-sm font-mono font-medium text-cyan-100 tabular-nums">{time}</div>
          <div className="text-[10px] text-slate-500 font-mono">{date}</div>
        </div>
      </div>
    </header>
  )
}
