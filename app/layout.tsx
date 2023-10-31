
import Header from '@/components/Header'
import './globals.css'
// import Footer from './components/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // title: 'Elsa Hovey | Portfolio',
  title: 'Elsa Hovey | Homebase for all website projects',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-gray-600">
      <body className="">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
        </body>
        
    </html>
  )
} 