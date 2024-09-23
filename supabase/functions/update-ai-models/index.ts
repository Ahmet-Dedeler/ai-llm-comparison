// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

import * as mod from "@std/http";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? ''
)
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
const mapModeToCategory = (mode: string) => {
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

const formatNumber = (num: number | undefined) => {
  return num !== undefined ? num.toString() : null;
};

serve(async (req) => {
  try {
    // Fetch the JSON data from GitHub
    const response = await fetch('https://raw.githubusercontent.com/BerriAI/litellm/refs/heads/main/model_prices_and_context_window.json');
    const modelsData = await response.json();

    // Define the structure of the aiModels object
    const aiModels: { [key: string]: any[] } = {
      chat: [],
      embedding: [],
      image_generation: [],
      completion: [],
      audio_transcription: [],
      audio_speech: []
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

    // Convert aiModels to a string
    const aiModelsString = JSON.stringify(aiModels, null, 2);

    // Upload the transformed data to Supabase Storage
    const { data, error } = await supabase
      .storage
      .from('ai-models')
      .upload('aiModels.json', aiModelsString, {
        contentType: 'application/json',
        upsert: true
      });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ message: "AI models updated successfully" }),
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/update-ai-models' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
