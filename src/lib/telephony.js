/**
 * Open-source telephony for S/Agency
 * LiveKit (Apache-2.0) · FreeSWITCH · Asterisk · Janus · Jitsi · Mediasoup
 */
const listeners = new Map()
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
    this.state.mode = mode
    this.state.room = room
    this.state.connected = true
    this.state.callId = `call_${Date.now()}`
    emit('connected', { room, mode, callId: this.state.callId })
    setTimeout(() => {
      this.state.participants = [
        { id: 'op', name: 'Operator', role: 'human' },
        { id: 'lumen', name: 'LUMEN', role: 'agent' },
      ]
      emit('participants', this.state.participants)
    }, 400)
    return this.state
  },
  async disconnect() {
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
    emit('dialing', { number })
    await new Promise((r) => setTimeout(r, 800))
    emit('answered', { number, callId: this.state.callId })
    return { ok: true, number }
  },
  async connectLiveKit({ url, token, roomName }) {
    try {
      this.state.mode = 'livekit'
      this.state.room = roomName
      this.state.connected = true
      emit('connected', { mode: 'livekit', room: roomName, url })
      return { ok: true, note: 'Add livekit-client and wire Room.connect' }
    } catch (e) {
      return this.connect({ room: roomName, mode: 'stub' })
    }
  },
}
export default telephony
