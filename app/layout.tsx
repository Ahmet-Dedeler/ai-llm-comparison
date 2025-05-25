import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { CSPostHogProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'llmarena.ai | AI Model Comparison',
  description: 'Compare AI models easily! All providers in one place.',
  openGraph: {
    title: 'llmarena.ai | AI Model Comparison',
    description: 'Compare AI models easily! All providers in one place.',
    images: [
      {
        url: '/preview.png',
        width: 750,
        height: 750,
        alt: 'AI Model Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'llmarena.ai | AI Model Comparison',
    description: 'Compare AI models easily! All providers in one place.',
    images: [
      {
        url: '/preview.png',
        alt: 'AI Model Comparison',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  )
}