import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { base44 } from '@/api/base44Client'
import { Orb } from '@/design-system/orbs'

export default function AgentsPage() {
  const { data: agents = [], isLoading } = useQuery({
    queryKey: ['agents'],
    queryFn: () => base44.agents.list(),
  })
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-cyan-50 tracking-wide">AGENTS</h1>
          <p className="text-xs text-slate-400 font-mono mt-1">Federated swarm · Base44 entity layer</p>
        </div>
        <span className="text-[11px] font-mono text-emerald-400">
          {agents.filter((a) => a.status === 'ACTIVE').length} ACTIVE
        </span>
      </div>
      {isLoading && <div className="text-slate-400 text-sm">Loading agents…</div>}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {agents.map((a) => {
          const preset = a.color?.includes('violet') ? 'violet' : a.color?.includes('emerald') ? 'emerald' : a.color?.includes('amber') ? 'amber' : a.color?.includes('rose') ? 'rose' : a.color?.includes('sky') ? 'sky' : 'cyan'
          return (
            <Link key={a.id} to={`/app/agents/${a.id}`} className="glass-panel p-4 hover:border-cyan-400/40 transition block">
              <div className="flex items-center gap-3 mb-3">
                <Orb preset={preset} size="md" status={a.status} />
                <div>
                  <div className="font-semibold text-cyan-100">{a.codename}</div>
                  <div className="text-[10px] font-mono text-slate-500">{a.id} · {a.location}</div>
                </div>
              </div>
              <div className="flex gap-3 text-[10px] font-mono text-slate-400">
                <span>HR {a.hr}</span><span>BPM {a.bpm}</span><span>LOAD {a.load}%</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
