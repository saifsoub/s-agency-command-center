import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { t: '13:00', v: 42 },
  { t: '13:15', v: 58 },
  { t: '13:30', v: 51 },
  { t: '13:45', v: 67 },
  { t: '14:00', v: 72 },
  { t: '14:15', v: 81 },
  { t: '14:30', v: 76 },
]

export function ActivityChart() {
  return (
    <div className="glass-panel p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold tracking-widest text-cyan-300">
          LIVE TRANSACTION FLOW
        </h3>
        <span className="text-[10px] font-mono text-emerald-400">+18% 1h</span>
      </div>
      <div className="flex-1 min-h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00e5ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="t"
              tick={{ fill: '#64748b', fontSize: 9, fontFamily: 'monospace' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 9, fontFamily: 'monospace' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 21, 32, 0.95)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: 8,
                fontSize: 11,
                fontFamily: 'monospace',
              }}
              labelStyle={{ color: '#94a3b8' }}
              itemStyle={{ color: '#00e5ff' }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#00e5ff"
              strokeWidth={1.5}
              fill="url(#flowGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
