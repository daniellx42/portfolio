'use client'

import { useOpenFiles } from '@/hooks/useOpenFiles'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface FileProps extends LinkProps {
  children: ReactNode[]
  className?: string
}

export function File(props: FileProps) {
  const { markFileAsOpen } = useOpenFiles()
  const pathName = usePathname()

  const isCurrentActive = pathName === props.href

  return (
    <Link
      data-active={isCurrentActive}
      onClick={() => markFileAsOpen(props.href.toString())}
      className={cn(
        'flex items-center gap-2 px-4 py-1 pl-12 text-sm hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]',
        props.className,
      )}
      {...props}
    />
  )
}
