import { AIModels } from '../types'

export const aiModels: AIModels = {
    chat: [
    {
    name: 'GPT-3.5-turbo',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: 4096,
    max_input_tokens: 4096,
    max_output_tokens: 4096,
    input_cost_per_token: 0.0015,
    output_cost_per_token: 0.002,
    litellm_provider: "openai",
    mode: "chat",
    supports_function_calling: true,
    supports_parallel_function_calling: true,
    supports_vision: false
    }
    },
    {
    name: 'GPT-4',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: 8192,
    max_input_tokens: 8192,
    max_output_tokens: 8192,
    input_cost_per_token: 0.03,
    output_cost_per_token: 0.06,
    litellm_provider: "openai",
    mode: "chat",
    supports_function_calling: true,
    supports_parallel_function_calling: true,
    supports_vision: true
    }
    },
    {
    name: 'Claude 2',
    provider: 'Anthropic',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: 100000,
    max_input_tokens: 100000,
    max_output_tokens: 100000,
    input_cost_per_token: 0.01102,
    output_cost_per_token: 0.03268,
    litellm_provider: "anthropic",
    mode: "chat",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ],
    embedding: [
    {
    name: 'text-embedding-ada-002',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: 8191,
    max_input_tokens: 8191,
    max_output_tokens: 8191,
    input_cost_per_token: 0.0001,
    output_cost_per_token: 0.0001,
    litellm_provider: "openai",
    mode: "embedding",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ],
    image_generation: [
    {
    name: 'DALL-E 3',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: null,
    max_input_tokens: null,
    max_output_tokens: null,
    input_cost_per_token: null,
    output_cost_per_token: null,
    litellm_provider: "openai",
    mode: "image_generation",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ],
    completion: [
    {
    name: 'text-davinci-003',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: 4097,
    max_input_tokens: 4097,
    max_output_tokens: 4097,
    input_cost_per_token: 0.02,
    output_cost_per_token: 0.02,
    litellm_provider: "openai",
    mode: "completion",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ],
    audio_transcription: [
    {
    name: 'Whisper',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: null,
    max_input_tokens: null,
    max_output_tokens: null,
    input_cost_per_token: null,
    output_cost_per_token: null,
    litellm_provider: "openai",
    mode: "audio_transcription",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ],
    audio_speech: [
    {
    name: 'TTS-1',
    provider: 'OpenAI',
    logo: '/placeholder.svg?height=30&width=30',
    sample_spec: {
    max_tokens: null,
    max_input_tokens: null,
    max_output_tokens: null,
    input_cost_per_token: null,
    output_cost_per_token: null,
    litellm_provider: "openai",
    mode: "audio_speech",
    supports_function_calling: false,
    supports_parallel_function_calling: false,
    supports_vision: false
    }
    },
    ]
    }

export const parameterNames: { [key: string]: string } = {
    max_tokens: "Max Tokens",
    max_input_tokens: "Max Input Tokens",
    max_output_tokens: "Max Output Tokens",
    input_cost_per_token: "Input Cost per Token",
    output_cost_per_token: "Output Cost per Token",
    litellm_provider: "LiteLLM Provider",
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
    }
    