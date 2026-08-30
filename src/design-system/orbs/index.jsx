/**
 * S/Agency Orbs Design System - Soft Sunday Morning + LUMEN glass families
 */
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const ORB_PRESETS = {
  'golden-hour': { label: 'Golden Hour', gradient: 'radial-gradient(circle at 35% 30%, #fff8e7 0%, #f5d78e 25%, #e8b84a 55%, #c48a1a 100%)', glow: 'rgba(232, 184, 74, 0.45)' },
  'cream-mist': { label: 'Cream Mist', gradient: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #f7f0e0 30%, #ebe0c8 70%, #d4c4a0 100%)', glow: 'rgba(240, 220, 180, 0.4)' },
  'soft-amber': { label: 'Soft Amber', gradient: 'radial-gradient(circle at 35% 30%, #fff4d6 0%, #f0c96a 35%, #e0a030 70%, #b87a10 100%)', glow: 'rgba(224, 160, 48, 0.5)' },
  'dawn-glow': { label: 'Dawn Glow', gradient: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #fff0c8 40%, #ffe8a0 100%)', glow: 'rgba(255, 240, 180, 0.55)' },
  'warm-haze': { label: 'Warm Haze', gradient: 'radial-gradient(circle at 35% 30%, #fff0d8 0%, #e8c070 40%, #c89840 80%, #a07020 100%)', glow: 'rgba(200, 150, 60, 0.45)' },
  'sunday-light': { label: 'Sunday Light', gradient: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #fff6e0 35%, #f5e0b0 100%)', glow: 'rgba(255, 245, 200, 0.5)' },
  lumen: { label: 'LUMEN', gradient: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, rgba(0,200,255,0.3) 25%, rgba(0,100,200,0.2) 55%, rgba(0,30,70,0.5) 100%)', glow: 'rgba(0, 220, 255, 0.55)' },
  cyan: { label: 'Cyan Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(0,230,255,0.35) 40%, rgba(0,120,180,0.3) 100%)', glow: 'rgba(0, 230, 255, 0.5)' },
  violet: { label: 'Violet Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(180,140,255,0.4) 40%, rgba(100,60,180,0.35) 100%)', glow: 'rgba(167, 139, 250, 0.5)' },
  emerald: { label: 'Emerald Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(80,230,180,0.4) 40%, rgba(20,140,100,0.35) 100%)', glow: 'rgba(52, 211, 153, 0.5)' },
  amber: { label: 'Amber Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(251,191,36,0.4) 40%, rgba(180,100,20,0.35) 100%)', glow: 'rgba(251, 191, 36, 0.5)' },
  rose: { label: 'Rose Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(251,113,133,0.4) 40%, rgba(180,40,80,0.35) 100%)', glow: 'rgba(244, 114, 182, 0.5)' },
  sky: { label: 'Sky Agent', gradient: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.5) 0%, rgba(56,189,248,0.4) 40%, rgba(30,100,180,0.35) 100%)', glow: 'rgba(56, 189, 248, 0.5)' },
}

const SIZE_MAP = { xs: 'w-6 h-6', sm: 'w-9 h-9', md: 'w-14 h-14', lg: 'w-24 h-24', xl: 'w-40 h-40', '2xl': 'w-52 h-52' }

export function Orb({ preset = 'lumen', size = 'md', status, float = false, className, style, children }) {
  const p = ORB_PRESETS[preset] || ORB_PRESETS.lumen
  return (
    <motion.div className={cn('relative flex-shrink-0', SIZE_MAP[size], className)} animate={float ? { y: [0, -6, 0] } : undefined} transition={float ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } : undefined} style={style}>
      <div className="absolute inset-0 rounded-full border border-white/25 overflow-hidden" style={{ background: p.gradient, boxShadow: `inset 0 0 14px rgba(255,255,255,0.25), 0 0 24px ${p.glow}` }}>
        <div className="absolute top-[12%] left-[18%] w-[38%] h-[22%] rounded-full bg-white/40 blur-[0.5px]" />
        {children}
      </div>
      {status === 'ACTIVE' && <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] border border-navy-900" />}
      {status === 'IDLE' && <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)] border border-navy-900" />}
    </motion.div>
  )
}

export function LumenCoreOrb({ size = 'lg', className }) {
  return (
    <Orb preset="lumen" size={size} float className={className}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="relative w-[55%] h-[70%]" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }}>
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="w-[38%] h-[22%] rounded-full bg-gradient-to-b from-cyan-200/80 to-cyan-400/40 shadow-[0_0_16px_rgba(0,240,255,0.6)]" />
            <div className="w-[12%] h-[8%] bg-cyan-300/50 -mt-0.5" />
            <div className="w-[55%] h-[35%] rounded-t-full bg-gradient-to-b from-cyan-300/50 to-cyan-500/20 mt-0.5" />
          </div>
        </motion.div>
      </div>
    </Orb>
  )
}

export function OrbCard({ orb, onSelect, selected }) {
  const preset = orb.color === 'gold' || orb.tier === 'ui' ? 'sunday-light' : orb.color || 'cyan'
  return (
    <button onClick={() => onSelect?.(orb)} className={cn('glass-panel p-4 text-left transition-all hover:border-cyan-400/40', selected && 'border-cyan-400/50 ring-1 ring-cyan-400/30')}>
      <div className="flex items-center gap-3">
        <Orb preset={preset} size="md" status={orb.status} />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-cyan-50 truncate">{orb.name}</div>
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{orb.tier} · {orb.id}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-mono text-cyan-300">{orb.price === 0 ? 'CORE' : `$${orb.price}`}</div>
          <div className="text-[9px] text-slate-500">/mo</div>
        </div>
      </div>
    </button>
  )
}

export function OrbsLibraryShowcase() {
  const soft = ['golden-hour', 'cream-mist', 'soft-amber', 'dawn-glow', 'warm-haze', 'sunday-light']
  return (
    <div className="glass-panel p-6">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold tracking-wide text-amber-200/90">RECOMMENDED ORBS</h2>
        <p className="text-[11px] text-slate-400 mt-1 font-mono">Soft Sunday Morning Collection · 6 production-ready components</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {soft.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <Orb preset={key} size="lg" float />
            <span className="text-[11px] text-amber-200/70 font-medium">{ORB_PRESETS[key].label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orb
