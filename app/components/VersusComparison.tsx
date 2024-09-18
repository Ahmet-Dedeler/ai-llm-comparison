import React from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AIModelMode } from '../types'
import { aiModels } from '../utils/aiModels'

interface VersusComparisonProps {
  selectedMode: AIModelMode
  setSelectedMode: (mode: AIModelMode) => void
  searchTerm: string
}

const VersusComparison: React.FC<VersusComparisonProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm
}) => {
  const [comparisonModels, setComparisonModels] = React.useState<any[]>([])

  const filteredModels = React.useMemo(() => {
    return aiModels[selectedMode]?.filter(model => 
      model.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []
  }, [selectedMode, searchTerm])

  const addComparisonModel = (model: any) => {
    if (comparisonModels.length < 4 && !comparisonModels.includes(model)) {
      setComparisonModels([...comparisonModels, model])
    }
  }

  const removeComparisonModel = (model: any) => {
    setComparisonModels(comparisonModels.filter(m => m !== model))
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Versus Comparison</h2>
        <Select
          value={selectedMode}
          onValueChange={(value) => setSelectedMode(value as AIModelMode)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select mode" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(aiModels).map((mode) => (
              <SelectItem key={mode} value={mode}>
                {mode === 'audio_speech' ? 'TTS (Text To Speech)' : mode.charAt(0).toUpperCase() + mode.slice(1).replace('_', ' ')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {filteredModels.map((model) => (
          <Button
            key={model.name}
            onClick={() => addComparisonModel(model)}
            disabled={comparisonModels.includes(model) || comparisonModels.length >= 4}
            variant="outline"
            className="justify-start"
          >
            <img src={model.logo} alt={`${model.provider} logo`} className="w-6 h-6 mr-2" />
            {model.name}
          </Button>
        ))}
      </div>
      {/* Render comparison view here */}
    </div>
  )
}

export default VersusComparison
