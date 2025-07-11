// components/ModelTableForCalculator.tsx

import React, { useState, useMemo, useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AIModelMode } from '../types';
import { aiModels } from '../utils/aiModels';
import { calculateCost } from '../utils/helpers';
import { ArrowUpDown } from 'lucide-react';
import ProviderSelect from './ProviderSelect';
import {
  mapProvider,
  isOtherProvider,
  getDisplayName,
} from '../utils/providerMapping';
import { formatNumberWithCommas, formatPricePerMillionTokens } from '../utils/formatting';

interface ModelTableForCalculatorProps {
  selectedMode: AIModelMode;
  setSelectedMode: (mode: AIModelMode) => void;
  searchTerm: string;
  inputAmount: number;
  outputAmount: number;
  apiCalls: number;
  inputType: string;
  outputType: string;
}

const ModelTableForCalculator: React.FC<ModelTableForCalculatorProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm,
  inputAmount,
  outputAmount,
  apiCalls,
  inputType,
  outputType,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'ascending' | 'descending';
  }>({ key: null, direction: 'ascending' });
  
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const filteredModels = useMemo(() => {
    return (
      aiModels[selectedMode]?.filter((model) => {
        const mappedProvider = mapProvider(model.provider);
        const isOther = isOtherProvider(model.provider);
        return (
          model.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedProviders.length === 0 ||
            selectedProviders.includes(mappedProvider) ||
            (isOther && selectedProviders.includes('Other')))
        );
      }) || []
    );
  }, [selectedMode, searchTerm, selectedProviders]);

  const sortedModels = useMemo(() => {
    let sortableModels = [...filteredModels];
    if (sortConfig.key !== null) {
      sortableModels.sort((a, b) => {
        if (a.sample_spec[sortConfig.key!] < b.sample_spec[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.sample_spec[sortConfig.key!] > b.sample_spec[sortConfig.key!]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableModels;
  }, [filteredModels, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="mb-8">
      {/* Mode Selection Buttons */}
      <div className="flex flex-wrap justify-start space-x-2 mb-6">
        {Object.keys(aiModels).map((mode) => (
          <Button
            key={mode}
            variant={selectedMode === mode ? "default" : "outline"}
            onClick={() => setSelectedMode(mode as AIModelMode)}
            className={`border-black ${
              selectedMode === mode
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            } mb-2`}
          >
            {mode === 'audio_speech'
              ? 'TTS (Text To Speech)'
              : mode.charAt(0).toUpperCase() + mode.slice(1).replace('_', ' ')}
          </Button>
        ))}
      </div>
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              {/* Model Column */}
              <TableHead className="px-2 w-1/4">Model</TableHead>
              {/* Provider Column */}
              <TableHead className="px-2 w-1/4">
                <ProviderSelect
                  models={aiModels[selectedMode] || []}
                  selectedProviders={selectedProviders}
                  setSelectedProviders={setSelectedProviders}
                />
              </TableHead>
              {/* Other columns with fixed widths */}
              <TableHead
                onClick={() => requestSort('max_input_tokens')}
                className="cursor-pointer w-20"
              >
                Input<br />Length{' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('max_output_tokens')}
                className="cursor-pointer w-20"
              >
                Output<br />Length{' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('input_cost_per_token')}
                className="cursor-pointer w-24 px-1"
              >
                Input Price<br />
                (per 1M tokens){' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('output_cost_per_token')}
                className="cursor-pointer w-24 px-1"
              >
                Output Price<br />
                (per 1M tokens){' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              {/* Cost columns */}
              <TableHead className="px-1 w-24">Input Cost</TableHead>
              <TableHead className="px-1 w-24">Output Cost</TableHead>
              <TableHead className="px-1 w-24">Total Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedModels.map((model) => {
              const { inputCost, outputCost, totalCost } = calculateCost(
                model,
                inputAmount,
                outputAmount,
                apiCalls,
                inputType,
                outputType
              );

              return (
                <TableRow key={model.name}>
                  {/* Model Column */}
                  <TableCell className="px-2 w-1/4 font-medium whitespace-normal break-words">
                    {model.name}
                  </TableCell>
                  {/* Provider Column */}
                  <TableCell className="px-2 w-1/4">
                    <div className="flex items-center">
                      <img
                        src={model.logo}
                        alt={`${model.provider} logo`}
                        className="w-6 h-6 flex-shrink-0 mr-1"
                      />
                      <span className="whitespace-normal break-words">
                        {getDisplayName(model.provider)}
                      </span>
                    </div>
                  </TableCell>
                  {/* Other fixed width cells */}
                  <TableCell className="w-20 text-center">
                    {formatNumberWithCommas(model.sample_spec.max_input_tokens)}
                  </TableCell>
                  <TableCell className="w-20 text-center">
                    {formatNumberWithCommas(model.sample_spec.max_output_tokens)}
                  </TableCell>
                  <TableCell className="w-24 px-1 text-center">
                    {model.sample_spec.input_cost_per_token !== null &&
                    model.sample_spec.input_cost_per_token !== undefined
                      ? formatPricePerMillionTokens(Number(model.sample_spec.input_cost_per_token))
                      : 'N/A'}
                  </TableCell>
                  <TableCell className="w-24 px-1 text-center">
                    {model.sample_spec.output_cost_per_token !== null &&
                    model.sample_spec.output_cost_per_token !== undefined
                      ? formatPricePerMillionTokens(Number(model.sample_spec.output_cost_per_token))
                      : 'N/A'}
                  </TableCell>
                  {/* Cost cells */}
                  <TableCell className="px-1 w-24 text-center font-bold whitespace-nowrap">
                    {model.sample_spec.input_cost_per_token ? (
                      `$${inputCost.toFixed(4)}`
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className="px-1 w-24 text-center font-bold whitespace-nowrap">
                    {model.sample_spec.output_cost_per_token ? (
                      `$${outputCost.toFixed(4)}`
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className="px-1 w-24 text-center font-bold whitespace-nowrap">
                    {model.sample_spec.input_cost_per_token &&
                    model.sample_spec.output_cost_per_token ? (
                      `$${totalCost.toFixed(4)}`
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ModelTableForCalculator;