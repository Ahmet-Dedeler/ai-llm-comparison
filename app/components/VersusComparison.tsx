import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AIModelMode } from '../types';
import { aiModels, parameterNames } from '../utils/aiModels';
import { formatNumberWithCommas, formatPricePerMillionTokens } from '../utils/formatting';

interface VersusComparisonProps {
  selectedMode: AIModelMode;
  setSelectedMode: (mode: AIModelMode) => void;
  searchTerm: string;
}

const VersusComparison: React.FC<VersusComparisonProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm,
}) => {
  const [comparisonModels, setComparisonModels] = React.useState<any[]>([]);

  const filteredModels = React.useMemo(() => {
    return (
      aiModels[selectedMode]?.filter((model) =>
        model.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  }, [selectedMode, searchTerm]);

  const addComparisonModel = (model: any) => {
    if (
      comparisonModels.length < 4 &&
      !comparisonModels.includes(model)
    ) {
      setComparisonModels([...comparisonModels, model]);
    }
  };

  const removeComparisonModel = (model: any) => {
    setComparisonModels(
      comparisonModels.filter((m) => m !== model)
    );
  };

  const renderComparisonView = () => {
    if (comparisonModels.length === 0) {
      return <p>Select up to 4 models to compare</p>;
    }

    const allParameters = Array.from(
      new Set(
        comparisonModels.flatMap((model) =>
          Object.keys(model.sample_spec)
        )
      )
    );

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100"></th>
              {comparisonModels.map((model, index) => (
                <th
                  key={index}
                  className="border p-2 bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">
                      {model.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        removeComparisonModel(model)
                      }
                    >
                      X
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allParameters.map((param) => (
              <tr key={param}>
                <td className="border p-2 font-medium">
                  {parameterNames[param] || param}
                </td>
                {comparisonModels.map((model, index) => (
                  <td key={index} className="border p-2">
                    {model.sample_spec[param] !== undefined ? (
                      (() => {
                        const value = model.sample_spec[param];
                        if (typeof value === 'boolean') {
                          return value ? 'Yes' : 'No';
                        }
                        
                        // Format token-related fields with commas
                        if (param.includes('tokens') && (typeof value === 'number' || !isNaN(Number(value)))) {
                          return formatNumberWithCommas(Number(value));
                        }
                        
                        // Format cost per token fields with dollar signs (actual per-token cost)
                        if (param.includes('cost_per_token') && (typeof value === 'number' || !isNaN(Number(value)))) {
                          const numValue = Number(value);
                          // Format to 8 decimal places, then remove trailing zeros without using scientific notation
                          const formatted = numValue.toFixed(8).replace(/\.?0+$/, '');
                          return `$${formatted}`;
                        }
                        
                        // For other cost fields, add dollar sign if it's a number
                        if (param.includes('cost') && (typeof value === 'number' || !isNaN(Number(value)))) {
                          return `$${Number(value).toFixed(6)}`;
                        }
                        
                        return value;
                      })()
                    ) : (
                      'N/A'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="mb-8">
      {/* Responsive Header and Select */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 space-y-2 md:space-y-0">
        <h2 className="text-2xl font-bold">
          Versus Comparison
        </h2>
        <Select
          value={selectedMode}
          onValueChange={(value) =>
            setSelectedMode(value as AIModelMode)
          }
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select mode" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(aiModels).map((mode) => (
              <SelectItem key={mode} value={mode}>
                {mode === 'audio_speech'
                  ? 'TTS (Text To Speech)'
                  : mode.charAt(0).toUpperCase() +
                    mode.slice(1).replace('_', ' ')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {renderComparisonView()}
      {/* Responsive Grid of Models */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {filteredModels.map((model) => (
          <Button
            key={model.name}
            onClick={() => addComparisonModel(model)}
            disabled={
              comparisonModels.includes(model) ||
              comparisonModels.length >= 4
            }
            variant="outline"
            className="justify-start truncate"
          >
            <img
              src={model.logo}
              alt={`${model.provider} logo`}
              className="w-6 h-6 mr-2 flex-shrink-0"
            />
            {model.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VersusComparison;