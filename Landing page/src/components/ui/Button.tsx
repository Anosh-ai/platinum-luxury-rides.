import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)]'

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-cyan)] text-[var(--color-black)] hover:bg-[var(--color-cyan-deep)] hover:text-white',
  secondary:
    'border border-[var(--color-chrome)]/50 bg-transparent text-[var(--color-chrome-bright)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]',
  ghost:
    'bg-transparent text-[var(--color-chrome-bright)] hover:text-[var(--color-cyan)]',
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
