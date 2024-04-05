'use client'
import { useOpenFiles } from '@/hooks/useOpenFiles'

export function Header() {
  const { currentOpenFile } = useOpenFiles()

  const openFileName = currentOpenFile()

  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <button type="button" className="h-3 w-3 rounded-full bg-[#ED6A5E]" />
        <button type="button" className="h-3 w-3 rounded-full bg-[#F4BF4F]" />
        <button type="button" className="h-3 w-3 rounded-full bg-[#61C554]" />
      </div>
      <span className="text-sm text-[#908caa]">
        {openFileName && `${openFileName.title} — `}daniellx42
      </span>
      <div className="w-14">&nbsp;</div>
    </div>
  )
}
