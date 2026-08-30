/**
 * TTS + TTSL (Text-to-Speech + Text-to-Speech-Live)
 */
let voicesCache = []
export function listVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return []
  voicesCache = window.speechSynthesis.getVoices()
  return voicesCache
}
export function speak(text, options = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('[voice] SpeechSynthesis not available')
    return Promise.resolve({ ok: false, reason: 'unsupported' })
  }
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text)
    u.rate = options.rate ?? 1
    u.pitch = options.pitch ?? 1
    u.volume = options.volume ?? 1
    u.lang = options.lang ?? 'en-US'
    if (options.voiceName) {
      const v = listVoices().find((x) => x.name.includes(options.voiceName))
      if (v) u.voice = v
    }
    u.onend = () => resolve({ ok: true })
    u.onerror = (e) => resolve({ ok: false, reason: e.error })
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
  })
}
export function stopSpeaking() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
}
export class TTSLive {
  constructor(opts = {}) {
    this.queue = []
    this.speaking = false
    this.enabled = opts.enabled ?? true
    this.voiceName = opts.voiceName || 'Google'
  }
  enqueue(text) {
    if (!this.enabled || !text) return
    this.queue.push(text)
    this._pump()
  }
  async _pump() {
    if (this.speaking || this.queue.length === 0) return
    this.speaking = true
    const next = this.queue.shift()
    await speak(next, { voiceName: this.voiceName, rate: 1.05 })
    this.speaking = false
    this._pump()
  }
  clear() {
    this.queue = []
    stopSpeaking()
    this.speaking = false
  }
  setEnabled(v) {
    this.enabled = v
    if (!v) this.clear()
  }
}
export const commandNarrator = new TTSLive({ voiceName: 'Google' })
export function useCommandVoice() {
  return { speak, stop: stopSpeaking, narrator: commandNarrator, listVoices }
}
