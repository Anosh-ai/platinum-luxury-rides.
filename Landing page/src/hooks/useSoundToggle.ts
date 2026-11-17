import { useCallback, useState } from 'react'
import { heroAudioController } from '../lib/media/audioController'

/** Explicit user-controlled sound gate — never enable by default. */
export function useSoundToggle(initial = false) {
  const [enabled, setEnabled] = useState(initial)

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      heroAudioController.setEnabled(next)
      return next
    })
  }, [])

  const setSoundEnabled = useCallback((value: boolean) => {
    heroAudioController.setEnabled(value)
    setEnabled(value)
  }, [])

  return { enabled, toggle, setSoundEnabled }
}
