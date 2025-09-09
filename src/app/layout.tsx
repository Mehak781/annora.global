import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Annora Global - Farm to Table Marketplace',
  description: 'Connecting consumers directly with farmers for fresh, quality produce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="floating-shapes"></div>
        {children}
      </body>
    </html>
  )
}