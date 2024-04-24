import { Github, Linkedin } from 'lucide-react'
import { Tour } from './tourpopup'

export function Footer() {
  const steps = {
    title: 'Meus Projetos!',
    text: 'Projetos, códigos, ideias, configurações!',
  }
  return (
    <div className="flex items-center justify-end bg-[#2a273f] px-3 text-sm text-[#8F8CA8]">
      <Tour
        steps={steps}
        classNameProps="mt-[-50px] md:ml-[-280px]"
        svg="right"
      >
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/daniellx42"
            target="_blank"
            className="flex items-center gap-1 text-xs hover:text-[#E0DEF2]"
            rel="noreferrer"
          >
            <Linkedin size={12} />
            Linkedin
          </a>
          <a
            href="https://gist.github.com/daniellx42"
            target="_blank"
            className="flex items-center gap-1 text-xs hover:text-[#E0DEF2]"
            rel="noreferrer"
          >
            <Github size={12} />
            Gist
          </a>
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
      </Tour>
    </div>
  )
}
