const fs = require('fs');
const path = require('path');

// Read the JSON data
const rawData = fs.readFileSync(path.join(__dirname, 'model_prices_and_context_window.json'));
const modelsData = JSON.parse(rawData);

// Define the structure of the aiModels object
const aiModels = {
  chat: [],
  embedding: [],
  image_generation: [],
  completion: [],
  audio_transcription: [],
  audio_speech: []
};

// Define the logo mapping
const providerLogos = {
  openai: 'OpenAI',
  azure: 'Azure',
  azure_ai: 'Azure',
  anthropic: 'Anthropic',
  palm: 'Google',
  'vertex_ai-chat-models': 'Google',
  'vertex_ai-code-chat-models': 'Google',
  'vertex_ai-language-models': 'Google',
  'vertex_ai-anthropic_models': 'Google',
  'vertex_ai-llama_models': 'Google',
  'vertex_ai-mistral_models': 'Google',
  'vertex_ai-ai21_models': 'Google',
  gemini: 'Google',
  cohere_chat: 'Cohere',
  cohere: 'Cohere',
  replicate: 'Replicate',
  bedrock: 'Amazon',
  sagemaker: 'Amazon',
  mistral: 'Mistral',
  codestral: 'Mistral',
  ollama: 'Ollama',
  deepinfra: 'DeepInfra',
  perplexity: 'Perplexity',
  fireworks_ai: 'Fireworks AI',
  anyscale: 'Anyscale',
  cloudflare: 'Cloudflare',
  databricks: 'Databricks'
};

// Function to map the mode to the correct category
const mapModeToCategory = (mode) => {
  switch (mode) {
    case 'chat':
      return 'chat';
    case 'embedding':
      return 'embedding';
    case 'image_generation':
      return 'image_generation';
    case 'completion':
      return 'completion';
    case 'audio_transcription':
      return 'audio_transcription';
    case 'audio_speech':
      return 'audio_speech';
    default:
      return null;
  }
};

// Transform the models data
Object.keys(modelsData).forEach((modelName) => {
  const model = modelsData[modelName];
  const category = mapModeToCategory(model.mode);
  const provider = model.litellm_provider;
  const logo = providerLogos[provider] ? `/logos/${providerLogos[provider].toLowerCase()}.svg` : '/placeholder.svg?height=30&width=30';

  if (category) {
    aiModels[category].push({
      name: modelName,
      provider: provider,
      logo: logo,
      sample_spec: {
        max_tokens: model.max_tokens,
        max_input_tokens: model.max_input_tokens,
        max_output_tokens: model.max_output_tokens,
        input_cost_per_token: model.input_cost_per_token,
        output_cost_per_token: model.output_cost_per_token,
        litellm_provider: provider,
        mode: model.mode,
        supports_function_calling: model.supports_function_calling || false,
        supports_parallel_function_calling: model.supports_parallel_function_calling || false,
        supports_vision: model.supports_vision || false,
        source: model.source
      }
    });
  }
});

// Write the transformed data to a new TypeScript file
const outputPath = path.join(__dirname, 'app/utils/aiModels.ts');
const outputData = `import { AIModels } from '../types';

export const aiModels: AIModels = ${JSON.stringify(aiModels, null, 2)};
`;

fs.writeFileSync(outputPath, outputData);

console.log('Transformed data has been written to aiModels.ts');