import { ThreatGauges } from '@/components/ThreatGauges'
import { ActivityChart } from '@/components/ActivityChart'
import { ShieldCheck } from 'lucide-react'

export default function CompliancePage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">COMPLIANCE</h1>
          <p className="text-xs text-slate-400 font-mono">EMARATAX · Audit · Risk matrices</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
        <div className="h-72"><ThreatGauges /></div>
        <div className="h-72"><ActivityChart /></div>
      </div>
    </div>
  )
}
