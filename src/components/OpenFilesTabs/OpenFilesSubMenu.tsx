'use client'
import { useOpenFiles } from '@/hooks/useOpenFiles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { explorerFiles } from '../Explorer'
import { CloseFileButton } from './CloseFileButton'

export function OpenFilesSubMenu() {
  const { openFiles } = useOpenFiles()
  const pathName = usePathname()
  return (
    <>
      {openFiles.map((openFile, index) => {
        const isCurrentActive = pathName === openFile

        const file = explorerFiles[openFile]

        if (!file) {
          return <></>
        }

        return (
          <div
            key={index}
            data-active={isCurrentActive}
            className="flex items-center gap-2 px-4 py-1 text-sm text-transparent hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
          >
            <div className="data-[active=true]:text-white">
              <CloseFileButton isActive={isCurrentActive} index={index} />
            </div>
            <Link href={openFile}>
              <div
                data-active={isCurrentActive}
                className={`flex items-center gap-2 text-sm text-[#908caa] data-[active=true]:text-[#E0DEF2]`}
              >
                {file.icon}
                {file.title}
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
