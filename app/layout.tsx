import './globals.css'
import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const pressStart2p = Press_Start_2P({weight: "400", preload: false})

export const metadata: Metadata = {
  title: 'DavidZeleniak',
  description: 'Personal site for David Zeleniak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pressStart2p.className}>{children}</body>
    </html>
  )
}
