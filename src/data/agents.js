export const AGENTS = [
  {
    id: 'LX-01',
    codename: 'AETHER',
    location: 'DXB-HQ',
    status: 'ACTIVE',
    hr: 72,
    bpm: 68,
    load: 87,
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(0, 240, 255, 0.5)',
  },
  {
    id: 'LX-07',
    codename: 'VEIL',
    location: 'AUH-NODE',
    status: 'ACTIVE',
    hr: 81,
    bpm: 74,
    load: 62,
    color: 'from-violet-400 to-purple-500',
    glow: 'rgba(167, 139, 250, 0.5)',
  },
  {
    id: 'LX-12',
    codename: 'NEXUS',
    location: 'SHJ-EDGE',
    status: 'ACTIVE',
    hr: 65,
    bpm: 59,
    load: 94,
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.5)',
  },
  {
    id: 'LX-03',
    codename: 'PHANTOM',
    location: 'RAK-OUT',
    status: 'IDLE',
    hr: 58,
    bpm: 52,
    load: 23,
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.5)',
  },
  {
    id: 'LX-19',
    codename: 'CIPHER',
    location: 'FUJ-SECURE',
    status: 'ACTIVE',
    hr: 76,
    bpm: 71,
    load: 78,
    color: 'from-rose-400 to-pink-500',
    glow: 'rgba(244, 114, 182, 0.5)',
  },
  {
    id: 'LX-22',
    codename: 'ORACLE',
    location: 'DXB-CORE',
    status: 'ACTIVE',
    hr: 69,
    bpm: 64,
    load: 91,
    color: 'from-sky-400 to-indigo-500',
    glow: 'rgba(56, 189, 248, 0.5)',
  },
]

export const THREATS = [
  { id: 1, label: 'Tax Evasion Risk', level: 'HIGH', value: 78, color: 'rose' },
  { id: 2, label: 'Audit Priority', level: 'ELEVATED', value: 64, color: 'amber' },
  { id: 3, label: 'Compliance Drift', level: 'MODERATE', value: 41, color: 'cyan' },
  { id: 4, label: 'Anomaly Score', level: 'LOW', value: 22, color: 'emerald' },
]

export const FEEDS = [
  { id: 1, time: '14:26:41', source: 'EMARATAX', msg: 'New high-value transfer flagged · AED 4.2M · Entity RC-2041', type: 'alert' },
  { id: 2, time: '14:25:12', source: 'LUMEN', msg: 'Agent AETHER completed multi-hop recon on Gulf corridor', type: 'info' },
  { id: 3, time: '14:24:03', source: 'NEXUS', msg: 'Real-time graph delta +12% on free-zone entities', type: 'data' },
  { id: 4, time: '14:22:55', source: 'SYSTEM', msg: 'Federated core heartbeat · latency 18ms · integrity 99.97%', type: 'system' },
  { id: 5, time: '14:21:18', source: 'CIPHER', msg: 'Encrypted packet batch decrypted · 847 records', type: 'info' },
  { id: 6, time: '14:19:44', source: 'VEIL', msg: 'Cross-border pattern match · confidence 0.91', type: 'alert' },
]

export const CHAT_LOG = [
  { id: 1, agent: 'LUMEN', text: 'All federated nodes synchronized. Cognitive assurance online.', ts: '14:27:01' },
  { id: 2, agent: 'AETHER', text: 'Requesting elevated clearance for RC-1987 deep audit.', ts: '14:26:48' },
  { id: 3, agent: 'ORACLE', text: 'Probability matrix updated. Recommend prioritizing SHJ free-zone cluster.', ts: '14:26:22' },
  { id: 4, agent: 'LUMEN', text: 'Clearance granted. AETHER — proceed with multi-agent swarm.', ts: '14:26:05' },
  { id: 5, agent: 'NEXUS', text: 'Swarm topology locked. 4 agents allocated.', ts: '14:25:51' },
]

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'DASHBOARD', icon: 'LayoutDashboard' },
  { id: 'recon', label: 'RECONSIDERATIONS', icon: 'Search' },
  { id: 'emaratax', label: 'EMARATAX', icon: 'Receipt' },
  { id: 'compliance', label: 'COMPLIANCE', icon: 'ShieldCheck' },
  { id: 'agents', label: 'AGENTS', icon: 'Bot' },
  { id: 'alerts', label: 'ALERTS', icon: 'Bell' },
]

export const MAP_PINS = [
  { id: 'RC-1987', x: 52, y: 48, label: 'RC-1987', active: true },
  { id: 'RC-2041', x: 58, y: 42, label: 'RC-2041', active: true },
  { id: 'RC-1766', x: 48, y: 55, label: 'RC-1766', active: false },
  { id: 'RC-1982', x: 55, y: 58, label: 'RC-1982', active: true },
  { id: 'RC-2019', x: 62, y: 50, label: 'RC-2019', active: true },
  { id: 'RC-2219', x: 45, y: 40, label: 'RC-2219', active: false },
]
