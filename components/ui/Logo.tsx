'use client'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glow?: boolean
  className?: string
  priority?: boolean
}

const sizes = {
  sm:  { w: 36,  h: 36,  cls: 'h-9' },
  md:  { w: 52,  h: 52,  cls: 'h-[52px]' },
  lg:  { w: 80,  h: 80,  cls: 'h-20' },
  xl:  { w: 140, h: 140, cls: 'h-32' },
}

export default function Logo({ size = 'md', glow = false, className = '', priority = false }: LogoProps) {
  const s = sizes[size]
  const glowEffect = glow
    ? 'drop-shadow(0 0 24px rgba(255,127,17,0.5))'
    : 'drop-shadow(0 0 8px rgba(255,127,17,0.2))'

  return (
    <Image
      src="/images/magic-genie-logo.png"
      alt="Magic Genie Services Inc."
      width={s.w}
      height={s.h}
      className={`${s.cls} w-auto ${className}`}
      style={{ filter: `brightness(0) invert(1) ${glowEffect}` }}
      priority={priority}
    />
  )
}
