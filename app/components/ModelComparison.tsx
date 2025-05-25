import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { AIModelMode } from '../types';
import { useDebounce } from '../utils/hooks';

// Lazy load components for better performance
const PricingCalculator = lazy(() => import('./PricingCalculator'));
const VersusComparison = lazy(() => import('./VersusComparison'));
const OptimizedModelTable = lazy(() => import('./OptimizedModelTable'));

interface ModelComparisonProps {
  showPricingCalculator: boolean;
  setShowPricingCalculator: (show: boolean) => void;
  showVersusComparison: boolean;
  setShowVersusComparison: (show: boolean) => void;
}

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const ModelComparison: React.FC<ModelComparisonProps> = ({
  showPricingCalculator,
  setShowPricingCalculator,
  showVersusComparison,
  setShowVersusComparison
}) => {
  const [selectedMode, setSelectedMode] = useState<AIModelMode>('chat');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [inputType, setInputType] = useState<string>('tokens');
  const [outputType, setOutputType] = useState<string>('tokens');
  const [inputAmount, setInputAmount] = useState<number>(200);
  const [outputAmount, setOutputAmount] = useState<number>(1000);
  const [apiCalls, setApiCalls] = useState<number>(100);

  // Debounce search term to prevent excessive filtering
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoized handlers to prevent unnecessary re-renders
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleModeChange = useCallback((mode: AIModelMode) => {
    setSelectedMode(mode);
  }, []);

  // Memoized component props to prevent unnecessary re-renders
  const tableProps = useMemo(() => ({
    selectedMode,
    setSelectedMode: handleModeChange,
    searchTerm: debouncedSearchTerm,
    showPricingCalculator,
    inputAmount,
    outputAmount,
    apiCalls,
    inputType,
    outputType,
  }), [
    selectedMode,
    handleModeChange,
    debouncedSearchTerm,
    showPricingCalculator,
    inputAmount,
    outputAmount,
    apiCalls,
    inputType,
    outputType,
  ]);

  const calculatorProps = useMemo(() => ({
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount,
    apiCalls,
    setApiCalls,
    inputType,
    setInputType,
    outputType,
    setOutputType,
  }), [
    inputAmount,
    setInputAmount,
    outputAmount,
    setOutputAmount,
    apiCalls,
    setApiCalls,
    inputType,
    setInputType,
    outputType,
    setOutputType,
  ]);

  const versusProps = useMemo(() => ({
    selectedMode,
    setSelectedMode: handleModeChange,
    searchTerm: debouncedSearchTerm,
  }), [selectedMode, handleModeChange, debouncedSearchTerm]);

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
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchTerm !== debouncedSearchTerm && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
            </div>
          )}
        </div>
      </div>

      {/* Add a responsive container with better error boundaries */}
      <div className="overflow-x-auto">
        <Suspense fallback={<LoadingSpinner />}>
        {showPricingCalculator && (
            <PricingCalculator {...calculatorProps} />
          )}
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
        {showVersusComparison ? (
            <VersusComparison {...versusProps} />
        ) : (
            <OptimizedModelTable {...tableProps} />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(ModelComparison);