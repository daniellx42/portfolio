import { cn } from '@/lib/utils'

interface IListProjects {
  projects: {
    title: string
    text: string
    link: string
    tools: {
      name: string
    }[]
  }[]
}
export const ListProjects = ({ projects }: IListProjects) => {
  return (
    <>
      {projects.map((product, index) => (
        <li key={index} className="rounded bg-zinc-950 bg-opacity-40 p-3">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-extrabold">{product.title}</p>
            <p className="text-xs md:text-sm">{product.text}</p>
          </div>
          <div className="flex w-full items-center justify-between p-1">
            <ul className="flex gap-2">
              {product.tools.map((tools, i) => (
                <li
                  key={i}
                  className={cn(
                    'rounded-md border border-blue-600 border-opacity-40 bg-blue-700 bg-opacity-40 p-1 text-xs font-bold',
                  )}
                >
                  <p>{tools.name}</p>
                </li>
              ))}
            </ul>
            {product.link !== '' && (
              <div className="flex w-full justify-end pt-2">
                <a
                  href={product.link}
                  target="_blank"
                  className="rounded-md border border-green-800 border-opacity-40 bg-zinc-950 bg-opacity-40 p-2 text-[10px] font-bold hover:bg-zinc-800"
                >
                  Visualizar Projeto
                </a>
              </div>
            )}
          </div>
        </li>
      ))}
    </>
  )
}
