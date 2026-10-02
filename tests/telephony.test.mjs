import test from 'node:test'
import assert from 'node:assert/strict'
import telephony from '../src/lib/telephony.js'

test('disconnect cancels pending participant delivery', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let deliveries = 0
  const off = telephony.on('participants', () => deliveries++)
  t.after(async () => { off(); await telephony.disconnect() })
  await telephony.connect()
  await telephony.disconnect()
  t.mock.timers.tick(400)
  assert.equal(deliveries, 0)
  assert.deepEqual(telephony.state.participants, [])
  assert.equal(telephony.state.room, null)
})

test('reconnect only delivers participants for the current session', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let deliveries = 0
  const off = telephony.on('participants', () => deliveries++)
  t.after(async () => { off(); await telephony.disconnect() })
  await telephony.connect({ room: 'first' })
  t.mock.timers.tick(200)
  await telephony.connect({ room: 'second' })
  t.mock.timers.tick(200)
  assert.equal(deliveries, 0)
  t.mock.timers.tick(200)
  assert.equal(deliveries, 1)
  assert.equal(telephony.state.room, 'second')
})

test('an interrupted dial never answers against a replacement session', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let answers = 0
  const off = telephony.on('answered', () => answers++)
  t.after(async () => { off(); await telephony.disconnect() })
  await telephony.connect()
  const pending = telephony.dial('123')
  await telephony.disconnect()
  await telephony.connect()
  t.mock.timers.tick(800)
  assert.deepEqual(await pending, { ok: false, reason: 'session-ended', number: '123' })
  assert.equal(answers, 0)
})

test('unsupported live transports never announce a connection', async (t) => {
  await telephony.disconnect()
  let connects = 0
  const off = telephony.on('connected', () => connects++)
  t.after(off)
  assert.deepEqual(await telephony.connectLiveKit(), { ok: false, reason: 'transport-not-configured' })
  await assert.rejects(telephony.connect({ mode: 'livekit' }), /not configured/)
  assert.equal(connects, 0)
  assert.equal(telephony.state.connected, false)
})

test('dial requires a room and completes within its original stub session', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  await telephony.disconnect()
  await assert.rejects(telephony.dial('123'), /Not connected/)
  await telephony.connect()
  const callId = telephony.state.callId
  const answers = []
  const off = telephony.on('answered', event => answers.push(event))
  t.after(async () => { off(); await telephony.disconnect() })
  const pending = telephony.dial('123')
  t.mock.timers.tick(800)
  assert.deepEqual(await pending, { ok: true, number: '123' })
  assert.deepEqual(answers, [{ number: '123', callId }])
})

test('pending initial participants preserve an early agent invitation', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  t.after(async () => telephony.disconnect())
  await telephony.connect()
  await telephony.inviteAgent('AETHER')
  t.mock.timers.tick(400)
  assert.deepEqual(telephony.state.participants.map(p => p.id), ['op', 'lumen', 'AETHER'])
})
