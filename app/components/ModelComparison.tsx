import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import PricingCalculator from './PricingCalculator'
import VersusComparison from './VersusComparison'
import ModelTable from './ModelTable'
import { AIModelMode } from '../types'

interface ModelComparisonProps {
  showPricingCalculator: boolean
  setShowPricingCalculator: (show: boolean) => void
  showVersusComparison: boolean
  setShowVersusComparison: (show: boolean) => void
}

export default function ModelComparison({
  showPricingCalculator,
  setShowPricingCalculator,
  showVersusComparison,
  setShowVersusComparison
}: ModelComparisonProps) {
  const [selectedMode, setSelectedMode] = useState<AIModelMode>('chat')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [inputType, setInputType] = useState<string>('tokens')
  const [inputAmount, setInputAmount] = useState<number>(200)
  const [outputAmount, setOutputAmount] = useState<number>(1000)
  const [apiCalls, setApiCalls] = useState<number>(100)

  return (
    <>
      <div className="text-center mb-16">
        {/* ... (Hero section content) ... */}
      </div>

      <div className="mb-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {showPricingCalculator && (
        <PricingCalculator
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
          outputAmount={outputAmount}
          setOutputAmount={setOutputAmount}
          apiCalls={apiCalls}
          setApiCalls={setApiCalls}
          inputType={inputType}
          setInputType={setInputType}
        />
      )}

      {showVersusComparison ? (
        <VersusComparison
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          searchTerm={searchTerm}
        />
      ) : (
        <ModelTable
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          searchTerm={searchTerm}
          showPricingCalculator={showPricingCalculator}
          inputAmount={inputAmount}
          outputAmount={outputAmount}
          apiCalls={apiCalls}
        />
      )}
    </>
  )
}
