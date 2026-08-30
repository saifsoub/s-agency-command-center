import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { base44 } from '@/api/base44Client'
import { OrbCard, OrbsLibraryShowcase } from '@/design-system/orbs'
import { toast } from 'sonner'
import { ShoppingBag } from 'lucide-react'

export default function OrbMarketplace() {
  const { data: orbs = [] } = useQuery({ queryKey: ['orbs'], queryFn: () => base44.orbs.list() })
  const [selected, setSelected] = useState(null)
  const checkout = async () => {
    if (!selected) return
    const session = await base44.billing.createCheckoutSession({ priceId: selected.id, successUrl: window.location.origin + '/app/marketplace?success=1' })
    toast.success(`Stripe session ready for ${selected.name}`, { description: session.id })
  }
  return (
    <div className="h-full overflow-y-auto p-6 space-y-8">
      <div className="flex items-center gap-3">
        <ShoppingBag className="w-5 h-5 text-cyan-400" />
        <div>
          <h1 className="text-xl font-semibold text-cyan-50">ORB MARKETPLACE</h1>
          <p className="text-xs text-slate-400 font-mono">Design-system orbs · Stripe-ready</p>
        </div>
      </div>
      <OrbsLibraryShowcase />
      <div>
        <h2 className="text-sm font-semibold tracking-widest text-cyan-300 mb-4">CATALOG</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {orbs.map((o) => (
            <OrbCard key={o.id} orb={o} selected={selected?.id === o.id} onSelect={setSelected} />
          ))}
        </div>
        {selected && (
          <div className="mt-6 flex items-center gap-4">
            <button onClick={checkout} className="px-5 py-2.5 rounded-xl bg-cyan-500 text-navy-900 font-semibold text-sm hover:bg-cyan-400">
              Checkout {selected.name} with Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
