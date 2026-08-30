import { useState } from 'react'
import { base44 } from '@/api/base44Client'
import { GitBranch, Play } from 'lucide-react'
import { toast } from 'sonner'

const STEPS = [
  { id: 1, name: 'Ingest', tool: 'feeds.normalize' },
  { id: 2, name: 'Route', tool: 'superAgent.invoke' },
  { id: 3, name: 'Swarm', tool: 'agents.swarm' },
  { id: 4, name: 'Human gate', tool: 'approval.request' },
  { id: 5, name: 'Act', tool: 'tools.execute' },
  { id: 6, name: 'Observe', tool: 'metrics.write' },
]

export default function OrchestrationPage() {
  const [running, setRunning] = useState(false)
  const [active, setActive] = useState(0)
  const run = async () => {
    setRunning(true)
    for (let i = 0; i < STEPS.length; i++) {
      setActive(i + 1)
      await new Promise((r) => setTimeout(r, 400))
    }
    await base44.jobs.create({ type: 'orchestration', name: 'Manual swarm run' })
    toast.success('Orchestration job queued')
    setRunning(false)
    setActive(0)
  }
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          <div>
            <h1 className="text-xl font-semibold text-cyan-50">ORCHESTRATION</h1>
            <p className="text-xs text-slate-400 font-mono">Human-in-the-loop multi-agent pipelines</p>
          </div>
        </div>
        <button onClick={run} disabled={running} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-navy-900 text-sm font-semibold disabled:opacity-50">
          <Play className="w-4 h-4" /> Run pipeline
        </button>
      </div>
      <div className="glass-panel p-6 max-w-2xl">
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.id} className={`flex items-center gap-4 p-3 rounded-lg border ${
              active === s.id ? 'border-cyan-400/50 bg-cyan-500/10' : active > s.id ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/5'
            }`}>
              <span className="w-7 h-7 rounded-full bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-xs font-mono text-cyan-300">{s.id}</span>
              <div className="flex-1">
                <div className="text-sm text-cyan-100">{s.name}</div>
                <div className="text-[10px] font-mono text-slate-500">{s.tool}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
