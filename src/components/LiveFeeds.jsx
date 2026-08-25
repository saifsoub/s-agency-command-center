import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FEEDS } from '@/data/agents'
import { cn } from '@/lib/utils'

const typeStyles = {
  alert: 'text-rose-400 border-rose-500/30',
  info: 'text-cyan-400 border-cyan-500/30',
  data: 'text-emerald-400 border-emerald-500/30',
  system: 'text-slate-400 border-slate-500/30',
}

export function LiveFeeds() {
  const [feeds, setFeeds] = useState(FEEDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeeds((prev) => {
        const newFeed = {
          id: Date.now(),
          time: new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Asia/Dubai' }).slice(0, 8),
          source: ['LUMEN', 'AETHER', 'NEXUS', 'SYSTEM', 'CIPHER'][Math.floor(Math.random() * 5)],
          msg: [
            'Packet integrity verified · zero drift',
            'Anomaly threshold recalibrated',
            'Node handshake complete · latency 14ms',
            'New entity fingerprint ingested',
            'Swarm consensus reached · 6/6',
            'Encrypted channel re-keyed',
          ][Math.floor(Math.random() * 6)],
          type: ['info', 'data', 'system', 'alert'][Math.floor(Math.random() * 4)],
        }
        return [newFeed, ...prev].slice(0, 8)
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300">
          LIVE ENCRYPTED FEEDS
        </h3>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="status-dot status-active animate-pulse" />
          STREAMING
        </span>
      </div>

      <div className="flex-1 space-y-1.5 overflow-y-auto font-mono text-[11px]">
        <AnimatePresence initial={false}>
          {feeds.map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={cn(
                'flex gap-2 p-2 rounded border-l-2 bg-white/[0.02]',
                typeStyles[f.type]
              )}
            >
              <span className="text-slate-500 shrink-0">{f.time}</span>
              <span className="text-cyan-500/80 shrink-0 w-16 truncate">[{f.source}]</span>
              <span className="text-slate-300 leading-snug">{f.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
