export const famousProviders = ['OpenAI', 'Anthropic', 'Google', 'Cohere', 'Mistral', 'Perplexity'];


export const providerMapping = {
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

  export const mapProvider = (provider: string): string => {
    // @ts-ignore
    const mappedProvider = providerMapping[provider.toLowerCase()] || provider;
    return famousProviders.includes(mappedProvider) ? mappedProvider : 'Other';
  };
  
  export const isOtherProvider = (provider: string): boolean => {
    return !famousProviders.includes(mapProvider(provider));
  };
  
  export const getDisplayName = (provider: string): string => {
    // @ts-ignore
    const mapped = providerMapping[provider.toLowerCase()];
    if (mapped) {
      return mapped;
    }
    // If not in the mapping, capitalize the first letter of each word
    return provider.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };