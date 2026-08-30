import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LumenCoreOrb, Orb, OrbsLibraryShowcase } from '@/design-system/orbs'
import { ArrowRight, Shield, Bot, Globe2, Zap } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy-900 text-cyan-50 overflow-x-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,160,0.18),transparent_60%)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center max-w-4xl">
          <div className="flex justify-center mb-8"><LumenCoreOrb size="2xl" /></div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-cyan-50 mb-4">
            S/AGENCY
            <span className="block text-cyan-400 text-2xl md:text-3xl mt-2 font-mono tracking-widest">COMMAND CENTER · LUMEN</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Federated AI operations platform. Glass orbs, multi-agent swarms, compliance theater, and open telephony.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/app" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-navy-900 font-semibold hover:bg-cyan-400 transition shadow-glow-cyan">
              Enter Command Center <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/marketplace" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10 transition">
              Orb Marketplace
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {[
          { icon: Bot, title: 'Super-Agent', desc: 'LUMEN federated core with Base44 entities & swarm routing' },
          { icon: Shield, title: 'Compliance', desc: 'Tax, audit, risk matrices live for regulated theaters' },
          { icon: Globe2, title: 'Orchestration', desc: 'MCPs, plugins, multi-agent workflows, human gates' },
          { icon: Zap, title: 'Voice & Tel', desc: 'TTS/TTSL + open-source telephony (LiveKit / FreeSWITCH)' },
        ].map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-panel p-5">
            <f.icon className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="font-semibold text-cyan-100 mb-1">{f.title}</h3>
            <p className="text-sm text-slate-400">{f.desc}</p>
          </motion.div>
        ))}
      </section>
      <section className="px-6 py-16 max-w-5xl mx-auto"><OrbsLibraryShowcase /></section>
      <section className="px-6 py-20 text-center border-t border-cyan-500/10">
        <div className="flex justify-center gap-3 mb-6">
          {['lumen', 'cyan', 'violet', 'emerald', 'amber', 'rose'].map((p) => (
            <Orb key={p} preset={p} size="sm" float />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-3">Ready for production intelligence</h2>
        <p className="text-slate-400 mb-6">Auth · Stripe · Base44 super-agent · open telephony</p>
        <Link to="/app" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-navy-900 font-semibold hover:bg-cyan-400 transition">Launch Dashboard</Link>
      </section>
      <footer className="py-8 text-center text-[11px] font-mono text-slate-500 border-t border-white/5">
        © S/Agency · LUMEN Intelligence & Operations
      </footer>
    </div>
  )
}
