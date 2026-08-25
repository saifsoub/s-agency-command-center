import { motion } from 'framer-motion'
import { MAP_PINS } from '@/data/agents'
import { LumenOrb } from './LumenOrb'
import { cn } from '@/lib/utils'

export function WorldMap() {
  return (
    <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden glass-panel">
      <div className="absolute inset-0 bg-[#0a1220]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,180,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,180,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full map-glow"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="landGlow" cx="55%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#0066aa" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="landFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a3a5c" />
              <stop offset="100%" stopColor="#0d2238" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="50" rx="38" ry="28" fill="url(#landGlow)" />
          
          <path
            d="M 35 35 
               Q 42 28 55 30 
               Q 68 32 75 40 
               Q 82 48 78 58 
               Q 74 68 62 72 
               Q 50 75 40 68 
               Q 32 60 30 50 
               Q 28 40 35 35 Z"
            fill="url(#landFill)"
            stroke="rgba(0,200,255,0.35)"
            strokeWidth="0.4"
          />
          <path
            d="M 48 48 
               Q 54 45 60 48 
               Q 64 52 62 58 
               Q 58 62 52 60 
               Q 46 56 48 48 Z"
            fill="rgba(0,220,255,0.15)"
            stroke="rgba(0,240,255,0.5)"
            strokeWidth="0.5"
          />
        </svg>

        {MAP_PINS.map((pin) => (
          <motion.div
            key={pin.id}
            className="absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + Math.random() * 0.4, type: 'spring' }}
          >
            <div className="relative group cursor-pointer">
              <div className={cn(
                'w-3 h-3 rounded-full border-2',
                pin.active 
                  ? 'bg-rose-500 border-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.8)]' 
                  : 'bg-cyan-600 border-cyan-400 shadow-[0_0_8px_rgba(0,200,255,0.5)]'
              )} />
              {pin.active && (
                <div className="absolute inset-0 rounded-full bg-rose-500/40 animate-ping" />
              )}
              <div className="absolute left-1/2 -translate-x-1/2 -top-7 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-navy-800/90 text-cyan-200 border border-cyan-500/30">
                  {pin.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <LumenOrb size="lg" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <div className="text-[11px] font-semibold tracking-widest text-cyan-300 neon-text">
              LUMEN
            </div>
            <div className="text-[9px] font-mono text-cyan-500/80 tracking-wider">
              FEDERATED AI CORE · ONLINE
            </div>
          </div>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <line x1="55%" y1="50%" x2="52%" y2="48%" stroke="rgba(0,240,255,0.4)" strokeWidth="0.5" strokeDasharray="2 2">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="55%" y1="50%" x2="58%" y2="42%" stroke="rgba(0,240,255,0.4)" strokeWidth="0.5" strokeDasharray="2 2">
            <animate attributeName="stroke-opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="55%" y1="50%" x2="62%" y2="50%" stroke="rgba(0,240,255,0.3)" strokeWidth="0.5" strokeDasharray="2 2">
            <animate attributeName="stroke-opacity" values="0.2;0.7;0.2" dur="1.8s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      <div className="absolute top-3 left-3 text-[9px] font-mono text-cyan-500/60 tracking-wider">
        THEATER · GULF REGION
      </div>
      <div className="absolute top-3 right-3 text-[9px] font-mono text-cyan-500/60">
        6 NODES · LIVE
      </div>
      <div className="absolute bottom-3 left-3 text-[9px] font-mono text-cyan-500/50">
        COGNITIVE ASSURANCE ACTIVE
      </div>
    </div>
  )
}
