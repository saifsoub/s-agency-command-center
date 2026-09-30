/**
 * Open-source telephony for S/Agency
 * LiveKit (Apache-2.0) · FreeSWITCH · Asterisk · Janus · Jitsi · Mediasoup
 */
const listeners = new Map()
let participantTimer = null
let sessionGeneration = 0
function cancelParticipantTimer() {
  clearTimeout(participantTimer)
  participantTimer = null
}
function emit(event, payload) {
  const set = listeners.get(event)
  if (set) set.forEach((fn) => fn(payload))
}
export const telephony = {
  state: { connected: false, room: null, mode: 'stub', participants: [], callId: null },
  on(event, fn) {
    if (!listeners.has(event)) listeners.set(event, new Set())
    listeners.get(event).add(fn)
    return () => listeners.get(event).delete(fn)
  },
  async connect({ room = 'lumen-command', mode = 'stub' } = {}) {
    if (mode !== 'stub') throw new Error('Live telephony transport is not configured')
    cancelParticipantTimer()
    const generation = ++sessionGeneration
    this.state.participants = []
    this.state.mode = mode
    this.state.room = room
    this.state.connected = true
    this.state.callId = `call_${Date.now()}`
    emit('connected', { room, mode, callId: this.state.callId })
    participantTimer = setTimeout(() => {
      participantTimer = null
      if (generation !== sessionGeneration || !this.state.connected) return
      this.state.participants = [
        { id: 'op', name: 'Operator', role: 'human' },
        { id: 'lumen', name: 'LUMEN', role: 'agent' },
        ...this.state.participants.filter((p) => p.id !== 'op' && p.id !== 'lumen'),
      ]
      emit('participants', this.state.participants)
    }, 400)
    return this.state
  },
  async disconnect() {
    ++sessionGeneration
    cancelParticipantTimer()
    this.state.room = null
    this.state.connected = false
    this.state.participants = []
    this.state.callId = null
    emit('disconnected', {})
  },
  async inviteAgent(agentId) {
    if (!this.state.connected) throw new Error('Not connected')
    const p = { id: agentId, name: agentId, role: 'agent' }
    this.state.participants = [...this.state.participants, p]
    emit('participants', this.state.participants)
    emit('agent-joined', p)
    return p
  },
  async dial(number) {
    if (!this.state.connected) throw new Error('Not connected')
    const generation = sessionGeneration
    const callId = this.state.callId
    emit('dialing', { number })
    await new Promise((r) => setTimeout(r, 800))
    if (generation !== sessionGeneration || !this.state.connected) {
      return { ok: false, reason: 'session-ended', number }
    }
    emit('answered', { number, callId })
    return { ok: true, number }
  },
  async connectLiveKit() {
    return { ok: false, reason: 'transport-not-configured' }
  },
}
export default telephony
