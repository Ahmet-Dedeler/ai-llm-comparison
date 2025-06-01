import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { CSPostHogProvider, NextThemesProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'llmarena.ai | AI Model Comparison - Compare LLM Prices & Features',
  description: 'Compare AI models easily! All providers in one place. Find the best LLM for your needs with our comprehensive pricing calculator and feature comparison tool. OpenAI, Anthropic, Google, and more.',
  keywords: [
    'AI model comparison',
    'LLM comparison',
    'AI pricing calculator',
    'OpenAI pricing',
    'Anthropic Claude',
    'Google Gemini',
    'AI model prices',
    'language model comparison',
    'ChatGPT alternatives',
    'AI API pricing',
    'machine learning models',
    'artificial intelligence tools'
  ],
  authors: [{ name: 'llmarena.ai' }],
  creator: 'llmarena.ai',
  publisher: 'llmarena.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://llmarena.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://llmarena.ai',
    title: 'llmarena.ai | AI Model Comparison - Compare LLM Prices & Features',
    description: 'Compare AI models easily! All providers in one place. Find the best LLM for your needs with our comprehensive pricing calculator and feature comparison tool.',
    siteName: 'llmarena.ai',
    images: [
      {
        url: '/preview.png',
        width: 750,
        height: 750,
        alt: 'AI Model Comparison Tool - llmarena.ai',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'llmarena.ai | AI Model Comparison - Compare LLM Prices & Features',
    description: 'Compare AI models easily! All providers in one place. Find the best LLM for your needs with our comprehensive pricing calculator.',
    site: '@ahmetdedeler101',
    creator: '@ahmetdedeler101',
    images: [
      {
        url: '/preview.png',
        alt: 'AI Model Comparison Tool - llmarena.ai',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>
        <CSPostHogProvider>
          <NextThemesProvider>
            <div className={inter.className}>
              {children}
              <Analytics />
            </div>
          </NextThemesProvider>
        </CSPostHogProvider>
      </body>
    </html>
  )
}