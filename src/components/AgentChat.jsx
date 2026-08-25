import { useState, useRef, useEffect } from 'react'
import { Send, Terminal } from 'lucide-react'
import { CHAT_LOG } from '@/data/agents'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function AgentChat() {
  const [messages, setMessages] = useState(CHAT_LOG)
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const newMsg = {
      id: Date.now(),
      agent: 'OPERATOR',
      text: input.trim(),
      ts: new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Dubai' }).slice(0, 8),
    }
    setMessages((m) => [...m, newMsg])
    setInput('')

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          agent: 'LUMEN',
          text: 'Acknowledged. Routing to appropriate agent swarm. Cognitive load +2%.',
          ts: new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Dubai' }).slice(0, 8),
        },
      ])
    }, 1200)
  }

  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300">
          MULTI-AGENT CHAT
        </h3>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto mb-3 pr-1">
        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'text-[11px] leading-relaxed',
              m.agent === 'OPERATOR' ? 'text-right' : ''
            )}
          >
            <div className={cn(
              'inline-block max-w-[90%] px-2.5 py-1.5 rounded-lg',
              m.agent === 'LUMEN' && 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-100',
              m.agent === 'OPERATOR' && 'bg-blue-500/10 border border-blue-500/20 text-blue-100',
              m.agent !== 'LUMEN' && m.agent !== 'OPERATOR' && 'bg-white/5 border border-white/10 text-slate-200'
            )}>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-[9px] text-cyan-400/80">{m.agent}</span>
                <span className="font-mono text-[9px] text-slate-500">{m.ts}</span>
              </div>
              <p>{m.text}</p>
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Secure command console…"
          className="w-full bg-navy-900/80 border border-cyan-500/20 rounded-lg pl-3 pr-10 py-2 text-xs text-cyan-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 font-mono"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-cyan-400 hover:bg-cyan-500/10 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  )
}
