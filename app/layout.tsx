import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countless.dev | AI Model Comparison',
  description: 'Compare AI models easily! All providers in one place.',
  openGraph: {
    title: 'Countless.dev | AI Model Comparison',
    description: 'Compare AI models easily! All providers in one place.',
    images: [
      {
        url: '/preview.png', // Replace with the path to your image
        width: 750,
        height: 750,
        alt: 'AI Model Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countless.dev | AI Model Comparison',
    description: 'Compare AI models easily! All providers in one place.',
    images: [
      {
        url: '/preview.png', // Replace with the path to your image
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
