const fs = require('fs');
const path = require('path');
const fromExponential = require('from-exponential');

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
  'text-completion-openai': 'OpenAI',
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
  'vertex_ai-vision-models': 'Google',
  'vertex_ai-code-text-models': 'Google',
  'vertex_ai-image-models': 'Google',
  'vertex_ai-audio-models': 'Google',
  'vertex_ai-embedding-models': 'Google',
  'vertex_ai-text-models': 'Google',
  deepseek: 'DeepSeek',
  gemini: 'Google',
  cohere_chat: 'Cohere',
  cohere: 'Cohere',
  replicate: 'Replicate',
  bedrock: 'Amazon',
  friendliai: 'FriendliAI',
  openrouter: 'OpenRouter',
  sagemaker: 'Amazon',
  mistral: 'Mistral',
  'text-completion-codestral': 'Mistral',
  codestral: 'Mistral',
  groq: 'Groq',
  cerebras: 'Cerebras',
  ollama: 'Ollama',
  deepinfra: 'DeepInfra',
  perplexity: 'Perplexity',
  fireworks_ai: 'Fireworks AI',
  anyscale: 'Anyscale',
  cloudflare: 'Cloudflare',
  databricks: 'Databricks',
  ai21: 'AI21',
  aleph_alpha: 'Aleph Alpha',
  nlp_cloud: 'NLP Cloud',
  voyage: 'Voyage'
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

// Function to format numbers to fixed-point notation using from-exponential
const formatNumber = (num) => {
  return num !== undefined ? fromExponential(num) : null;
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
        max_tokens: model.max_tokens !== undefined ? model.max_tokens : null,
        max_input_tokens: model.max_input_tokens !== undefined ? model.max_input_tokens : null,
        max_output_tokens: model.max_output_tokens !== undefined ? model.max_output_tokens : null,
        input_cost_per_token: formatNumber(model.input_cost_per_token),
        output_cost_per_token: formatNumber(model.output_cost_per_token),
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

// Define the parameterNames object
const parameterNames = `export const parameterNames: { [key: string]: string } = {
  max_tokens: "Max Tokens",
  max_input_tokens: "Max Input Tokens",
  max_output_tokens: "Max Output Tokens",
  input_cost_per_token: "Input Cost per Token",
  output_cost_per_token: "Output Cost per Token",
  litellm_provider: "Provider",
  mode: "Mode",
  supports_function_calling: "Supports Function Calling",
  supports_parallel_function_calling: "Supports Parallel Function Calling",
  supports_vision: "Supports Vision",
  supports_system_messages: "Supports System Messages",
  supports_tool_choice: "Supports Tool Choice",
  supports_response_schema: "Supports Response Schema",
  supports_assistant_prefill: "Supports Assistant Prefill",
  tool_use_system_prompt_tokens: "Tool Use System Prompt Tokens",
  input_cost_per_token_above_128k_tokens: "Input Cost per Token (>128k)",
  output_cost_per_token_above_128k_tokens: "Output Cost per Token (>128k)",
  cache_creation_input_token_cost: "Cache Creation Input Token Cost",
  cache_read_input_token_cost: "Cache Read Input Token Cost",
  output_vector_size: "Output Vector Size",
  input_cost_per_pixel: "Input Cost per Pixel",
  output_cost_per_pixel: "Output Cost per Pixel",
  cost_per_image: "Cost per Image",
  input_cost_per_second: "Input Cost per Second",
  output_cost_per_second: "Output Cost per Second",
  input_cost_per_character: "Input Cost per Character",
  output_cost_per_character: "Output Cost per Character",
  input_cost_per_image: "Input Cost per Image",
  input_cost_per_video_per_second: "Input Cost per Video Second",
  input_cost_per_request: "Input Cost per Request",
  input_dbu_cost_per_token: "Input DBU Cost per Token",
  output_dbu_cost_per_token: "Output DBU Cost per Token"
};`;

// Define the import statement
const importStatement = `import { AIModels } from '../types';`;

// Write the transformed data to a new TypeScript file
const outputPath = path.join(__dirname, 'app/utils/aiModels.ts');
const outputData = `${importStatement}

${parameterNames}

export const aiModels: AIModels = ${JSON.stringify(aiModels, null, 2)};
`;

fs.writeFileSync(outputPath, outputData);

console.log('Transformed data has been written to aiModels.ts');