import { motion } from 'framer-motion'
import { AGENTS } from '@/data/agents'
import { AgentOrb } from './LumenOrb'
import { cn } from '@/lib/utils'

export function AgentRoster() {
  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300">
          ACTIVE AGENTS
        </h3>
        <span className="text-[10px] font-mono text-cyan-500/70">
          {AGENTS.filter(a => a.status === 'ACTIVE').length}/{AGENTS.length} LIVE
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {AGENTS.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className={cn(
              'flex items-center gap-3 p-2.5 rounded-lg border transition-colors',
              agent.status === 'ACTIVE'
                ? 'bg-cyan-500/5 border-cyan-500/15 hover:border-cyan-500/30'
                : 'bg-white/[0.02] border-white/5 opacity-70'
            )}
          >
            <AgentOrb agent={agent} size="sm" />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-cyan-100 tracking-wide">
                  {agent.codename}
                </span>
                <span className="text-[9px] font-mono text-slate-500">{agent.id}</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                {agent.location}
              </div>
            </div>

            <div className="text-right space-y-0.5">
              <div className={cn(
                'text-[9px] font-mono font-medium px-1.5 py-0.5 rounded',
                agent.status === 'ACTIVE' 
                  ? 'bg-emerald-500/15 text-emerald-400' 
                  : 'bg-amber-500/15 text-amber-400'
              )}>
                {agent.status}
              </div>
              <div className="text-[9px] font-mono text-slate-500">
                HR {agent.hr} · BPM {agent.bpm}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-white/5">
        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
          <span>SWARM LOAD</span>
          <span className="font-mono text-cyan-400">74%</span>
        </div>
        <div className="h-1.5 rounded-full bg-navy-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: '74%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  )
}
