import Link from 'next/link'
import { CardContent, Card } from '@/components/ui/card'
import Image from 'next/image'
import { Download } from 'lucide-react'

export const metadata = {
  title: 'Curriculum',
}

export default async function Curriculum() {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <Link download href="/files/curriculum.pdf">
        <Card className="w-64 max-w-md border border-[#72707D] bg-[#232135] hover:bg-zinc-700 hover:bg-opacity-40">
          <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
            <Image
              alt="pdf"
              width={100}
              height={100}
              quality={100}
              src={'/svg/pdf.svg'}
            />
            <span className="text-xl font-semibold text-white">
              Visualizar Currículo
            </span>
            <Download className="text-white transition-colors" />
          </CardContent>
        </Card>
      </Link>
    </section>
  )
}
