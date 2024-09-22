import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PricingCalculatorProps {
  inputAmount: number;
  setInputAmount: (amount: number) => void;
  outputAmount: number;
  setOutputAmount: (amount: number) => void;
  apiCalls: number;
  setApiCalls: (calls: number) => void;
  inputType: string;
  setInputType: (type: string) => void;
  outputType: string;
  setOutputType: (type: string) => void;
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  inputAmount,
  setInputAmount,
  outputAmount,
  setOutputAmount,
  apiCalls,
  setApiCalls,
  inputType,
  setInputType,
  outputType,
  setOutputType
}) => {
  const getLabel = (type: string) => {
    switch (type) {
      case 'words':
        return 'Words';
      case 'characters':
        return 'Characters';
      default:
        return 'Tokens';
    }
  };

  const handleTypeChange = (value: string) => {
    setInputType(value);
    setOutputType(value);
  };

  return (
    <div className="mb-8 p-6 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <Label htmlFor="input-amount">Input {getLabel(inputType)}</Label>
          <Input
            id="input-amount"
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(Number(e.target.value))}
            className="mt-1 border-black"
          />
        </div>
        <div>
          <Label htmlFor="output-amount">Output {getLabel(outputType)}</Label>
          <Input
            id="output-amount"
            type="number"
            value={outputAmount}
            onChange={(e) => setOutputAmount(Number(e.target.value))}
            className="mt-1 border-black"
          />
        </div>
        <div>
          <Label htmlFor="api-calls">Number of API Calls</Label>
          <Input
            id="api-calls"
            type="number"
            value={apiCalls}
            onChange={(e) => setApiCalls(Number(e.target.value))}
            className="mt-1 border-black"
          />
        </div>
      </div>
      <div>
        <Label>Calculate by</Label>
        <RadioGroup value={inputType} onValueChange={handleTypeChange} className="flex space-x-4 mt-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tokens" id="tokens" />
            <Label htmlFor="tokens">Tokens</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="words" id="words" />
            <Label htmlFor="words">Words</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="characters" id="characters" />
            <Label htmlFor="characters">Characters</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default PricingCalculator;