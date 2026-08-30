# S/AGENCY COMMAND CENTER · LUMEN v2

Production dark-mode multi-agent SaaS: glass orbs, Base44 super-agent, Stripe marketplace, TTS/TTSL, open telephony.

**Repo:** https://github.com/saifsoub/s-agency-command-center  
**Vercel project:** `s-agency-command-center` (link GitHub App for auto-deploy)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Marketing landing |
| `/app` | Command dashboard |
| `/app/agents` | Agent roster + detail |
| `/app/alerts` | Alerts board |
| `/app/compliance` | Risk / EMARATAX |
| `/app/orchestration` | HITL pipelines |
| `/app/mcps` | MCP connectors |
| `/app/plugins` | Plugins |
| `/app/marketplace` | Orb marketplace (Stripe) |
| `/app/voice` | TTS · TTSL · LiveKit/FreeSWITCH |

## Design system

`src/design-system/orbs` — Soft Sunday Morning + LUMEN glass families (matches orbs_library.png).

## Stack

React 18 · Vite 6 · Tailwind · Framer Motion · Recharts · TanStack Query · Stripe · Base44-ready

## Voice & telephony

- `src/lib/voice.js` — SpeechSynthesis TTS + TTSL narrator
- `src/lib/telephony.js` — open event bus → LiveKit / FreeSWITCH / Asterisk / Jitsi / Janus

## Base44 super-agent

See `docs/BASE44_SUPER_AGENT.md` and `base44/config.jsonc`.

```bash
npm install && npm run dev
```

© S/Agency · LUMEN Intelligence & Operations
