'use client'

import { useState, useCallback, useMemo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import { Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Dynamic import for ModelComparison to reduce initial bundle size
const ModelComparison = dynamic(() => import('./components/ModelComparison'), {
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  ),
  ssr: false
})

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "llmarena.ai",
  "alternateName": "AI Model Comparison Tool",
  "description": "Compare AI models easily! All providers in one place. Find the best LLM for your needs with our comprehensive pricing calculator and feature comparison tool.",
  "url": "https://llmarena.ai",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free AI model comparison tool"
  },
  "creator": {
    "@type": "Organization",
    "name": "llmarena.ai"
  },
  "keywords": "AI model comparison, LLM comparison, AI pricing calculator, OpenAI pricing, Anthropic Claude, Google Gemini",
  "featureList": [
    "AI Model Price Comparison",
    "Pricing Calculator",
    "Versus Comparison",
    "Multiple AI Providers",
    "Real-time Pricing Data"
  ],
  "screenshot": "https://llmarena.ai/preview.png",
  "softwareVersion": "1.0",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "inLanguage": "en-US",
  "isAccessibleForFree": true
}

export default function Home() {
  const [showPricingCalculator, setShowPricingCalculator] = useState<boolean>(false)
  const [showVersusComparison, setShowVersusComparison] = useState<boolean>(false)

  // Memoized handlers to prevent unnecessary re-renders
  const handlePriceComparison = useCallback(() => {
    setShowPricingCalculator(false)
    setShowVersusComparison(false)
  }, [])

  const handlePricingCalculator = useCallback(() => {
    setShowPricingCalculator(true)
    setShowVersusComparison(false)
  }, [])

  const handleVersusComparison = useCallback(() => {
    setShowPricingCalculator(false)
    setShowVersusComparison(true)
  }, [])

  // Memoized button styles to prevent recalculation
  const getButtonStyle = useCallback((isActive: boolean) => ({
    boxShadow: isActive ? '4px 4px 0 0 #000' : 'none',
    transform: isActive ? 'translate(-2px, -2px)' : 'none',
  }), [])

  const priceComparisonActive = !showPricingCalculator && !showVersusComparison
  const pricingCalculatorActive = showPricingCalculator
  const versusComparisonActive = showVersusComparison

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <div className="text-center mb-16">
            {/* Tweet Link */}
            <a
              href="https://x.com/ahmetdedeler101/status/1839313737561551359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#E8F5FD] rounded-full mb-4 hover:bg-[#D0E7FB] transition-colors duration-200"
              aria-label="View announcement tweet about AI Model Comparison tool"
            >
              <Twitter className="w-5 h-5 text-[#1DA1F2] mr-2" />
              <span className="text-[#1DA1F2] font-medium">Introducing AI Model Comparison</span>
            </a>

            {/* Website Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight">
              AI Model Comparison
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              See and compare every AI model easily. 100% free & open-source.
            </p>

            {/* Product Hunt Embed */}
            <div className="flex justify-center mb-5">
              <a
                href="https://www.producthunt.com/posts/countless-dev?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-llmarena-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View llmarena.ai on Product Hunt"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=677434&theme=light&period=daily"
                  alt="llmarena.ai - Discover, compare, and choose AI models—100% Free | Product Hunt"
                  style={{ width: '312.5px', height: '67.5px' }}
                  width="312.5"
                  height="67.5"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
              <Button
                onClick={handlePriceComparison}
                variant={priceComparisonActive ? "default" : "outline"}
                className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
                style={getButtonStyle(priceComparisonActive)}
              >
                Price Comparison
              </Button>
              <Button
                onClick={handlePricingCalculator}
                variant={pricingCalculatorActive ? "default" : "outline"}
                className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
                style={getButtonStyle(pricingCalculatorActive)}
              >
                Pricing Calculator
              </Button>
              <Button
                onClick={handleVersusComparison}
                variant={versusComparisonActive ? "default" : "outline"}
                className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
                style={getButtonStyle(versusComparisonActive)}
              >
                Versus Comparison
              </Button>
            </div>
          </div>
          
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          }>
          <ModelComparison
            showPricingCalculator={showPricingCalculator}
            setShowPricingCalculator={setShowPricingCalculator}
            showVersusComparison={showVersusComparison}
            setShowVersusComparison={setShowVersusComparison}
          />
          </Suspense>
        </div>
      </div>
    </>
  )
}