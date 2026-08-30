import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname
  let active = 'dashboard'
  if (path.includes('/agents')) active = 'agents'
  else if (path.includes('/alerts')) active = 'alerts'
  else if (path.includes('/compliance')) active = 'compliance'
  else if (path.includes('/orchestration')) active = 'orchestration'
  else if (path.includes('/mcps')) active = 'mcps'
  else if (path.includes('/plugins')) active = 'plugins'
  else if (path.includes('/marketplace')) active = 'marketplace'
  else if (path.includes('/voice')) active = 'voice'

  const onNavigate = (id) => {
    const map = {
      dashboard: '/app',
      agents: '/app/agents',
      alerts: '/app/alerts',
      compliance: '/app/compliance',
      orchestration: '/app/orchestration',
      mcps: '/app/mcps',
      plugins: '/app/plugins',
      marketplace: '/app/marketplace',
      voice: '/app/voice',
      recon: '/app',
      emaratax: '/app/compliance',
    }
    navigate(map[id] || '/app')
  }

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-navy-900">
      <Sidebar active={active} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </main>
        <footer className="h-8 flex items-center justify-between px-4 border-t border-cyan-500/10 bg-navy-900/90 text-[10px] font-mono text-slate-500 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span>S/AGENCY · LUMEN v2.0</span>
            <span className="text-cyan-500/60">BASE44 SUPER-AGENT · STRIPE · OPEN TEL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>CLEARANCE: L5 · EYES ONLY</span>
            <span className="text-rose-400/70">UNAUTHORIZED ACCESS PROHIBITED</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
