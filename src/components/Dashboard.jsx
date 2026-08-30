import { WorldMap } from './WorldMap'
import { AgentRoster } from './AgentRoster'
import { ThreatGauges } from './ThreatGauges'
import { LiveFeeds } from './LiveFeeds'
import { AgentChat } from './AgentChat'
import { ActivityChart } from './ActivityChart'

export function Dashboard() {
  return (
    <div className="h-full p-4 overflow-hidden flex flex-col gap-4">
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
    </div>
  )
}
