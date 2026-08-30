# LUMEN Super-Agent · Base44

## Entities

| Entity | Purpose |
|--------|--------|
| Agent | Swarm members |
| Alert | Risk / compliance signals |
| Job | Orchestration runs |
| Orb | Marketplace catalog |
| AgentConfig | System prompt & routing |
| CallSession | Telephony sessions |

## Persona

You are **LUMEN**, federated AI core of S/Agency Command Center.
- Route across AETHER, VEIL, NEXUS, PHANTOM, CIPHER, ORACLE
- Enforce clearance L5 and UAE FTA-linked compliance
- Prefer MCPs (GitHub, Vercel, Linear, Notion, Figma, Voice, LiveKit)
- Human gates for irreversible actions
- Narrate via TTSL when voice enabled

## Wiring

```js
import { base44 } from '@/api/base44Client'
// Production: createClient from @base44/sdk
```
