import { Explorer } from '@/components/Explorer'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { OpenFilesTabs } from '@/components/OpenFilesTabs'
import { OpenFilesProvider } from '@/hooks/useOpenFiles'
import { Roboto } from 'next/font/google'
import { Background } from '@/components/background'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

export const metadata = {
  title: {
    default: 'Daniellx42',
    template: '%s | Daniellx42',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Full Stack Web Developer',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="flex h-screen w-full items-center justify-center p-4">
          <Background />
          <div className="flex aspect-video w-full max-w-7xl flex-col justify-between overflow-hidden rounded-lg border border-[#72707D] bg-[#232135]">
            <OpenFilesProvider>
              <Header />
              <div className="flex h-full">
                <Menu />
                <Explorer />
                <div className="flex w-full flex-col">
                  <OpenFilesTabs />
                  <div className="relative h-full w-full">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
