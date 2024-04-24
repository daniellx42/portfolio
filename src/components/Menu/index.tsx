import {
  Bug,
  Cog,
  Files,
  FlaskConical,
  GitFork,
  Monitor,
  Puzzle,
  Search,
} from 'lucide-react'
import { MenuButton } from './MenuButton'
import { SocialLinksMenuButton } from './SocialLinksMenuButton'
import { Tour } from '../tourpopup'

export function Menu() {
  const steps = {
    title: 'Minhas Redes sociais!',
    text: 'Redes sociais para contato!',
  }
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <MenuButton icon={Files} isActive />
        <MenuButton icon={Search} />
        <MenuButton icon={GitFork} />
        <MenuButton icon={Bug} />
        <MenuButton icon={Puzzle} />
        <MenuButton icon={Monitor} />
        <MenuButton icon={FlaskConical} />
      </div>
      <div className="flex flex-col items-center">
        <Tour steps={steps} classNameProps="ml-16 mt-[-35px]" svg="left">
          <SocialLinksMenuButton />
        </Tour>

        <MenuButton icon={Cog} />
      </div>
    </div>
  )
}
