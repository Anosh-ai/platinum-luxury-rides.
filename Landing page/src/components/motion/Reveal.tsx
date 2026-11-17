import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils/cn'

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

/**
 * Reliable scroll entrance — uses Motion whileInView (works with React layout).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type ClipRevealProps = {
  children: ReactNode
  className?: string
}

/** Clip-path image reveal wrapper. */
export function ClipReveal({ children, className }: ClipRevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={{ clipPath: 'inset(14% 10% 14% 10%)', scale: 1.08 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
