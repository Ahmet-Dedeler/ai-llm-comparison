import { AIModel } from '../types';

export const calculateCost = (model: AIModel, input: number, output: number, calls: number, inputType: string, outputType: string) => {
  const convertToTokens = (amount: number, type: string): number => {
    switch (type) {
      case 'words':
        return amount * 1.30;
      case 'characters':
        return amount * 0.25;
      default:
        return amount;
    }
  };

  const inputTokens = convertToTokens(input, inputType);
  const outputTokens = convertToTokens(output, outputType);

  // @ts-ignore
  const inputCost = (inputTokens * model.sample_spec.input_cost_per_token * calls || 0);
  // @ts-ignore
  const outputCost = (outputTokens * model.sample_spec.output_cost_per_token * calls || 0);
  // @ts-ignore
  const totalCost = (inputCost + outputCost);

  return {
    inputCost,
    outputCost,
    totalCost
  };
};