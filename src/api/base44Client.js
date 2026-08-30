/**
 * Base44 SDK client (S/Agency LUMEN Super-Agent)
 * Production: swap for createClient from @base44/sdk
 */
const isBrowser = typeof window !== 'undefined'
const store = {
  agents: null,
  alerts: null,
  jobs: null,
  orbs: null,
  user: {
    id: 'usr_sa_l5',
    name: 'S. Alsoub',
    email: 'seif@s-agency.ai',
    clearance: 'L5',
    role: 'commander',
    orgId: 'org_sagency',
  },
}
function delay(ms = 280) {
  return new Promise((r) => setTimeout(r, ms))
}
export const base44 = {
  auth: {
    async me() { await delay(); return store.user },
    async login() { await delay(400); return { ok: true, user: store.user } },
    async logout() { return { ok: true } },
  },
  agents: {
    async list() {
      await delay()
      if (!store.agents) {
        const { AGENTS } = await import('@/data/agents')
        store.agents = AGENTS.map((a) => ({
          ...a,
          entityType: 'Agent',
          lastHeartbeat: new Date().toISOString(),
          capabilities: ['recon', 'compliance', 'swarm'],
        }))
      }
      return store.agents
    },
    async get(id) {
      const list = await this.list()
      return list.find((a) => a.id === id) || null
    },
    async update(id, patch) {
      await delay()
      store.agents = (store.agents || []).map((a) => (a.id === id ? { ...a, ...patch } : a))
      return store.agents.find((a) => a.id === id)
    },
  },
  alerts: {
    async list() {
      await delay()
      if (!store.alerts) {
        store.alerts = [
          { id: 'alrt_01', severity: 'HIGH', title: 'Tax evasion pattern · RC-2041', source: 'EMARATAX', status: 'OPEN', createdAt: new Date(Date.now() - 3600000).toISOString() },
          { id: 'alrt_02', severity: 'ELEVATED', title: 'Compliance drift · free-zone cluster', source: 'LUMEN', status: 'ACK', createdAt: new Date(Date.now() - 7200000).toISOString() },
          { id: 'alrt_03', severity: 'MODERATE', title: 'Anomaly score spike · SHJ-EDGE', source: 'NEXUS', status: 'OPEN', createdAt: new Date(Date.now() - 900000).toISOString() },
        ]
      }
      return store.alerts
    },
  },
  jobs: {
    async list() { await delay(); return store.jobs || [] },
    async create(payload) {
      await delay(500)
      const job = { id: `job_${Date.now()}`, status: 'queued', progress: 0, ...payload, createdAt: new Date().toISOString() }
      store.jobs = [job, ...(store.jobs || [])]
      return job
    },
  },
  orbs: {
    async list() {
      await delay()
      if (!store.orbs) {
        store.orbs = [
          { id: 'orb_lumen', name: 'LUMEN Core', tier: 'flagship', color: 'cyan', price: 0 },
          { id: 'orb_aether', name: 'Aether', tier: 'agent', color: 'cyan', price: 49 },
          { id: 'orb_veil', name: 'Veil', tier: 'agent', color: 'violet', price: 49 },
          { id: 'orb_nexus', name: 'Nexus', tier: 'agent', color: 'emerald', price: 49 },
          { id: 'orb_phantom', name: 'Phantom', tier: 'agent', color: 'amber', price: 29 },
          { id: 'orb_cipher', name: 'Cipher', tier: 'agent', color: 'rose', price: 49 },
          { id: 'orb_oracle', name: 'Oracle', tier: 'agent', color: 'sky', price: 79 },
          { id: 'orb_sunday', name: 'Sunday Light', tier: 'ui', color: 'gold', price: 19 },
        ]
      }
      return store.orbs
    },
  },
  billing: {
    async createCheckoutSession({ priceId, successUrl, cancelUrl }) {
      await delay(400)
      return {
        id: 'cs_test_placeholder',
        url: successUrl || (isBrowser ? window.location.origin + '/billing/success' : '/'),
        priceId,
        cancelUrl,
      }
    },
  },
  superAgent: {
    async invoke({ message, context = {} }) {
      await delay(600)
      return {
        id: `msg_${Date.now()}`,
        role: 'assistant',
        agent: 'LUMEN Super-Agent',
        content: `Acknowledged. Context: ${context.route || 'command'}. Routing "${message.slice(0, 80)}…" across federated agents. Cognitive assurance online.`,
        toolsUsed: ['agents.list', 'alerts.list'],
        ts: new Date().toISOString(),
      }
    },
  },
}
export default base44
