import Image from 'next/image'

export const metadata = {
  title: 'README',
}

export default async function AboutMe() {
  return (
    <section className="scroll-vscode absolute flex h-full w-full flex-col items-center justify-start overflow-y-scroll leading-relaxed">
      <div className="flex w-full flex-col items-start p-4">
        <div className="w-full overflow-hidden rounded-xl bg-[#232135]">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image
                src={'/me.jpg'}
                alt="Avatar"
                width={200}
                height={0}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-4">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                Daniellx42
              </div>
              <a
                href="#"
                className="mt-1 block text-lg font-medium leading-tight text-white hover:underline"
              >
                Full Stack Web Developer
              </a>
              <p className="text-slate-300">
                Sou um apaixonado desenvolvedor Web com uma trajetória
                profissional de quatro anos no mercado de tecnologia. Desde a
                adolescência, mergulhei no mundo da programação e hoje, com três
                anos de experiência no desenvolvimento de projetos comerciais,
                trago uma bagagem diversificada e sólida em diversas linguagens
                e tecnologias. Minha especialidade reside no desenvolvimento de
                sites dinâmicos e funcionais, com um foco especial em
                JavaScript, TypeScript e Python. Essas linguagens têm sido meu
                pilar principal ao longo da minha jornada, permitindo-me criar
                interfaces de usuário intuitivas e responsivas, bem como
                implementar lógicas complexas no lado do servidor. Além disso,
                minha jornada profissional me proporcionou a oportunidade de
                explorar outras linguagens como C#, C, OCaml, Rust, Dart, Shell
                Script e muitas outras, ampliando assim meu repertório e minha
                capacidade de adaptar-me a diferentes ambientes e requisitos de
                projeto.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl bg-[#232135]">
          <div className="md:flex">
            <div className="p-4">
              <p className="text-slate-300">
                Tenho expertise tanto no Frontend quanto no Backend, navegando
                habilmente entre o desenvolvimento de interfaces elegantes e a
                criação de robustas arquiteturas de servidor. Estou
                familiarizado com uma variedade de ferramentas e frameworks que
                complementam o processo de desenvolvimento de sites, garantindo
                uma entrega eficiente e de alta qualidade. Minha jornada como
                desenvolvedor Full Stack não se limita apenas ao código. Possuo
                habilidades sólidas na configuração e administração de
                servidores, bem como no uso do terminal para automatizar tarefas
                e facilitar a gestão de projetos. Estou entusiasmado com a
                oportunidade de aplicar minha experiência e paixão pela
                tecnologia em um novo desafio. Estou confiante de que minhas
                habilidades técnicas e minha mentalidade orientada para soluções
                serão um excelente complemento para a equipe e contribuirão para
                o sucesso de projetos empolgantes.
              </p>
            </div>
            <div className="md:shrink-0">
              <Image
                src={'/me2d.jpg'}
                alt="Avatar"
                width={200}
                height={0}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
          </div>
        </div>
        <p className="mt-4 w-full text-center text-slate-300">
          Estou ansioso para a possibilidade de discutir como posso agregar
          valor à sua empresa.
        </p>
      </div>
    </section>
  )
}
