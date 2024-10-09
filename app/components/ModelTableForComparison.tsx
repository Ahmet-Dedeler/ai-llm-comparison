import React, { useState, useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AIModelMode } from '../types';
import { aiModels } from '../utils/aiModels';
import { ArrowUpDown } from 'lucide-react';
import ProviderSelect from './ProviderSelect';
import { famousProviders, mapProvider, isOtherProvider, getDisplayName } from '../utils/providerMapping';

interface ModelTableForComparisonProps {
  selectedMode: AIModelMode;
  setSelectedMode: (mode: AIModelMode) => void;
  searchTerm: string;
}

const ModelTableForComparison: React.FC<ModelTableForComparisonProps> = ({
  selectedMode,
  setSelectedMode,
  searchTerm
}) => {
  const [sortConfig, setSortConfig] = useState<{ key: string | null, direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const filteredModels = useMemo(() => {
    return aiModels[selectedMode]?.filter(model => {
      const mappedProvider = mapProvider(model.provider);
      const isOther = isOtherProvider(model.provider);
      return model.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedProviders.length === 0 || 
         selectedProviders.includes(mappedProvider) ||
         (isOther && selectedProviders.includes('Other')));
    }) || [];
  }, [selectedMode, searchTerm, selectedProviders]);
  
  

  const sortedModels = useMemo(() => {
    let sortableModels = [...filteredModels];
    if (sortConfig.key !== null) {
      sortableModels.sort((a, b) => {
        if (sortConfig.key === 'supports_vision') {
          if (a.sample_spec.supports_vision === b.sample_spec.supports_vision) {
            return 0;
          }
          return (a.sample_spec.supports_vision ? 1 : -1) * (sortConfig.direction === 'ascending' ? 1 : -1);
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

  // @ts-ignore
  return (
    <div className="mb-8">
      <div className="flex justify-start space-x-2 mb-6 overflow-x-auto">
        {Object.keys(aiModels).map((mode) => (
          <Button
            key={mode}
            variant={selectedMode === mode ? "default" : "outline"}
            onClick={() => setSelectedMode(mode as AIModelMode)}
            className={`border-black ${selectedMode === mode ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
          >
            {mode === 'audio_speech' ? 'TTS (Text To Speech)' : mode.charAt(0).toUpperCase() + mode.slice(1).replace('_', ' ')}
          </Button>
        ))}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Model</TableHead>
            <TableHead>
              <ProviderSelect
                models={aiModels[selectedMode] || []}
                selectedProviders={selectedProviders}
                setSelectedProviders={setSelectedProviders}
              />
            </TableHead>
            <TableHead onClick={() => requestSort('max_input_tokens')} className="cursor-pointer">
              Input Length <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
            </TableHead>
            <TableHead onClick={() => requestSort('max_output_tokens')} className="cursor-pointer">
              Output Length <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
            </TableHead>
            <TableHead onClick={() => requestSort('input_cost_per_token')} className="cursor-pointer">
              Input Price (per 1M tokens) <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
            </TableHead>
            <TableHead onClick={() => requestSort('output_cost_per_token')} className="cursor-pointer">
              Output Price (per 1M tokens) <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
            </TableHead>
            <TableHead onClick={() => requestSort('supports_vision')} className="cursor-pointer">
              Supports Vision <ArrowUpDown className="inline-block ml-1 h-4 w-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedModels.map((model) => (
            <TableRow key={model.name}>
              <TableCell className="font-medium">{model.name}</TableCell>
              <TableCell>
  <div className="flex items-center space-x-2">
    <img src={model.logo} alt={`${model.provider} logo`} className="w-6 h-6" />
    <span>{getDisplayName(model.provider)}</span>
  </div>
</TableCell>

              <TableCell>
                {model.sample_spec.max_input_tokens !== null && model.sample_spec.max_input_tokens !== undefined
                  ? model.sample_spec.max_input_tokens
                  : 'N/A'}
              </TableCell>
              <TableCell>
                {model.sample_spec.max_output_tokens !== null && model.sample_spec.max_output_tokens !== undefined
                  ? model.sample_spec.max_output_tokens
                  : 'N/A'}
              </TableCell>
              <TableCell>
                {/* @ts-ignore */}
                {model.sample_spec.input_cost_per_token !== null && model.sample_spec.input_cost_per_token !== undefined
                  ? (Number(model.sample_spec.input_cost_per_token) * 1000000).toFixed(2)
                  : 'N/A'}
              </TableCell>
              <TableCell>
                {model.sample_spec.output_cost_per_token !== null && model.sample_spec.output_cost_per_token !== undefined
                  ? (Number(model.sample_spec.output_cost_per_token) * 1000000).toFixed(2)
                  : 'N/A'}
              </TableCell>
              <TableCell>
                {model.sample_spec.supports_vision ? '✅' : '❌'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ModelTableForComparison;
