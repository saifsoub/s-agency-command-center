import { useState, useEffect } from 'react'
import { speak, stopSpeaking, commandNarrator, listVoices } from '@/lib/voice'
import telephony from '@/lib/telephony'
import { Mic, Phone, PhoneOff, Volume2 } from 'lucide-react'
import { toast } from 'sonner'

export default function VoiceTelPage() {
  const [text, setText] = useState('LUMEN federated core online. Cognitive assurance active.')
  const [connected, setConnected] = useState(false)
  const [participants, setParticipants] = useState([])
  const [voices, setVoices] = useState([])

  useEffect(() => {
    const load = () => setVoices(listVoices())
    load()
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = load
    }
    const off = telephony.on('participants', setParticipants)
    const off2 = telephony.on('connected', () => setConnected(true))
    const off3 = telephony.on('disconnected', () => { setConnected(false); setParticipants([]) })
    return () => { off(); off2(); off3() }
  }, [])

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Mic className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">VOICE · TTS / TTSL · TELEPHONY</h1>
          <p className="text-xs text-slate-400 font-mono">Browser TTS + open-source LiveKit / FreeSWITCH ready</p>
        </div>
      </div>

      <div className="glass-panel p-5 max-w-2xl">
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300 mb-3 flex items-center gap-2">
          <Volume2 className="w-3.5 h-3.5" /> TEXT-TO-SPEECH (TTS)
        </h3>
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-navy-900/80 border border-cyan-500/20 rounded-lg p-3 text-sm text-cyan-100 font-mono min-h-[80px] focus:outline-none focus:border-cyan-400/50" />
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => speak(text)} className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30">Speak</button>
          <button onClick={() => stopSpeaking()} className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs border border-white/10">Stop</button>
          <button onClick={() => { commandNarrator.enqueue(text); toast.message('Queued to TTSL') }} className="px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 text-xs border border-violet-500/30">Enqueue TTSL</button>
        </div>
        <p className="mt-2 text-[10px] text-slate-500 font-mono">Voices: {voices.length || 'loading…'}</p>
      </div>

      <div className="glass-panel p-5 max-w-2xl">
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300 mb-3 flex items-center gap-2">
          <Phone className="w-3.5 h-3.5" /> OPEN TELEPHONY
        </h3>
        <p className="text-sm text-slate-400 mb-4">Stub mode works now. Production: LiveKit URL + token, or FreeSWITCH / Asterisk / Jitsi / Janus on the same event bus.</p>
        <div className="flex gap-2 mb-4">
          {!connected ? (
            <button onClick={async () => { await telephony.connect({ room: 'lumen-command', mode: 'stub' }); toast.success('Room connected') }} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-sm border border-emerald-500/30">
              <Phone className="w-4 h-4" /> Connect room
            </button>
          ) : (
            <button onClick={() => telephony.disconnect()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/20 text-rose-300 text-sm border border-rose-500/30">
              <PhoneOff className="w-4 h-4" /> Disconnect
            </button>
          )}
          <button onClick={() => telephony.inviteAgent('AETHER')} disabled={!connected} className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 text-sm disabled:opacity-40">Invite AETHER</button>
        </div>
        <div className="text-[11px] font-mono text-slate-400 space-y-1">
          <div>mode: {telephony.state.mode} · connected: {String(connected)}</div>
          <div>callId: {telephony.state.callId || '—'}</div>
          <div>participants: {participants.map((p) => p.name).join(', ') || 'none'}</div>
        </div>
      </div>
    </div>
  )
}
