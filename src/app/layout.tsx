import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Children } from '@/module/interface/global'
import Providers from './provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valorant Card Overlay',
  description: 'Valorant Card Overlay Generator for Streamer'
}

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}

export default RootLayout
