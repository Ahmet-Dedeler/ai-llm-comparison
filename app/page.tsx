'use client'

import { useState } from 'react'
import Header from './components/Header'
import ModelComparison from './components/ModelComparison'
import { Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showPricingCalculator, setShowPricingCalculator] = useState<boolean>(false)
  const [showVersusComparison, setShowVersusComparison] = useState<boolean>(false)

  return (
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
              href="https://www.producthunt.com/posts/llmarena-ai?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-llmarena-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=677434&theme=light&period=daily"
                alt="llmarena.ai - Discover, compare, and choose AI models—100% Free | Product Hunt"
                style={{ width: '312.5px', height: '67.5px' }}
                width="312.5"
                height="67.5"
              />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <Button
              onClick={() => {
                setShowPricingCalculator(false)
                setShowVersusComparison(false)
              }}
              variant={!showPricingCalculator && !showVersusComparison ? "default" : "outline"}
              className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
              style={{
                boxShadow:
                  !showPricingCalculator && !showVersusComparison ? '4px 4px 0 0 #000' : 'none',
                transform:
                  !showPricingCalculator && !showVersusComparison ? 'translate(-2px, -2px)' : 'none',
              }}
            >
              Price Comparison
            </Button>
            <Button
              onClick={() => {
                setShowPricingCalculator(true)
                setShowVersusComparison(false)
              }}
              variant={showPricingCalculator ? "default" : "outline"}
              className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
              style={{
                boxShadow: showPricingCalculator ? '4px 4px 0 0 #000' : 'none',
                transform: showPricingCalculator ? 'translate(-2px, -2px)' : 'none',
              }}
            >
              Pricing Calculator
            </Button>
            <Button
              onClick={() => {
                setShowPricingCalculator(false)
                setShowVersusComparison(true)
              }}
              variant={showVersusComparison ? "default" : "outline"}
              className="border-2 border-black px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200 ease-in-out"
              style={{
                boxShadow: showVersusComparison ? '4px 4px 0 0 #000' : 'none',
                transform: showVersusComparison ? 'translate(-2px, -2px)' : 'none',
              }}
            >
              Versus Comparison
            </Button>
          </div>
        </div>
        <ModelComparison
          showPricingCalculator={showPricingCalculator}
          setShowPricingCalculator={setShowPricingCalculator}
          showVersusComparison={showVersusComparison}
          setShowVersusComparison={setShowVersusComparison}
        />
      </div>
    </div>
  )
}