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
                Desenvolvedor Full Stack Web / Mobile / Software
              </a>
              <p className="text-slate-300">
                Desenvolvedor Full Stack Pleno com mais de 6 anos de experiência
                criando soluções robustas e escaláveis — do frontend ao DevOps,
                incluindo mobile e backend. Especialista em TypeScript, JavaScript, Python, PHP, Dart e com vivência em Java, C#, Go e Rust.
                Possuo sólidos conhecimentos em Linux, bancos de dados SQL/NoSQL (PostgreSQL, MongoDB, MySQL)
                e infraestrutura cloud-containerizada (Docker, Kubernetes, CI/CD).
                Nos últimos anos, incorporei projetos com foco em Inteligência Artificial,
                incluindo chatbots, NLP, automação com ML e MLOps, utilizando ferramentas como TensorFlow, PyTorch e LangChain.
                Com mentalidade DevOps e habilidade em cloud (AWS, GCP ou Azure), atuo integrando práticas de segurança (DevSecOps)
                e performance em ambientes de produção.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl bg-[#232135]">
          <div className="md:flex">
            <div className="p-4">
              <p className="text-slate-300">
                Sou atraído por inovação e AI generativa, aplicando pragmatismo
                e foco em entrega de valor em projetos Full Stack. Tenho experiência
                completa em desenvolvimento web e mobile, tendo criado aplicativos
                publicados na Google Play Store com mais de 1.000 downloads ativos.
                Atuo com tecnologias modernas como Flutter/Dart para mobile, Next.js/React para web,
                e APIs robustas com Node.js, PHP e Python. Desenvolvo soluções end-to-end incluindo integração com sistemas de pagamento,
                automação inteligente com IA, e bots para Telegram utilizando NLP.
                Minha experiência abrange desde projetos freelance até atuação em empresas,
                sempre focando em arquiteturas escaláveis, segurança (OWASP) e boas práticas de DevOps.
                Excelência técnica, comunicação e orientação a resultados são os pilares da minha atuação profissional.
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
          Fundador do app &quot;Minhas Vendas&quot; (1k+ downloads) e desenvolvedor de projetos como CorteClick e KiyunaPay.
          Sempre em busca de novos desafios e oportunidades para aplicar tecnologias inovadoras em soluções que gerem valor real.
        </p>
      </div>
    </section>
  )
}
