import { Puzzle } from 'lucide-react'
const PLUGINS = [
  { id: 'pl_stripe', name: 'Stripe Billing', version: '1.2.0', enabled: true },
  { id: 'pl_base44', name: 'Base44 Super-Agent', version: '0.8.x', enabled: true },
  { id: 'pl_tts', name: 'Command TTS / TTSL', version: '1.0.0', enabled: true },
  { id: 'pl_telephony', name: 'Open Telephony (LiveKit)', version: '0.9.0', enabled: true },
  { id: 'pl_orbs', name: 'Orbs Design System', version: '2.0.0', enabled: true },
  { id: 'pl_diffbot', name: 'Diffbot Market Intel', version: '0.4.0', enabled: false },
]
export default function PluginsPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Puzzle className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">PLUGINS</h1>
          <p className="text-xs text-slate-400 font-mono">Extensible capability modules</p>
        </div>
      </div>
      <div className="space-y-2 max-w-2xl">
        {PLUGINS.map((p) => (
          <div key={p.id} className="glass-panel p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-cyan-100 font-medium">{p.name}</div>
              <div className="text-[10px] font-mono text-slate-500">{p.id} · v{p.version}</div>
            </div>
            <span className={`text-[10px] font-mono px-2 py-1 rounded ${p.enabled ? 'bg-emerald-500/15 text-emerald-400' : 'bg-slate-500/20 text-slate-400'}`}>
              {p.enabled ? 'ENABLED' : 'OFF'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
