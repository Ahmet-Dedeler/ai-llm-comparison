import React, { useState, useMemo } from 'react';
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
import { aiModels } from '../utils/aiModels';
import { ArrowUpDown } from 'lucide-react';
import ProviderSelect from './ProviderSelect';
import {
  mapProvider,
  isOtherProvider,
  getDisplayName,
} from '../utils/providerMapping';

interface ModelTableForComparisonProps {
  selectedMode: AIModelMode;
  setSelectedMode: (mode: AIModelMode) => void;
  searchTerm: string;
}

const ModelTableForComparison: React.FC<ModelTableForComparisonProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm,
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
        if (sortConfig.key === 'supports_vision') {
          if (
            a.sample_spec.supports_vision === b.sample_spec.supports_vision
          ) {
            return 0;
          }
          return (
            (a.sample_spec.supports_vision ? 1 : -1) *
            (sortConfig.direction === 'ascending' ? 1 : -1)
          );
        } else {
          if (a.sample_spec[sortConfig.key!] < b.sample_spec[sortConfig.key!]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a.sample_spec[sortConfig.key!] > b.sample_spec[sortConfig.key!]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        }
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
            variant={selectedMode === mode ? 'default' : 'outline'}
            onClick={() => setSelectedMode(mode as AIModelMode)}
            className={`border-black ${
              selectedMode === mode
                ? 'bg-black text-white'
                : 'text-black hover:bg-gray-100'
            } mb-2`}
          >
            {mode === 'audio_speech'
              ? 'TTS (Text To Speech)'
              : mode.charAt(0).toUpperCase() +
                mode.slice(1).replace('_', ' ')}
          </Button>
        ))}
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <Table className="min-w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Model</TableHead>
              <TableHead className="w-24">
                <ProviderSelect
                  models={aiModels[selectedMode] || []}
                  selectedProviders={selectedProviders}
                  setSelectedProviders={setSelectedProviders}
                />
              </TableHead>
              <TableHead
                onClick={() => requestSort('max_input_tokens')}
                className="cursor-pointer w-20 text-right"
              >
                Input<br />Length{' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('max_output_tokens')}
                className="cursor-pointer w-20 text-right"
              >
                Output<br />Length{' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              {/* Reduced widths for Input Price, Output Price, and Supports Vision */}
              <TableHead
                onClick={() => requestSort('input_cost_per_token')}
                className="cursor-pointer w-16 px-1 text-right"
              >
                Input Price<br />
                (per 1M tokens){' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('output_cost_per_token')}
                className="cursor-pointer w-16 px-1 text-right"
              >
                Output Price<br />
                (per 1M tokens){' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead
                onClick={() => requestSort('supports_vision')}
                className="cursor-pointer w-12 px-1"
              >
                Supports<br />Vision{' '}
                <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedModels.map((model) => (
              <TableRow key={model.name}>
                <TableCell className="w-32 font-medium whitespace-normal break-words">
                  {model.name}
                </TableCell>
                <TableCell className="w-24 overflow-hidden">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <img
                      src={model.logo}
                      alt={`${model.provider} logo`}
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span className="whitespace-normal break-words">
                      {getDisplayName(model.provider)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="w-20 text-right font-mono">
                  {model.sample_spec.max_input_tokens ?? 'N/A'}
                </TableCell>
                <TableCell className="w-20 text-right font-mono">
                  {model.sample_spec.max_output_tokens ?? 'N/A'}
                </TableCell>
                {/* Adjusted widths and padding for data cells */}
                <TableCell className="w-16 px-1 text-right font-mono">
                  {model.sample_spec.input_cost_per_token
                    ? (
                        Number(model.sample_spec.input_cost_per_token) *
                        1e6
                      ).toFixed(2)
                    : 'N/A'}
                </TableCell>
                <TableCell className="w-16 px-1 text-right font-mono">
                  {model.sample_spec.output_cost_per_token
                    ? (
                        Number(model.sample_spec.output_cost_per_token) *
                        1e6
                      ).toFixed(2)
                    : 'N/A'}
                </TableCell>
                <TableCell className="w-12 px-1 text-center">
                  {model.sample_spec.supports_vision ? '✅' : '❌'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ModelTableForComparison;