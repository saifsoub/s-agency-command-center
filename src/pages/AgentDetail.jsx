import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { base44 } from '@/api/base44Client'
import { Orb } from '@/design-system/orbs'
import { speak } from '@/lib/voice'
import { ArrowLeft, Mic } from 'lucide-react'

export default function AgentDetail() {
  const { id } = useParams()
  const { data: agent, isLoading } = useQuery({ queryKey: ['agent', id], queryFn: () => base44.agents.get(id) })
  if (isLoading) return <div className="p-6 text-slate-400">Loading…</div>
  if (!agent) return <div className="p-6 text-rose-400">Agent not found</div>
  const preset = agent.color?.includes('violet') ? 'violet' : agent.color?.includes('emerald') ? 'emerald' : agent.color?.includes('amber') ? 'amber' : agent.color?.includes('rose') ? 'rose' : agent.color?.includes('sky') ? 'sky' : 'cyan'
  return (
    <div className="h-full overflow-y-auto p-6">
      <Link to="/app/agents" className="inline-flex items-center gap-2 text-xs text-cyan-400 mb-6 hover:underline"><ArrowLeft className="w-3.5 h-3.5" /> Back</Link>
      <div className="glass-panel p-8 max-w-3xl flex items-start gap-6">
        <Orb preset={preset} size="xl" status={agent.status} float />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-cyan-50">{agent.codename}</h1>
          <p className="font-mono text-sm text-slate-400 mt-1">{agent.id} · {agent.location}</p>
          <div className="mt-4 flex gap-4 text-sm font-mono">
            <span className="text-emerald-400">{agent.status}</span>
            <span className="text-slate-400">HR {agent.hr}</span>
            <span className="text-slate-400">BPM {agent.bpm}</span>
            <span className="text-cyan-400">LOAD {agent.load}%</span>
          </div>
          <button onClick={() => speak(`${agent.codename} online. Location ${agent.location}. Status ${agent.status}.`)} className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-300 text-xs hover:bg-cyan-500/10">
            <Mic className="w-3.5 h-3.5" /> Speak status (TTS)
          </button>
        </div>
      </div>
    </div>
  )
}
