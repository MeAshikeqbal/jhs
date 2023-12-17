import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import {Navbar} from '@/components/NavBar'
import { Separator } from '@/components/ui/separator'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jalalpur High School (H.S.)',
  description: 'Jalalpur High School (H.S.) is one of the significant academic institutions of Malda District, West Bengal Since 1973, it is looking forward to the advancement of learning with an unmatched calibre. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopBar />
      <Navbar
      />
      <Separator/>
        {children}
      </body>
    </html>
  )
}
