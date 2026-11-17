import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  width?: 'default' | 'narrow' | 'wide'
}

const widthClass = {
  default: 'max-w-6xl',
  narrow: 'max-w-3xl',
  wide: 'max-w-7xl',
} as const

export function Container({
  children,
  className,
  width = 'default',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-5 sm:px-8', widthClass[width], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
