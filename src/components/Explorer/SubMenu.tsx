'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { ReactNode, useState } from 'react'

interface SubMenuProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function SubMenu({
  title,
  children,
  defaultOpen = false,
}: SubMenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex w-full items-center gap-2 border border-transparent border-t-[#817c9c26] px-1 py-1 focus:border-[#363247]">
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span className="text-xs font-semibold">{title}</span>
      </Collapsible.Trigger>

      <Collapsible.Content className="pl-2">{children}</Collapsible.Content>
    </Collapsible.Root>
  )
}
