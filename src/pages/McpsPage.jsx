import { Cable } from 'lucide-react'
const MCPS = [
  { id: 'mcp_github', name: 'GitHub', status: 'connected', tools: 24 },
  { id: 'mcp_vercel', name: 'Vercel', status: 'connected', tools: 12 },
  { id: 'mcp_linear', name: 'Linear', status: 'connected', tools: 18 },
  { id: 'mcp_notion', name: 'Notion', status: 'connected', tools: 9 },
  { id: 'mcp_figma', name: 'Figma', status: 'connected', tools: 8 },
  { id: 'mcp_gmail', name: 'Gmail', status: 'connected', tools: 6 },
  { id: 'mcp_voice', name: 'Voice (TTS)', status: 'ready', tools: 3 },
  { id: 'mcp_livekit', name: 'LiveKit Telephony', status: 'stub', tools: 5 },
]
export default function McpsPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Cable className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">MCPs</h1>
          <p className="text-xs text-slate-400 font-mono">Model Context Protocol connectors</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {MCPS.map((m) => (
          <div key={m.id} className="glass-panel p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-cyan-100">{m.name}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                m.status === 'connected' ? 'bg-emerald-500/15 text-emerald-400' : m.status === 'ready' ? 'bg-cyan-500/15 text-cyan-400' : 'bg-amber-500/15 text-amber-400'
              }`}>{m.status}</span>
            </div>
            <div className="text-[10px] font-mono text-slate-500">{m.id} · {m.tools} tools</div>
          </div>
        ))}
      </div>
    </div>
  )
}
