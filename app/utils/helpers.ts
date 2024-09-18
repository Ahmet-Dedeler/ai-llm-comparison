import { AIModel } from '../types'

export const calculateCost = (model: AIModel, input: number, output: number, calls: number): string => {
  const inputCost = (input / 1000000) * (model.sample_spec.input_cost_per_token || 0)
  const outputCost = (output / 1000000) * (model.sample_spec.output_cost_per_token || 0)
  return ((inputCost + outputCost) * calls).toFixed(4)
}

export const convertToTokens = (amount: number, type: string): number => {
  switch (type) {
    case 'words':
      return amount * 0.75
    case 'characters':
      return amount * 0.25
    default:
      return amount
  }
}
