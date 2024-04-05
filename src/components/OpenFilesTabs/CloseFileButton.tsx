'use client'
import { useOpenFiles } from '@/hooks/useOpenFiles'
import { X } from 'lucide-react'
import Link from 'next/link'

type CloseFileButtonProps = {
  isActive: boolean
  index: number
}

export function CloseFileButton({ isActive, index }: CloseFileButtonProps) {
  const { openFiles, closeFile } = useOpenFiles()

  if (isActive) {
    return (
      <Link
        onClick={() => {
          closeFile(index)
        }}
        href={index - 1 >= 0 ? openFiles[index - 1] : '/'}
        className="flex h-[20px] w-[20px] items-center justify-center rounded hover:bg-[#817c9c26]"
      >
        <X
          data-active={isActive}
          className="data-[active=true]:text-white"
          size={16}
        />
      </Link>
    )
  }

  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        closeFile(index)
      }}
      className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded hover:bg-[#817c9c26]"
    >
      <X
        data-active={isActive}
        className="data-[active=true]:text-white"
        size={16}
      />
    </a>
  )
}
