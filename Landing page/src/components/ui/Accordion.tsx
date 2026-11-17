import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useId, useState } from 'react'
import { cn } from '../../lib/utils/cn'
import type { FaqItem } from '../../types/content'

type AccordionProps = {
  items: FaqItem[]
  className?: string
  tone?: 'light' | 'dark'
}

export function Accordion({ items, className, tone = 'light' }: AccordionProps) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const reduceMotion = useReducedMotion()
  const dark = tone === 'dark'

  return (
    <div
      className={cn(
        'divide-y border-y',
        dark ? 'divide-white/10 border-white/10' : 'divide-black/10 border-black/10',
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 py-5 text-left transition-colors sm:py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)]',
                  dark
                    ? 'hover:text-[var(--color-cyan)]'
                    : 'hover:text-[var(--color-cyan-deep)]',
                )}
              >
                <span
                  className={cn(
                    'font-[family-name:var(--font-display)] text-xl sm:text-2xl',
                    dark ? 'text-white' : 'text-[var(--color-charcoal)]',
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center border text-lg leading-none transition-transform duration-300',
                    dark ? 'border-white/20' : 'border-black/15',
                    isOpen && 'rotate-45 border-[var(--color-cyan)] text-[var(--color-cyan)]',
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      'max-w-3xl pb-6 text-sm leading-relaxed sm:text-base',
                      dark ? 'text-white/60' : 'text-[var(--color-charcoal)]/70',
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
