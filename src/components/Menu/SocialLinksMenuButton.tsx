'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Github, Linkedin, User, Twitter } from 'lucide-react'
import { MenuButton } from './MenuButton'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/daniellx42',
    icon: <Github size={14} />,
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/daniellx42',
    icon: <Linkedin size={14} />,
  },
  {
    name: 'twitter',
    url: 'https://x.com/daniellx42',
    icon: <Twitter size={14} />,
  },
]

export function SocialLinksMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Redes sociais">
        <MenuButton icon={User} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="right"
          className="z-10 flex flex-col overflow-auto rounded-lg bg-[#2a273f]"
        >
          {socialLinks.map((socialItem) => {
            return (
              <DropdownMenu.Item key={socialItem.url} className="outline-none">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-[#E0DEF2] hover:bg-[#454066]"
                >
                  {socialItem.icon}
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
