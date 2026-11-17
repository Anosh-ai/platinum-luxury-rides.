/**
 * Gesture-gated audio for optional hero ignition / rev sounds.
 * Never call play() without an explicit user interaction.
 */

export type HeroAudioId = 'ignition' | 'rev'

export class AudioController {
  private enabled = false
  private elements = new Map<HeroAudioId, HTMLAudioElement>()

  setEnabled(enabled: boolean): void {
    this.enabled = enabled
    if (!enabled) {
      this.stopAll()
    }
  }

  isEnabled(): boolean {
    return this.enabled
  }

  register(id: HeroAudioId, element: HTMLAudioElement): void {
    this.elements.set(id, element)
  }

  async play(id: HeroAudioId): Promise<void> {
    if (!this.enabled) return
    const el = this.elements.get(id)
    if (!el) return
    try {
      await el.play()
    } catch {
      // Autoplay policies or missing gesture — fail silently.
    }
  }

  stopAll(): void {
    this.elements.forEach((el) => {
      el.pause()
      el.currentTime = 0
    })
  }
}

export const heroAudioController = new AudioController()
