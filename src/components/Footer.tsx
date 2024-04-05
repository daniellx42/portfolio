import { Github } from 'lucide-react'

export function Footer() {
  return (
    <div className="flex items-center justify-end gap-3 bg-[#2a273f] px-3 text-sm text-[#8F8CA8]">
      <a
        href="https://github.com/daniellx42"
        target="_blank"
        className="flex items-center gap-1 text-xs hover:text-[#E0DEF2]"
        rel="noreferrer"
      >
        <Github size={12} />
        Github
      </a>
    </div>
  )
}
