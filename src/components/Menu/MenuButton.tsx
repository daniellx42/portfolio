import type { LucideIcon } from 'lucide-react'

interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
}

export function MenuButton({ icon: Icon, isActive = false }: MenuButtonProps) {
  return (
    <div
      data-active={isActive}
      className="flex h-12 items-center justify-center border-l-2 border-transparent p-2 data-[active=true]:border-[#E0DEF2]"
    >
      <Icon
        strokeWidth={1.5}
        size={28}
        color={isActive ? '#E0DEF2' : '#8F8CA8'}
      />
    </div>
  )
}
