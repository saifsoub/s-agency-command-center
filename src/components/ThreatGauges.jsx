import { motion } from 'framer-motion'
import { THREATS } from '@/data/agents'
import { cn } from '@/lib/utils'

const colorMap = {
  rose: { bar: 'from-rose-500 to-rose-400', text: 'text-rose-400', bg: 'bg-rose-500/15' },
  amber: { bar: 'from-amber-500 to-amber-400', text: 'text-amber-400', bg: 'bg-amber-500/15' },
  cyan: { bar: 'from-cyan-500 to-cyan-400', text: 'text-cyan-400', bg: 'bg-cyan-500/15' },
  emerald: { bar: 'from-emerald-500 to-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/15' },
}

export function ThreatGauges() {
  return (
    <div className="glass-panel p-4 h-full">
      <h3 className="text-xs font-semibold tracking-widest text-cyan-300 mb-3">
        THREAT / RISK MATRIX
      </h3>
      <div className="space-y-3.5">
        {THREATS.map((t, i) => {
          const c = colorMap[t.color]
          return (
            <div key={t.id}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-slate-300">{t.label}</span>
                <div className="flex items-center gap-2">
                  <span className={cn('text-[9px] font-mono font-medium px-1.5 py-0.5 rounded', c.bg, c.text)}>
                    {t.level}
                  </span>
                  <span className={cn('text-xs font-mono font-semibold tabular-nums', c.text)}>
                    {t.value}%
                  </span>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-navy-700 overflow-hidden">
                <motion.div
                  className={cn('h-full rounded-full bg-gradient-to-r', c.bar)}
                  initial={{ width: 0 }}
                  animate={{ width: `${t.value}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
