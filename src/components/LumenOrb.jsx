import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function LumenOrb({ size = 'lg', className, showCore = true }) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-40 h-40 md:w-52 md:h-52',
    xl: 'w-64 h-64',
  }

  return (
    <motion.div
      className={cn('relative flex items-center justify-center', sizes[size], className)}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-pulse-glow" />
      <div className="absolute -inset-4 rounded-full border border-cyan-400/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
      <div className="absolute -inset-8 rounded-full border border-cyan-500/10" style={{ animation: 'spin 30s linear infinite reverse' }} />

      <div className={cn(
        'relative rounded-full lumen-orb overflow-hidden',
        sizes[size],
        'border border-white/20'
      )}>
        <div className="absolute top-[12%] left-[18%] w-[35%] h-[22%] rounded-full bg-gradient-to-br from-white/50 to-transparent blur-[1px]" />
        <div className="absolute top-[8%] right-[22%] w-[15%] h-[12%] rounded-full bg-white/30 blur-[0.5px]" />

        {showCore && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-[55%] h-[70%]"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="w-[38%] h-[22%] rounded-full bg-gradient-to-b from-cyan-200/80 to-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.6)]" />
                <div className="w-[12%] h-[8%] bg-cyan-300/50 -mt-0.5" />
                <div className="w-[55%] h-[35%] rounded-t-full bg-gradient-to-b from-cyan-300/50 to-cyan-500/20 mt-0.5 relative">
                  <div className="absolute inset-x-[20%] top-[30%] h-[2px] bg-cyan-200/40" />
                </div>
                <div className="absolute top-[35%] left-0 w-[18%] h-[25%] rounded-full bg-cyan-400/20 -rotate-12 origin-top" />
                <div className="absolute top-[35%] right-0 w-[18%] h-[25%] rounded-full bg-cyan-400/20 rotate-12 origin-top" />
              </div>
              <div className="absolute -left-2 top-1/4 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 animate-pulse" />
              <div className="absolute -right-1 top-1/3 w-1 h-6 bg-gradient-to-b from-cyan-300 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </div>
        )}

        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-cyan-500/20 to-transparent" />
      </div>

      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f0ff]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 80px' }}
      />
    </motion.div>
  )
}

export function AgentOrb({ agent, size = 'sm', className }) {
  const sizes = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
  }

  return (
    <div className={cn('relative flex-shrink-0', className)}>
      <div
        className={cn(
          'rounded-full agent-orb border border-white/25',
          sizes[size]
        )}
        style={{
          boxShadow: `inset 0 0 10px rgba(255,255,255,0.15), 0 0 16px ${agent.glow || 'rgba(0,200,255,0.3)'}` ,
        }}
      >
        <div className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full bg-white/40 blur-[0.5px]" />
      </div>
      {agent.status === 'ACTIVE' && (
        <span className="absolute -bottom-0.5 -right-0.5 status-dot status-active" />
      )}
      {agent.status === 'IDLE' && (
        <span className="absolute -bottom-0.5 -right-0.5 status-dot status-idle" />
      )}
    </div>
  )
}
