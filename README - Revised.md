# Agency Command Center — plain-language README

## What this is
A dark-themed web app for managing a team of AI helpers. It has a public landing page and a dashboard where each helper is shown as a glass-like bubble ("orb").

## Who it's for
An agency owner who runs several AI helpers and wants one place to watch and steer them.

## What it does today
| Page | Address | What it's for |
|---|---|---|
| Landing | `/` | Marketing page |
| Dashboard | `/app` | Overview |
| Agents | `/app/agents` | List of AI helpers and their details |
| Alerts | `/app/alerts` | Warnings and notices |
| Compliance | `/app/compliance` | Risk checks, including UAE corporate tax (EmaraTax) |
| Orchestration | `/app/orchestration` | Multi-step jobs that pause for a human to approve |
| Connectors | `/app/mcps` | Links to outside tools |
| Plugins | `/app/plugins` | Add-ons |
| Marketplace | `/app/marketplace` | A shop for orbs, with Stripe payments |
| Voice | `/app/voice` | Text read aloud, plus a hook for phone/voice-call systems |

- The orb look is defined in `src/design-system/orbs`.
- Read-aloud uses the browser's built-in speech (`src/lib/voice.js`).
- Phone calls are only a connection point (`src/lib/telephony.js`) for systems such as LiveKit, FreeSWITCH or Asterisk. No phone provider is confirmed as connected.
- It is prepared for Base44, an app-building platform, to act as a main "super-agent" (see `docs/BASE44_SUPER_AGENT.md`).

Which pages show real data and which show sample data: not yet confirmed.

## How to run it
```bash
npm install
npm run dev
```

It is linked to a Vercel project called `s-agency-command-center` for hosting.

## Current status and known gaps
- Whether Stripe payments are live or in test mode: not yet confirmed.
- The phone and Base44 connections are prepared, but no working link is confirmed.

## Where things live
| Folder | What's in it |
|---|---|
| `src/` | App code |
| `src/design-system/orbs` | Orb visual styles |
| `src/lib/` | Voice and phone helpers |
| `base44/` | Base44 settings |
| `docs/` | Notes |

Built with React 18, Vite 6 and Tailwind.
