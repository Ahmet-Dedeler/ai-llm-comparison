import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AIModelMode } from '../types';
import { ArrowUpDown } from 'lucide-react';
import ProviderSelect from './ProviderSelect';
import {
  getDisplayName,
} from '../utils/providerMapping';
import { getFilteredModels, getSortedModels, preloadModeData } from '../utils/dataService';

interface OptimizedModelTableProps {
  selectedMode: AIModelMode;
  setSelectedMode: (mode: AIModelMode) => void;
  searchTerm: string;
  showPricingCalculator?: boolean;
  inputAmount?: number;
  outputAmount?: number;
  apiCalls?: number;
  inputType?: string;
  outputType?: string;
}

interface CalculatedCosts {
  inputCost: string;
  outputCost: string;
  totalCost: string;
}

// Memoized table row component
const ModelRow = React.memo(({ 
  model, 
  showPricingCalculator, 
  inputAmount, 
  outputAmount, 
  apiCalls 
}: {
  model: any;
  showPricingCalculator?: boolean;
  inputAmount?: number;
  outputAmount?: number;
  apiCalls?: number;
}) => {
  const calculatedCosts = useMemo<CalculatedCosts | null>(() => {
    if (!showPricingCalculator || !inputAmount || !outputAmount || !apiCalls) return null;
    
    const rawInputCost = Number(model.sample_spec.input_cost_per_token) * inputAmount * apiCalls;
    const rawOutputCost = Number(model.sample_spec.output_cost_per_token) * outputAmount * apiCalls;
    const rawTotalCost = rawInputCost + rawOutputCost;
    
    return {
      inputCost: rawInputCost > 0 ? `$${rawInputCost.toFixed(4)}` : 'N/A',
      outputCost: rawOutputCost > 0 ? `$${rawOutputCost.toFixed(4)}` : 'N/A',
      totalCost: rawTotalCost > 0 ? `$${rawTotalCost.toFixed(4)}` : 'N/A',
    };
  }, [model, showPricingCalculator, inputAmount, outputAmount, apiCalls]);

  return (
    <TableRow>
      <TableCell className="w-32 font-medium whitespace-normal break-words">
        {model.name}
      </TableCell>
      <TableCell className="w-24 overflow-hidden">
        <div className="flex items-center space-x-2 flex-wrap">
          <img
            src={model.logo}
            alt={`${model.provider} logo`}
            className="w-6 h-6 flex-shrink-0"
            loading="lazy"
          />
          <span className="whitespace-normal break-words">
            {getDisplayName(model.provider)}
          </span>
        </div>
      </TableCell>
      <TableCell className="w-20 text-center">
        {model.sample_spec.max_input_tokens ?? 'N/A'}
      </TableCell>
      <TableCell className="w-20 text-center">
        {model.sample_spec.max_output_tokens ?? 'N/A'}
      </TableCell>
      <TableCell className="w-16 px-1 text-center">
        {model.sample_spec.input_cost_per_token
          ? (Number(model.sample_spec.input_cost_per_token) * 1e6).toFixed(2)
          : 'N/A'}
      </TableCell>
      <TableCell className="w-16 px-1 text-center">
        {model.sample_spec.output_cost_per_token
          ? (Number(model.sample_spec.output_cost_per_token) * 1e6).toFixed(2)
          : 'N/A'}
      </TableCell>
      {showPricingCalculator && calculatedCosts ? (
        <>
          <TableCell className="w-16 px-1 text-center font-bold">
            {calculatedCosts.inputCost}
          </TableCell>
          <TableCell className="w-16 px-1 text-center font-bold">
            {calculatedCosts.outputCost}
          </TableCell>
          <TableCell className="w-16 px-1 text-center font-bold">
            {calculatedCosts.totalCost}
          </TableCell>
        </>
      ) : !showPricingCalculator ? (
         <TableCell className="w-12 px-1 text-center">
           {model.sample_spec.supports_vision ? '✅' : '❌'}
         </TableCell>
      ) : null}
    </TableRow>
  );
});

ModelRow.displayName = 'ModelRow';

const OptimizedModelTable: React.FC<OptimizedModelTableProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm,
  showPricingCalculator,
  inputAmount,
  outputAmount,
  apiCalls,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'ascending' | 'descending';
  }>({ key: null, direction: 'ascending' });
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const availableModes = ['chat', 'embedding', 'image_generation', 'completion', 'audio_transcription', 'audio_speech'];

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      setLoading(true);
      try {
        const filtered = await getFilteredModels(selectedMode, searchTerm, selectedProviders);
        if (isMounted) setModels(filtered);
      } catch (error) {
        console.error('Error loading models:', error);
        if (isMounted) setModels([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadData();
    return () => { isMounted = false; };
  }, [selectedMode, searchTerm, selectedProviders]);

  useEffect(() => {
    availableModes.forEach(mode => {
      if (mode !== selectedMode) preloadModeData(mode as AIModelMode);
    });
  }, [selectedMode]);

  const sortedModels = useMemo(() => {
    return getSortedModels(models, sortConfig);
  }, [models, sortConfig]);

  const requestSort = useCallback((key: string) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'ascending' ? 'descending' : 'ascending'
    }));
  }, []);

  const handleModeChange = useCallback((mode: AIModelMode) => {
    setSelectedMode(mode);
    setSortConfig({ key: null, direction: 'ascending' });
  }, [setSelectedMode]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-start space-x-2 mb-6">
        {availableModes.map((mode) => (
          <Button
            key={mode}
            variant={selectedMode === mode ? 'default' : 'outline'}
            onClick={() => handleModeChange(mode as AIModelMode)}
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

      <div className="overflow-x-auto">
        <Table className="min-w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Model</TableHead>
              <TableHead className="w-24">
                <ProviderSelect
                  models={models}
                  selectedProviders={selectedProviders}
                  setSelectedProviders={setSelectedProviders}
                />
              </TableHead>
              <TableHead onClick={() => requestSort('max_input_tokens')} className="cursor-pointer w-20">
                Input<br />Length <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => requestSort('max_output_tokens')} className="cursor-pointer w-20">
                Output<br />Length <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => requestSort('input_cost_per_token')} className="cursor-pointer w-16 px-1">
                Input Price<br />(per 1M tokens) <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead onClick={() => requestSort('output_cost_per_token')} className="cursor-pointer w-16 px-1">
                Output Price<br />(per 1M tokens) <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              {showPricingCalculator ? (
                <>
                  <TableHead className="w-16 px-1">Input Cost</TableHead>
                  <TableHead className="w-16 px-1">Output Cost</TableHead>
                  <TableHead className="w-16 px-1">Total Cost</TableHead>
                </>
              ) : (
                <TableHead onClick={() => requestSort('supports_vision')} className="cursor-pointer w-12 px-1">
                  Supports<br />Vision <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedModels.map((model) => (
              <ModelRow
                key={model.name}
                model={model}
                showPricingCalculator={showPricingCalculator}
                inputAmount={inputAmount}
                outputAmount={outputAmount}
                apiCalls={apiCalls}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      
      {sortedModels.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No models found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default React.memo(OptimizedModelTable); 