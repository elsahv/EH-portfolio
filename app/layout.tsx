import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Laughing Coyote Dev',
  description: 'Web design for small businesses and creatives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClientOnly>
        {children}
        </ClientOnly>
        </body>
    </html>
  )
}
