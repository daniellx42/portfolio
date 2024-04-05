import { ListProjects } from './components/list_rojects'
import jsonData from './projects.json'
export const metadata = {
  title: 'Projects',
}

export default async function Projects() {
  return (
    <section className="scroll-vscode absolute flex h-full w-full flex-col items-center justify-start overflow-y-scroll leading-relaxed text-white">
      <h1 className="p-2 text-2xl font-bold">Projects</h1>
      <ul className="flex w-full flex-col gap-2 p-1">
        <ListProjects projects={jsonData.projects} />
      </ul>
    </section>
  )
}
