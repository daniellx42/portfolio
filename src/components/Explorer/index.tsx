'use client'
import {
  Cog,
  Cpu,
  FileJson,
  FolderKanban,
  Joystick,
  MoreHorizontal,
  Terminal,
  FileText,
  BookOpenText,
} from 'lucide-react'
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu'
import { File } from './File'
import { Folder } from './Folder'
import { SubMenu } from './SubMenu'
import { Tour } from '../tourpopup'

export type FileType = {
  title: string
  icon: React.ReactNode
}

export const explorerFiles: Record<string, FileType> = {
  '/vscode/settings': {
    icon: <FileJson size={16} />,
    title: 'settings.json',
  },
  '/readme': {
    icon: <BookOpenText size={16} />,
    title: 'README.md',
  },
  '/curriculum': {
    icon: <FileText size={16} />,
    title: 'currículo.pdf',
  },
  '/projects': {
    icon: <FolderKanban size={16} />,
    title: 'projects.md',
  },
  '/terminal/general': {
    icon: <Terminal size={16} />,
    title: 'General',
  },
  '/terminal/fish': { icon: <Cog size={16} />, title: 'config.fish' },
  '/others/dev-setup': { icon: <Cpu size={16} />, title: 'dev.setup' },
  '/others/gaming-setup': {
    icon: <Joystick size={16} />,
    title: 'gaming.setup',
  },
}

export function Explorer() {
  const steps = {
    title: 'Seja bem Vindo ao meu portfolio!',
    text: 'Navegue entre as abas para conhecer mais sobre daniellx42.',
  }

  return (
    <div className="px-4 py-2 text-[#8F8CA8] shadow shadow-white/10">
      <p className="flex items-center justify-between pl-2 text-xs font-medium">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </p>
      <Tour steps={steps} classNameProps="ml-52" svg="left">
        <nav className="mt-4 flex h-full min-w-44 flex-col">
          <SubMenu title="OPEN EDITORS">
            <OpenFilesSubMenu />
          </SubMenu>

          <SubMenu defaultOpen title="DANIELLX42">
            <Folder defaultOpen title="Projects">
              <File href="/projects">
                <FolderKanban size={16} />
                projects.md
              </File>
            </Folder>

            <Folder defaultOpen title="VS Code">
              <File href="/vscode/settings">
                <FileJson size={16} />
                settings.json
              </File>
            </Folder>

            <File
              href="/readme"
              className="flex items-center gap-2 px-4 py-1 pl-9 text-sm hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
            >
              <BookOpenText size={16} />
              README.md
            </File>
            <File
              href="/curriculum"
              className="flex items-center gap-2 px-4 py-1 pl-9 text-sm hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
            >
              <FileText size={16} />
              currículo.pdf
            </File>
          </SubMenu>
        </nav>
      </Tour>
    </div>
  )
}
