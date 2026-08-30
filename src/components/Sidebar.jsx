import { 
  LayoutDashboard, ShieldCheck, Bot, Bell, 
  Settings, HelpCircle, ChevronRight,
  GitBranch, Cable, Puzzle, ShoppingBag, Mic
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/data/agents'

const iconMap = {
  LayoutDashboard,
  ShieldCheck,
  Bot,
  Bell,
  GitBranch,
  Cable,
  Puzzle,
  ShoppingBag,
  Mic,
}

export function Sidebar({ active = 'dashboard', onNavigate }) {
  return (
    <aside className="w-56 flex-shrink-0 flex flex-col glass-panel border-r border-cyan-500/10 h-full">
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow-cyan">
            <span className="text-navy-900 font-bold text-sm">S/</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-cyan-50">S/AGENCY</div>
            <div className="text-[10px] text-cyan-400/70 font-mono tracking-wider">COMMAND</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group',
                isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                  : 'text-slate-400 hover:text-cyan-200 hover:bg-white/5 border border-transparent'
              )}
            >
              <Icon className={cn('w-4 h-4', isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400')} />
              <span className="text-xs font-medium tracking-wide flex-1">{item.label}</span>
              {isActive && <ChevronRight className="w-3.5 h-3.5 text-cyan-400/70" />}
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t border-white/5 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-cyan-200 hover:bg-white/5 text-xs">
          <Settings className="w-4 h-4" />
          SETTINGS
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-cyan-200 hover:bg-white/5 text-xs">
          <HelpCircle className="w-4 h-4" />
          SUPPORT
        </button>
        <div className="pt-2 mt-2 border-t border-white/5">
          <div className="px-3 py-2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-[10px] font-bold text-white">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-cyan-100 truncate">S. Alsoub</div>
              <div className="text-[10px] text-cyan-500/70 font-mono">CLEARANCE · L5</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
