import './globals.css'
import type { Metadata } from 'next'
import { SmoothScrollProvider } from '@/components/motion/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'DARAYI — Premium Jewelry Concept',
  description: 'Premium motion-first jewelry website concept for DARAYI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body>
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  )
}