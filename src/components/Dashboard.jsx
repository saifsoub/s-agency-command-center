import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { WorldMap } from './WorldMap'
import { AgentRoster } from './AgentRoster'
import { ThreatGauges } from './ThreatGauges'
import { LiveFeeds } from './LiveFeeds'
import { AgentChat } from './AgentChat'
import { ActivityChart } from './ActivityChart'
import { useState } from 'react'

export function Dashboard() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-navy-900">
      <Sidebar active={activeNav} onNavigate={setActiveNav} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-4 overflow-hidden flex flex-col gap-4">
          <div className="flex-1 min-h-0 grid grid-cols-12 gap-4">
            <div className="col-span-8 min-h-0">
              <WorldMap />
            </div>
            <div className="col-span-4 min-h-0">
              <AgentRoster />
            </div>
          </div>

          <div className="h-[280px] grid grid-cols-12 gap-4 flex-shrink-0">
            <div className="col-span-3">
              <ThreatGauges />
            </div>
            <div className="col-span-3">
              <ActivityChart />
            </div>
            <div className="col-span-3">
              <LiveFeeds />
            </div>
            <div className="col-span-3">
              <AgentChat />
            </div>
          </div>
        </main>

        <footer className="h-8 flex items-center justify-between px-4 border-t border-cyan-500/10 bg-navy-900/90 text-[10px] font-mono text-slate-500 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span>S/AGENCY · LUMEN v2.4.1</span>
            <span className="text-cyan-500/60">UAE FEDERAL TAX AUTHORITY LINK · SECURE</span>
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
