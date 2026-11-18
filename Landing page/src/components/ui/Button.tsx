import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'cyan' | 'cyanOutline'
type ButtonSize = 'md' | 'lg'

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-[0.1em] uppercase transition-[color,background-color,border-color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-cyan)] text-[var(--color-black)] shadow-[0_0_24px_rgba(0,212,232,0.3)] hover:bg-[var(--color-cyan-soft)] hover:text-[var(--color-black)] focus-visible:outline-[var(--color-cyan)]',
  secondary:
    'border border-[var(--color-cyan)]/45 bg-transparent text-[var(--color-chrome-bright)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] focus-visible:outline-[var(--color-cyan)]',
  ghost:
    'bg-transparent text-[var(--color-chrome-bright)] hover:text-[var(--color-cyan)] focus-visible:outline-[var(--color-cyan)]',
  cyan:
    'bg-[var(--color-cyan)] text-[var(--color-black)] shadow-[0_0_24px_rgba(0,212,232,0.35)] hover:bg-[var(--color-cyan-soft)] hover:text-[var(--color-black)] focus-visible:outline-[var(--color-cyan)]',
  cyanOutline:
    'border border-[var(--color-cyan)]/50 bg-transparent text-[var(--color-chrome-bright)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] focus-visible:outline-[var(--color-cyan)]',
}

const sizeClass: Record<ButtonSize, string> = {
  md: 'px-5 py-3 text-xs',
  lg: 'px-7 py-3.5 text-sm',
}

type SharedProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...rest
  } = props
  const classes = cn(baseClass, variantClass[variant], sizeClass[size], className)

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
