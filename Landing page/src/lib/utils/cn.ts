/** Lightweight className joiner — no external dependency in Phase 1. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
