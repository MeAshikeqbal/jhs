import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {TopBar} from '@/components/topbar'
import {Navbar} from '@/components/navbar'
import {Footer} from '@/components/footer'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jalalpurhighschool.com'),
  title:{
    template: '%s | Jalalpur High School (H.S.)',
    default: 'Jalalpur High School (H.S.)',
  },
  description: 'Jalalpur High School (H.S.) is one of the significant academic institutions of Malda District, West Bengal Since 1973, it is looking forward to the advancement of learning with an unmatched calibre. ',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    images: [`https://${process.env.VERCEL_URL}/api/og?title=Jalalpur%20High%20School%20(H.S.)&width=640&height=320`],
  },
  twitter:{
    card: 'summary_large_image',
    title: 'Jalalpur High School (H.S.)',
  },
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
        {children}
        <Footer/>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}
