import { AIModels } from '../types';

export const parameterNames: { [key: string]: string } = {
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
    };

export const aiModels: AIModels = {
  "chat": [
    {
      "name": "gpt-4",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4.1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.1-2025-04-14",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.1-mini",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000016",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.1-mini-2025-04-14",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000016",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.1-nano",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.1-nano-2025-04-14",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "watsonx/ibm/granite-3-8b-instruct",
      "provider": "watsonx",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.0002",
        "output_cost_per_token": "0.0002",
        "litellm_provider": "watsonx",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-search-preview-2025-03-11",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-search-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.5-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000075",
        "output_cost_per_token": "0.00015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4.5-preview-2025-02-27",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000075",
        "output_cost_per_token": "0.00015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-audio-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-audio-preview-2024-12-17",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-audio-preview-2024-10-01",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-audio-preview-2025-06-03",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-audio-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-audio-preview-2024-12-17",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-mini-search-preview-2025-03-11",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-mini-search-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-mini-2024-07-18",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "o1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "o1-mini",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "computer-use-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "o3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o3-2025-04-16",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o3-mini",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "o3-mini-2025-01-31",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "o4-mini",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o4-mini-2025-04-16",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o1-mini-2024-09-12",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o1-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o1-preview-2024-09-12",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "o1-2024-12-17",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "chatgpt-4o-latest",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-2024-05-13",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-2024-08-06",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-2024-11-20",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4o-realtime-preview-2024-10-01",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-realtime-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-realtime-preview-2024-12-17",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-realtime-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-realtime-preview-2024-12-17",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-turbo-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-0314",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-32k",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00006",
        "output_cost_per_token": "0.00012",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-32k-0314",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00006",
        "output_cost_per_token": "0.00012",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-32k-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00006",
        "output_cost_per_token": "0.00012",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-turbo",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4-turbo-2024-04-09",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4-1106-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-0125-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4-vision-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-4-1106-vision-preview",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "gpt-3.5-turbo",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-0301",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-1106",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16385,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-0125",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16385,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-16k",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16385,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-16k-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16385,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:gpt-3.5-turbo",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:gpt-3.5-turbo-0125",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:gpt-3.5-turbo-1106",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:gpt-3.5-turbo-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:gpt-4-0613",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "OpenAI needs to add pricing for this ft model, will be updated when added by OpenAI. Defaulting to base model pricing"
      }
    },
    {
      "name": "ft:gpt-4o-2024-08-06",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000375",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "ft:gpt-4o-2024-11-20",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000375",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "ft:gpt-4o-mini-2024-07-18",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000012",
        "litellm_provider": "openai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/computer-use-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-audio-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-mini-audio-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4.1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4.1-2025-04-14",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4.1-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000016",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4.1-mini-2025-04-14",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000016",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4.1-nano",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4.1-nano-2025-04-14",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 1047576,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o3-2025-04-16",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00004",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o4-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-mini-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/gpt-4o-mini-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000066",
        "output_cost_per_token": "0.00000264",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/gpt-4o-mini-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000066",
        "output_cost_per_token": "0.00000264",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00002",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/gpt-4o-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000055",
        "output_cost_per_token": "0.000022",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/gpt-4o-realtime-preview-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000055",
        "output_cost_per_token": "0.000022",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-realtime-preview-2024-10-01",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00002",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/gpt-4o-realtime-preview-2024-10-01",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000055",
        "output_cost_per_token": "0.000022",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/gpt-4o-realtime-preview-2024-10-01",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000055",
        "output_cost_per_token": "0.000022",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o4-mini-2025-04-16",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o3-mini-2025-01-31",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/o3-mini-2025-01-31",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.00000121",
        "output_cost_per_token": "0.00000484",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/o3-mini-2025-01-31",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.00000121",
        "output_cost_per_token": "0.00000484",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o3-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o1-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.00000121",
        "output_cost_per_token": "0.00000484",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o1-mini-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/o1-mini-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.00000121",
        "output_cost_per_token": "0.00000484",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/o1-mini-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.00000121",
        "output_cost_per_token": "0.00000484",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o1-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/us/o1-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000165",
        "output_cost_per_token": "0.000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/eu/o1-2024-12-17",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.0000165",
        "output_cost_per_token": "0.000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/o1-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/o1-preview-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/us/o1-preview-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000165",
        "output_cost_per_token": "0.000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/eu/o1-preview-2024-09-12",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000165",
        "output_cost_per_token": "0.000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4.5-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000075",
        "output_cost_per_token": "0.00015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/global/gpt-4o-2024-11-20",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-2024-08-06",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/global/gpt-4o-2024-08-06",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-2024-11-20",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000275",
        "output_cost_per_token": "0.000011",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/us/gpt-4o-2024-11-20",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000275",
        "output_cost_per_token": "0.000011",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/eu/gpt-4o-2024-11-20",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000275",
        "output_cost_per_token": "0.000011",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-2024-05-13",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/global-standard/gpt-4o-2024-08-06",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/us/gpt-4o-2024-08-06",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000275",
        "output_cost_per_token": "0.000011",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/eu/gpt-4o-2024-08-06",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000275",
        "output_cost_per_token": "0.000011",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/global-standard/gpt-4o-2024-11-20",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/global-standard/gpt-4o-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-mini",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000000165",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4o-mini-2024-07-18",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000000165",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/us/gpt-4o-mini-2024-07-18",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000000165",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/eu/gpt-4o-mini-2024-07-18",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000000165",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4-turbo-2024-04-09",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-4-0125-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-1106-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-0613",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-32k-0613",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00006",
        "output_cost_per_token": "0.00012",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-32k",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00006",
        "output_cost_per_token": "0.00012",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-turbo",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4-turbo-vision-preview",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure/gpt-35-turbo-16k-0613",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-1106",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-0613",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-0301",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-0125",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-3.5-turbo-0125",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-16k",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16385,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-3.5-turbo",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4097,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/mistral-large-latest",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/mistral-large-2402",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/command-r-plus",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "azure",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/deepseek-r1",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000135",
        "output_cost_per_token": "0.0000054",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://techcommunity.microsoft.com/blog/machinelearningblog/deepseek-r1-improved-performance-higher-limits-and-transparent-pricing/4386367"
      }
    },
    {
      "name": "azure_ai/deepseek-v3",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000114",
        "output_cost_per_token": "0.00000456",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://techcommunity.microsoft.com/blog/machinelearningblog/announcing-deepseek-v3-on-azure-ai-foundry-and-github/4390438"
      }
    },
    {
      "name": "azure_ai/deepseek-v3-0324",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000114",
        "output_cost_per_token": "0.00000456",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://techcommunity.microsoft.com/blog/machinelearningblog/announcing-deepseek-v3-on-azure-ai-foundry-and-github/4390438"
      }
    },
    {
      "name": "azure_ai/jamba-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 70000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/mistral-nemo",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 131072,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/000-000.mistral-nemo-12b-2407?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/mistral-medium-2505",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 131072,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/mistral-large",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000004",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/mistral-small",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/mistral-small-2503",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "azure_ai/mistral-large-2407",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/000-000.mistral-ai-large-2407-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/mistral-large-latest",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/000-000.mistral-ai-large-2407-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/ministral-3b",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000004",
        "output_cost_per_token": "0.00000004",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/000-000.ministral-3b-2410-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/Llama-3.2-11B-Vision-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000037",
        "output_cost_per_token": "0.00000037",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/metagenai.meta-llama-3-2-11b-vision-instruct-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/Llama-3.3-70B-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000071",
        "output_cost_per_token": "0.00000071",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/metagenai.llama-3-3-70b-instruct-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/Llama-4-Scout-17B-16E-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 10000000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.00000078",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://azure.microsoft.com/en-us/blog/introducing-the-llama-4-herd-in-azure-ai-foundry-and-azure-databricks/"
      }
    },
    {
      "name": "azure_ai/Llama-4-Maverick-17B-128E-Instruct-FP8",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 1000000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000141",
        "output_cost_per_token": "0.00000035",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://azure.microsoft.com/en-us/blog/introducing-the-llama-4-herd-in-azure-ai-foundry-and-azure-databricks/"
      }
    },
    {
      "name": "azure_ai/Llama-3.2-90B-Vision-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000204",
        "output_cost_per_token": "0.00000204",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://azuremarketplace.microsoft.com/en/marketplace/apps/metagenai.meta-llama-3-2-90b-vision-instruct-offer?tab=Overview"
      }
    },
    {
      "name": "azure_ai/Meta-Llama-3-70B-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 8192,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.00000037",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/Meta-Llama-3.1-8B-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.00000061",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/metagenai.meta-llama-3-1-8b-instruct-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/Meta-Llama-3.1-70B-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000268",
        "output_cost_per_token": "0.00000354",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/metagenai.meta-llama-3-1-70b-instruct-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/Meta-Llama-3.1-405B-Instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000533",
        "output_cost_per_token": "0.000016",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/metagenai.meta-llama-3-1-405b-instruct-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/Phi-4-mini-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 131072,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://techcommunity.microsoft.com/blog/Azure-AI-Services-blog/announcing-new-phi-pricing-empowering-your-business-with-small-language-models/4395112"
      }
    },
    {
      "name": "azure_ai/Phi-4-multimodal-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 131072,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000008",
        "output_cost_per_token": "0.00000032",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://techcommunity.microsoft.com/blog/Azure-AI-Services-blog/announcing-new-phi-pricing-empowering-your-business-with-small-language-models/4395112"
      }
    },
    {
      "name": "azure_ai/Phi-4",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://techcommunity.microsoft.com/blog/machinelearningblog/affordable-innovation-unveiling-the-pricing-of-phi-3-slms-on-models-as-a-service/4156495"
      }
    },
    {
      "name": "azure_ai/Phi-3.5-mini-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000052",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3.5-vision-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000052",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3.5-MoE-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000016",
        "output_cost_per_token": "0.00000064",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-mini-4k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000052",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-mini-128k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000052",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-small-8k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-small-128k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-medium-4k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000017",
        "output_cost_per_token": "0.00000068",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "azure_ai/Phi-3-medium-128k-instruct",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000017",
        "output_cost_per_token": "0.00000068",
        "litellm_provider": "azure_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azure.microsoft.com/en-us/pricing/details/phi-3/"
      }
    },
    {
      "name": "claude-instant-1",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000163",
        "output_cost_per_token": "0.00000551",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-tiny",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-small",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-small-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-medium",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000027",
        "output_cost_per_token": "0.0000081",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-medium-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 131072,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-medium-2505",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 131072,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-medium-2312",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000027",
        "output_cost_per_token": "0.0000081",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-large-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-large-2411",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-large-2402",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000004",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/mistral-large-2407",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000009",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/pixtral-large-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "mistral/pixtral-large-2411",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "mistral/pixtral-12b-2409",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "mistral/open-mistral-7b",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/open-mixtral-8x7b",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/open-mixtral-8x22b",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 65336,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/codestral-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/codestral-2405",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral/open-mistral-nemo",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/technology/"
      }
    },
    {
      "name": "mistral/open-mistral-nemo-2407",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/technology/"
      }
    },
    {
      "name": "mistral/open-codestral-mamba",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/technology/"
      }
    },
    {
      "name": "mistral/codestral-mamba-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/technology/"
      }
    },
    {
      "name": "mistral/devstral-small-2505",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/news/devstral"
      }
    },
    {
      "name": "mistral/magistral-medium-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 40000,
        "max_input_tokens": 40000,
        "max_output_tokens": 40000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/news/magistral"
      }
    },
    {
      "name": "mistral/magistral-medium-2506",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 40000,
        "max_input_tokens": 40000,
        "max_output_tokens": 40000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/news/magistral"
      }
    },
    {
      "name": "mistral/magistral-small-latest",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 40000,
        "max_input_tokens": 40000,
        "max_output_tokens": 40000,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/pricing#api-pricing"
      }
    },
    {
      "name": "mistral/magistral-small-2506",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 40000,
        "max_input_tokens": 40000,
        "max_output_tokens": 40000,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "mistral",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://mistral.ai/pricing#api-pricing"
      }
    },
    {
      "name": "deepseek/deepseek-reasoner",
      "provider": "deepseek",
      "logo": "/logos/deepseek.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 65536,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000055",
        "output_cost_per_token": "0.00000219",
        "litellm_provider": "deepseek",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepseek/deepseek-chat",
      "provider": "deepseek",
      "logo": "/logos/deepseek.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 65536,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000027",
        "output_cost_per_token": "0.0000011",
        "litellm_provider": "deepseek",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "codestral/codestral-latest",
      "provider": "codestral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "codestral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.mistral.ai/capabilities/code_generation/"
      }
    },
    {
      "name": "codestral/codestral-2405",
      "provider": "codestral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "codestral",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.mistral.ai/capabilities/code_generation/"
      }
    },
    {
      "name": "xai/grok-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "xai/grok-2-vision-1212",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "xai/grok-2-vision-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "xai/grok-2-vision",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "xai/grok-3",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-fast-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000025",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-fast-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000025",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini-fast",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini-fast-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-3-mini-fast-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://x.ai/api#pricing"
      }
    },
    {
      "name": "xai/grok-vision-beta",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "xai/grok-2-1212",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "xai/grok-2",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "xai/grok-2-latest",
      "provider": "xai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "xai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepseek/deepseek-coder",
      "provider": "deepseek",
      "logo": "/logos/deepseek.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000014",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "deepseek",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/deepseek-r1-distill-llama-70b",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000075",
        "output_cost_per_token": "0.00000099",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.3-70b-versatile",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.3-70b-specdec",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000099",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-guard-3-8b",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama2-70b-4096",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000008",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama3-8b-8192",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000008",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.2-1b-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000004",
        "output_cost_per_token": "0.00000004",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.2-3b-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000006",
        "output_cost_per_token": "0.00000006",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.2-11b-text-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0.00000018",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.2-11b-vision-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0.00000018",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "groq/llama-3.2-90b-text-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.2-90b-vision-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "groq/llama3-70b-8192",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.1-8b-instant",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000008",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.1-70b-versatile",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama-3.1-405b-reasoning",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/meta-llama/llama-4-scout-17b-16e-instruct",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 131072,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000011",
        "output_cost_per_token": "0.00000034",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/meta-llama/llama-4-maverick-17b-128e-instruct",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 131072,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/mistral-saba-24b",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.00000079",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/mixtral-8x7b-32768",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.00000024",
        "output_cost_per_token": "0.00000024",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/gemma-7b-it",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000007",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/gemma2-9b-it",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama3-groq-70b-8192-tool-use-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000089",
        "output_cost_per_token": "0.00000089",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/llama3-groq-8b-8192-tool-use-preview",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000019",
        "output_cost_per_token": "0.00000019",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/qwen-qwq-32b",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000029",
        "output_cost_per_token": "0.00000039",
        "litellm_provider": "groq",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cerebras/llama3.1-8b",
      "provider": "cerebras",
      "logo": "/logos/cerebras.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "cerebras",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cerebras/llama3.1-70b",
      "provider": "cerebras",
      "logo": "/logos/cerebras.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "cerebras",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cerebras/llama-3.3-70b",
      "provider": "cerebras",
      "logo": "/logos/cerebras.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000085",
        "output_cost_per_token": "0.0000012",
        "litellm_provider": "cerebras",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cerebras/qwen-3-32b",
      "provider": "cerebras",
      "logo": "/logos/cerebras.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000008",
        "litellm_provider": "cerebras",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://inference-docs.cerebras.ai/support/pricing"
      }
    },
    {
      "name": "friendliai/meta-llama-3.1-8b-instruct",
      "provider": "friendliai",
      "logo": "/logos/friendliai.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "friendliai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "friendliai/meta-llama-3.1-70b-instruct",
      "provider": "friendliai",
      "logo": "/logos/friendliai.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "friendliai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "claude-instant-1.2",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000000163",
        "output_cost_per_token": "0.000000551",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "claude-2",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "claude-2.1",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 200000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "claude-3-haiku-20240307",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-5-haiku-20241022",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-5-haiku-latest",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-opus-latest",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-opus-20240229",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-sonnet-20240229",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-5-sonnet-latest",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-5-sonnet-20240620",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-opus-4-20250514",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-sonnet-4-20250514",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-4-opus-20250514",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-4-sonnet-20250514",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-7-sonnet-latest",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 200000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-7-sonnet-20250219",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 200000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "claude-3-5-sonnet-20241022",
      "provider": "anthropic",
      "logo": "/logos/anthropic.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "anthropic",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "chat-bison",
      "provider": "vertex_ai-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "chat-bison@001",
      "provider": "vertex_ai-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "chat-bison@002",
      "provider": "vertex_ai-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "chat-bison-32k",
      "provider": "vertex_ai-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "chat-bison-32k@002",
      "provider": "vertex_ai-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-bison",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison@latest",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison@001",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison@002",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison-32k",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "codechat-bison-32k@002",
      "provider": "vertex_ai-code-chat-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-chat-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "meta_llama/Llama-4-Scout-17B-16E-Instruct-FP8",
      "provider": "meta_llama",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 10000000,
        "max_output_tokens": 4028,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "meta_llama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://llama.developer.meta.com/docs/models"
      }
    },
    {
      "name": "meta_llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
      "provider": "meta_llama",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 1000000,
        "max_output_tokens": 4028,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "meta_llama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://llama.developer.meta.com/docs/models"
      }
    },
    {
      "name": "meta_llama/Llama-3.3-70B-Instruct",
      "provider": "meta_llama",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4028,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "meta_llama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://llama.developer.meta.com/docs/models"
      }
    },
    {
      "name": "meta_llama/Llama-3.3-8B-Instruct",
      "provider": "meta_llama",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4028,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "meta_llama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://llama.developer.meta.com/docs/models"
      }
    },
    {
      "name": "gemini-pro",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32760,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini-1.0-pro",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32760,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#google_models"
      }
    },
    {
      "name": "gemini-1.0-pro-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32760,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.0-ultra",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "As of Jun, 2024. There is no available doc on vertex ai pricing gemini-1.0-ultra-001. Using gemini-1.0-pro pricing. Got max_tokens info here: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.0-ultra-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "As of Jun, 2024. There is no available doc on vertex ai pricing gemini-1.0-ultra-001. Using gemini-1.0-pro pricing. Got max_tokens info here: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.0-pro-002",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32760,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-pro",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-pro-002",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-1.5-pro"
      }
    },
    {
      "name": "gemini-1.5-pro-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-pro-preview-0514",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000078125",
        "output_cost_per_token": "0.0000003125",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-pro-preview-0215",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000078125",
        "output_cost_per_token": "0.0000003125",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-pro-preview-0409",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000078125",
        "output_cost_per_token": "0.0000003125",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-flash",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-flash-exp-0827",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000004688",
        "output_cost_per_token": "0.0000000046875",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-flash-002",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-1.5-flash"
      }
    },
    {
      "name": "gemini-1.5-flash-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.5-flash-preview-0514",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000000046875",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-pro-experimental",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/gemini-experimental"
      }
    },
    {
      "name": "gemini-flash-experimental",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": true,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/gemini-experimental"
      }
    },
    {
      "name": "gemini-pro-vision",
      "provider": "vertex_ai-vision-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 16384,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-vision-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.0-pro-vision",
      "provider": "vertex_ai-vision-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 16384,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-vision-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-1.0-pro-vision-001",
      "provider": "vertex_ai-vision-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 16384,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "vertex_ai-vision-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "medlm-medium",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "medlm-large",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini-2.5-pro-exp-03-25",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini-2.0-pro-exp-02-05",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini-2.0-flash-exp",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini-2.0-flash-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini-2.0-flash-thinking-exp",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini-2.0-flash-thinking-exp-01-21",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini-2.5-pro",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro-exp-03-25",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini/gemini-2.5-flash",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000025",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.5-flash",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000025",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-flash-preview-tts",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-flash-preview-05-20",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000025",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-flash-preview-04-17",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-flash-lite-preview-06-17",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-lite"
      }
    },
    {
      "name": "gemini-2.5-flash-preview-05-20",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000025",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.5-flash-preview-04-17",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.5-flash-lite-preview-06-17",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.0-flash",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing#2_0flash"
      }
    },
    {
      "name": "gemini-2.0-flash-lite",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini-2.0-flash-lite-001",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini-2.5-pro-preview-06-05",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.5-pro-preview-05-06",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.5-pro-preview-03-25",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-flash-preview"
      }
    },
    {
      "name": "gemini-2.0-flash-preview-image-generation",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing#2_0flash"
      }
    },
    {
      "name": "gemini-2.5-pro-preview-tts",
      "provider": "vertex_ai-language-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "vertex_ai-language-models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro-preview"
      }
    },
    {
      "name": "gemini/gemini-2.0-pro-exp-02-05",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-preview-image-generation",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing#2_0flash"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing#2_0flash"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-lite",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.0-flash-lite"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-001",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing#2_0flash"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro-preview-tts",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro-preview-06-05",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro-preview-05-06",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro-preview"
      }
    },
    {
      "name": "gemini/gemini-2.5-pro-preview-03-25",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 65535,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65535,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-pro-preview"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-exp",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-lite-preview-02-05",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash-lite"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-thinking-exp",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini/gemini-2.0-flash-thinking-exp-01-21",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#gemini-2.0-flash"
      }
    },
    {
      "name": "gemini/gemma-3-27b-it",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 131072,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://aistudio.google.com"
      }
    },
    {
      "name": "gemini/learnlm-1.5-pro-experimental",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32767,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://aistudio.google.com"
      }
    },
    {
      "name": "vertex_ai/claude-3-sonnet",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-sonnet@20240229",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-5-sonnet",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-5-sonnet@20240620",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-5-sonnet-v2",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-5-sonnet-v2@20241022",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-7-sonnet@20250219",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-opus-4",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-opus-4@20250514",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-sonnet-4",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-sonnet-4@20250514",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-haiku",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-haiku@20240307",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-5-haiku",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/claude-3-5-haiku@20241022",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/claude-3-opus",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/claude-3-opus@20240229",
      "provider": "vertex_ai-anthropic_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "vertex_ai-anthropic_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/meta/llama3-405b-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama-4-scout-17b-16e-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 10000000,
        "max_input_tokens": 10000000,
        "max_output_tokens": 10000000,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama-4-scout-17b-128e-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 10000000,
        "max_input_tokens": 10000000,
        "max_output_tokens": 10000000,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama-4-maverick-17b-128e-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1000000,
        "max_input_tokens": 1000000,
        "max_output_tokens": 1000000,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000115",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama-4-maverick-17b-16e-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1000000,
        "max_input_tokens": 1000000,
        "max_output_tokens": 1000000,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000115",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama3-70b-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama3-8b-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing#partner-models"
      }
    },
    {
      "name": "vertex_ai/meta/llama-3.2-90b-vision-instruct-maas",
      "provider": "vertex_ai-llama_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-llama_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3.2-90b-vision-instruct-maas"
      }
    },
    {
      "name": "vertex_ai/mistral-large@latest",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 128000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-large@2411-001",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 128000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-large-2411",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 128000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-large@2407",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 128000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-nemo@latest",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-small-2503@001",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-small-2503",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "vertex_ai/jamba-1.5-mini@001",
      "provider": "vertex_ai-ai21_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-ai21_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/jamba-1.5-large@001",
      "provider": "vertex_ai-ai21_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "vertex_ai-ai21_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/jamba-1.5",
      "provider": "vertex_ai-ai21_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-ai21_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/jamba-1.5-mini",
      "provider": "vertex_ai-ai21_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "vertex_ai-ai21_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/jamba-1.5-large",
      "provider": "vertex_ai-ai21_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "vertex_ai-ai21_models",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/mistral-nemo@2407",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/codestral@latest",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/codestral@2405",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/codestral-2501",
      "provider": "vertex_ai-mistral_models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "vertex_ai-mistral_models",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "palm/chat-bison",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "palm/chat-bison-001",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-002",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-001",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-latest",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000000075",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-8b",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-8b-exp-0924",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-exp-1114",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-exp-1206",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-exp-0827",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-flash-8b-exp-0827",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-pro",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 32760,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://ai.google.dev/gemini-api/docs/models/gemini"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.0000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro-002",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.0000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro-001",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.0000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro-exp-0801",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.0000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro-exp-0827",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 2097152,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-1.5-pro-latest",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.00000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://ai.google.dev/pricing"
      }
    },
    {
      "name": "gemini/gemini-pro-vision",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 30720,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini/gemini-gemma-2-27b-it",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "gemini/gemini-gemma-2-9b-it",
      "provider": "gemini",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000105",
        "litellm_provider": "gemini",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "command-a-03-2025",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 256000,
        "max_output_tokens": 8000,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command-r",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command-r-08-2024",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command-r7b-12-2024",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000000375",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.cohere.com/v2/docs/command-r7b"
      }
    },
    {
      "name": "command-light",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command-r-plus",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command-r-plus-08-2024",
      "provider": "cohere_chat",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "cohere_chat",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-13b",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-13b-chat",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-70b",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000065",
        "output_cost_per_token": "0.00000275",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-70b-chat",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000065",
        "output_cost_per_token": "0.00000275",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-7b",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-2-7b-chat",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-3-70b",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000065",
        "output_cost_per_token": "0.00000275",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-3-70b-instruct",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000065",
        "output_cost_per_token": "0.00000275",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-3-8b",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 8086,
        "max_input_tokens": 8086,
        "max_output_tokens": 8086,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/meta/llama-3-8b-instruct",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 8086,
        "max_input_tokens": 8086,
        "max_output_tokens": 8086,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/mistralai/mistral-7b-v0.1",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/mistralai/mistral-7b-instruct-v0.2",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000005",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "replicate/mistralai/mixtral-8x7b-instruct-v0.1",
      "provider": "replicate",
      "logo": "/logos/replicate.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "replicate",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/deepseek/deepseek-r1-0528",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 65336,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.00000215",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/deepseek/deepseek-r1",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 65336,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000055",
        "output_cost_per_token": "0.00000219",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/deepseek/deepseek-chat",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 65536,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000014",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/deepseek/deepseek-coder",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 66000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000014",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/microsoft/wizardlm-2-8x22b:nitro",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/google/gemini-2.5-pro",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/google/gemini-pro-1.5",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1000000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.0000075",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/google/gemini-2.0-flash-001",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/google/gemini-2.5-flash",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 1048576,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000025",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/mistralai/mixtral-8x22b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000065",
        "output_cost_per_token": "0.00000065",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/cohere/command-r-plus",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/databricks/dbrx-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-haiku",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 200000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-5-haiku",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 200000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-haiku-20240307",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-5-haiku-20241022",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-3.5-sonnet",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3.5-sonnet:beta",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3.7-sonnet",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3.7-sonnet:beta",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-sonnet",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 200000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/anthropic/claude-sonnet-4",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/mistralai/mistral-large",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/mistralai/mistral-small-3.1-24b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/mistralai/mistral-small-3.2-24b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/cognitivecomputations/dolphin-mixtral-8x7b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32769,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/google/gemini-pro-vision",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 45875,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000375",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/fireworks/firellava-13b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-3-8b-instruct:free",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-3-8b-instruct:extended",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000225",
        "output_cost_per_token": "0.00000225",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-3-70b-instruct:nitro",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-3-70b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o1",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 200000,
        "max_output_tokens": 100000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/openai/o1-mini",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o1-mini-2024-09-12",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000012",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o1-preview",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o1-preview-2024-09-12",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 128000,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o3-mini",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/o3-mini-high",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 128000,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000011",
        "output_cost_per_token": "0.0000044",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/gpt-4o",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/openai/gpt-4o-2024-05-13",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/openai/gpt-4-vision-preview",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 130000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00003",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/openai/gpt-3.5-turbo",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4095,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/gpt-3.5-turbo-16k",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 16383,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/openai/gpt-4",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.00006",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-instant-v1",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": null,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000163",
        "output_cost_per_token": "0.00000551",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-2",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": null,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00001102",
        "output_cost_per_token": "0.00003268",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/anthropic/claude-3-opus",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "openrouter/google/palm-2-chat-bison",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 25804,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/google/palm-2-codechat-bison",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 20070,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-2-13b-chat",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/llama-2-70b-chat",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/meta-llama/codellama-34b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/nousresearch/nous-hermes-llama2-13b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/mancer/weaver",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000005625",
        "output_cost_per_token": "0.000005625",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/gryphe/mythomax-l2-13b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001875",
        "output_cost_per_token": "0.000001875",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/jondurbin/airoboros-l2-70b-2.1",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000013875",
        "output_cost_per_token": "0.000013875",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/undi95/remm-slerp-l2-13b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 6144,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001875",
        "output_cost_per_token": "0.000001875",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/pygmalionai/mythalion-13b",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001875",
        "output_cost_per_token": "0.000001875",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/mistralai/mistral-7b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/mistralai/mistral-7b-instruct:free",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "openrouter/qwen/qwen-2.5-coder-32b-instruct",
      "provider": "openrouter",
      "logo": "/logos/openrouter.svg",
      "sample_spec": {
        "max_tokens": 33792,
        "max_input_tokens": 33792,
        "max_output_tokens": 33792,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0.00000018",
        "litellm_provider": "openrouter",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-1.5-mini@001",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-1.5-large@001",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-1.5",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-1.5-mini",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-1.5-large",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-large-1.6",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "jamba-mini-1.6",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "ai21",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "chatdolphin",
      "provider": "nlp_cloud",
      "logo": "/logos/nlp cloud.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "nlp_cloud",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-base-control",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000375",
        "output_cost_per_token": "0.00004125",
        "litellm_provider": "aleph_alpha",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-extended-control",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00005625",
        "output_cost_per_token": "0.000061875",
        "litellm_provider": "aleph_alpha",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-supreme-control",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00021875",
        "output_cost_per_token": "0.000240625",
        "litellm_provider": "aleph_alpha",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ai21.j2-mid-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000125",
        "output_cost_per_token": "0.0000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ai21.j2-ultra-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000188",
        "output_cost_per_token": "0.0000188",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ai21.jamba-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 70000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ai21.jamba-1-5-large-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ai21.jamba-1-5-mini-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 256000,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-text-lite-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4000,
        "max_input_tokens": 42000,
        "max_output_tokens": 4000,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-text-express-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 42000,
        "max_output_tokens": 8000,
        "input_cost_per_token": "0.0000013",
        "output_cost_per_token": "0.0000017",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-text-premier-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 42000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral.mistral-7b-instruct-v0:2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral.mixtral-8x7b-instruct-v0:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000045",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral.mistral-large-2402-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral.mistral-large-2407-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 128000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000009",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "mistral.mistral-small-2402-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/mistral.mixtral-8x7b-instruct-v0:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000045",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/mistral.mixtral-8x7b-instruct-v0:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000045",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-3/mistral.mixtral-8x7b-instruct-v0:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000091",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/mistral.mistral-7b-instruct-v0:2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/mistral.mistral-7b-instruct-v0:2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-3/mistral.mistral-7b-instruct-v0:2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.00000026",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/mistral.mistral-large-2402-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/mistral.mistral-large-2402-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-3/mistral.mistral-large-2402-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000104",
        "output_cost_per_token": "0.0000312",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.nova-micro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000035",
        "output_cost_per_token": "0.00000014",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.amazon.nova-micro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000035",
        "output_cost_per_token": "0.00000014",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "eu.amazon.nova-micro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000046",
        "output_cost_per_token": "0.000000184",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.nova-lite-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 128000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.00000006",
        "output_cost_per_token": "0.00000024",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.amazon.nova-lite-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 128000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.00000006",
        "output_cost_per_token": "0.00000024",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.amazon.nova-lite-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 128000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000078",
        "output_cost_per_token": "0.000000312",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "amazon.nova-pro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000032",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.amazon.nova-pro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000032",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.amazon.nova-pro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.00000105",
        "output_cost_per_token": "0.0000042",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://aws.amazon.com/bedrock/pricing/"
      }
    },
    {
      "name": "apac.amazon.nova-micro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000037",
        "output_cost_per_token": "0.000000148",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "apac.amazon.nova-lite-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 128000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.000000063",
        "output_cost_per_token": "0.000000252",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.amazon.nova-pro-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 300000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.00000084",
        "output_cost_per_token": "0.00000336",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.amazon.nova-premier-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 1000000,
        "max_output_tokens": 10000,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.0000125",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-sonnet-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "bedrock/invoke/anthropic.claude-3-5-sonnet-20240620-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-5-sonnet-20240620-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-opus-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-sonnet-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-7-sonnet-20250219-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-5-sonnet-20241022-v2:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-haiku-20240307-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-3-5-haiku-20241022-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anthropic.claude-3-opus-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-sonnet-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-5-sonnet-20240620-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-opus-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-sonnet-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-haiku-20240307-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.anthropic.claude-3-5-haiku-20241022-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.000004",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.anthropic.claude-3-opus-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-sonnet-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-5-sonnet-20240620-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-5-sonnet-20241022-v2:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-haiku-20240307-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-opus-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 200000,
        "max_output_tokens": 32000,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-sonnet-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.anthropic.claude-3-haiku-20240307-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.anthropic.claude-3-sonnet-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.anthropic.claude-3-5-sonnet-20240620-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.anthropic.claude-3-5-sonnet-20241022-v2:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "apac.anthropic.claude-sonnet-4-20250514-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 64000,
        "max_input_tokens": 200000,
        "max_output_tokens": 64000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "eu.anthropic.claude-3-5-haiku-20241022-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 200000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000125",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "eu.anthropic.claude-3-opus-20240229-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000075",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.000008",
        "output_cost_per_token": "0.000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-2/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000024",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000223",
        "output_cost_per_token": "0.00000755",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000248",
        "output_cost_per_token": "0.00000838",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-instant-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 100000,
        "max_output_tokens": 8191,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cohere.command-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/*/1-month-commitment/cohere.command-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/*/6-month-commitment/cohere.command-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cohere.command-light-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/*/1-month-commitment/cohere.command-light-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/*/6-month-commitment/cohere.command-light-text-v14",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cohere.command-r-plus-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cohere.command-r-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.deepseek.r1-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000135",
        "output_cost_per_token": "0.0000054",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-3-70b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000072",
        "output_cost_per_token": "0.00000072",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama2-13b-chat-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000075",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama2-70b-chat-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000195",
        "output_cost_per_token": "0.00000256",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-south-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000036",
        "output_cost_per_token": "0.00000072",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ca-central-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000069",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000032",
        "output_cost_per_token": "0.00000065",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-2/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000039",
        "output_cost_per_token": "0.00000078",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/sa-east-1/meta.llama3-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.00000101",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000265",
        "output_cost_per_token": "0.0000035",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-east-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000265",
        "output_cost_per_token": "0.0000035",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/us-west-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000265",
        "output_cost_per_token": "0.0000035",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ap-south-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000318",
        "output_cost_per_token": "0.0000042",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/ca-central-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000305",
        "output_cost_per_token": "0.00000403",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000286",
        "output_cost_per_token": "0.00000378",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/eu-west-2/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000345",
        "output_cost_per_token": "0.00000455",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "bedrock/sa-east-1/meta.llama3-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000445",
        "output_cost_per_token": "0.00000588",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-1-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000022",
        "output_cost_per_token": "0.00000022",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama3-1-8b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000022",
        "output_cost_per_token": "0.00000022",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-1-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000099",
        "output_cost_per_token": "0.00000099",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama3-1-70b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.00000099",
        "output_cost_per_token": "0.00000099",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-1-405b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000532",
        "output_cost_per_token": "0.000016",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama3-1-405b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000532",
        "output_cost_per_token": "0.000016",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-2-1b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama3-2-1b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "eu.meta.llama3-2-1b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-2-3b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama3-2-3b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "eu.meta.llama3-2-3b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000019",
        "output_cost_per_token": "0.00000019",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama3-2-11b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000035",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.meta.llama3-2-11b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.00000035",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "meta.llama3-2-90b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.meta.llama3-2-90b-instruct-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "bedrock",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true
      }
    },
    {
      "name": "us.meta.llama3-3-70b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000072",
        "output_cost_per_token": "0.00000072",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama4-maverick-17b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000024",
        "output_cost_per_token": "0.00000097",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama4-maverick-17b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000024",
        "output_cost_per_token": "0.00000097",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "meta.llama4-scout-17b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000017",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "us.meta.llama4-scout-17b-instruct-v1:0",
      "provider": "bedrock_converse",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 128000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000017",
        "output_cost_per_token": "0.00000066",
        "litellm_provider": "bedrock_converse",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-7b-f",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-13b-f",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-70b-b-f",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-up-to-4b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-4.1b-8b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-8.1b-21b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 1000,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-21.1b-41b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0.0000008",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-41.1b-80b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-81.1b-110b",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000018",
        "output_cost_per_token": "0.0000018",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0.00000018",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000088",
        "output_cost_per_token": "0.00000088",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000035",
        "output_cost_per_token": "0.0000035",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000088",
        "output_cost_per_token": "0.00000088",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/mistralai/Mixtral-8x7B-Instruct-v0.1",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/mistralai/Mistral-7B-Instruct-v0.1",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/togethercomputer/CodeLlama-34b-Instruct",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Llama-4-Scout-17B-16E-Instruct",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/meta-llama/Llama-3.2-3B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/Qwen/Qwen2.5-7B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/Qwen/Qwen2.5-72B-Instruct-Turbo",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/deepseek-ai/DeepSeek-V3",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "together_ai/mistralai/Mistral-Small-24B-Instruct-2501",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "together_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/codegeex4",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/deepseek-coder-v2-instruct",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/deepseek-coder-v2-lite-instruct",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/internlm2_5-20b-chat",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama2",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama2:7b",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama2:13b",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama2:70b",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama3",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama3:8b",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama3:70b",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama3.1",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mistral-large-instruct-2407",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 65536,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mistral-7B-Instruct-v0.1",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mistral-7B-Instruct-v0.2",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mixtral-8x7B-Instruct-v0.1",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mixtral-8x22B-Instruct-v0.1",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 65536,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/lizpreciatior/lzlv_70b_fp16_hf",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/Gryphe/MythoMax-L2-13b",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000022",
        "output_cost_per_token": "0.00000022",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/mistralai/Mistral-7B-Instruct-v0.1",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32768,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Llama-2-70b-chat-hf",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/cognitivecomputations/dolphin-2.6-mixtral-8x7b",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32768,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000027",
        "output_cost_per_token": "0.00000027",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/codellama/CodeLlama-34b-Instruct-hf",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/Phind/Phind-CodeLlama-34B-v2",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32768,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.00000027",
        "output_cost_per_token": "0.00000027",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/deepinfra/airoboros-70b",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/01-ai/Yi-34B-Chat",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/jondurbin/airoboros-l2-70b-gpt4-1.4.1",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Llama-2-13b-chat-hf",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000022",
        "output_cost_per_token": "0.00000022",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/amazon/MistralLite",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32768,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Llama-2-7b-chat-hf",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Meta-Llama-3-8B-Instruct",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000008",
        "output_cost_per_token": "0.00000008",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Meta-Llama-3-70B-Instruct",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000059",
        "output_cost_per_token": "0.00000079",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/meta-llama/Meta-Llama-3.1-405B-Instruct",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": true,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/openchat/openchat_3.5",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "deepinfra",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/codellama-34b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000035",
        "output_cost_per_token": "0.0000014",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/codellama-70b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-70b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-8b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-sonar-huge-128k-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 127072,
        "max_input_tokens": 127072,
        "max_output_tokens": 127072,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-sonar-large-128k-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 127072,
        "max_input_tokens": 127072,
        "max_output_tokens": 127072,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-sonar-large-128k-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-sonar-small-128k-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-3.1-sonar-small-128k-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 127072,
        "max_input_tokens": 127072,
        "max_output_tokens": 127072,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/pplx-7b-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/pplx-70b-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/pplx-7b-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/pplx-70b-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0.0000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/llama-2-70b-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/mistral-7b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/mixtral-8x7b-instruct",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-small-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-small-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 12000,
        "max_input_tokens": 12000,
        "max_output_tokens": 12000,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0.00000028",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-medium-chat",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000018",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-medium-online",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 12000,
        "max_input_tokens": 12000,
        "max_output_tokens": 12000,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0.0000018",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-pro",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 200000,
        "max_output_tokens": 8000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-reasoning",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-reasoning-pro",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "perplexity/sonar-deep-research",
      "provider": "perplexity",
      "logo": "/logos/perplexity.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "perplexity",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-1b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-3b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p1-8b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000001",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-11b-vision-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-90b-vision-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/firefunction-v2",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/mixtral-8x22b-instruct-hf",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 65536,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000012",
        "output_cost_per_token": "0.0000012",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/qwen2-72b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/yi-large",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 65536,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000012",
        "output_cost_per_token": "0.0000012",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/deepseek-v3",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 20480,
        "max_input_tokens": 128000,
        "max_output_tokens": 20480,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1-basic",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 20480,
        "max_input_tokens": 128000,
        "max_output_tokens": 20480,
        "input_cost_per_token": "0.00000055",
        "output_cost_per_token": "0.00000219",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1-0528",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 160000,
        "max_input_tokens": 160000,
        "max_output_tokens": 160000,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000008",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama-v3p1-405b-instruct",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 128000,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama4-maverick-instruct-basic",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.00000022",
        "output_cost_per_token": "0.00000088",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/accounts/fireworks/models/llama4-scout-instruct-basic",
      "provider": "fireworks_ai",
      "logo": "/logos/fireworks ai.svg",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "fireworks_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "anyscale/mistralai/Mistral-7B-Instruct-v0.1",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/mistralai-Mistral-7B-Instruct-v0.1"
      }
    },
    {
      "name": "anyscale/mistralai/Mixtral-8x7B-Instruct-v0.1",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/mistralai-Mixtral-8x7B-Instruct-v0.1"
      }
    },
    {
      "name": "anyscale/mistralai/Mixtral-8x22B-Instruct-v0.1",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 65536,
        "max_input_tokens": 65536,
        "max_output_tokens": 65536,
        "input_cost_per_token": "0.0000009",
        "output_cost_per_token": "0.0000009",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/mistralai-Mixtral-8x22B-Instruct-v0.1"
      }
    },
    {
      "name": "anyscale/HuggingFaceH4/zephyr-7b-beta",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anyscale/google/gemma-7b-it",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/google-gemma-7b-it"
      }
    },
    {
      "name": "anyscale/meta-llama/Llama-2-7b-chat-hf",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anyscale/meta-llama/Llama-2-13b-chat-hf",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000025",
        "output_cost_per_token": "0.00000025",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anyscale/meta-llama/Llama-2-70b-chat-hf",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anyscale/codellama/CodeLlama-34b-Instruct-hf",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "anyscale/codellama/CodeLlama-70b-Instruct-hf",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/codellama-CodeLlama-70b-Instruct-hf"
      }
    },
    {
      "name": "anyscale/meta-llama/Meta-Llama-3-8B-Instruct",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/meta-llama-Meta-Llama-3-8B-Instruct"
      }
    },
    {
      "name": "anyscale/meta-llama/Meta-Llama-3-70B-Instruct",
      "provider": "anyscale",
      "logo": "/logos/anyscale.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "anyscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.anyscale.com/preview/endpoints/text-generation/supported-models/meta-llama-Meta-Llama-3-70B-Instruct"
      }
    },
    {
      "name": "cloudflare/@cf/meta/llama-2-7b-chat-fp16",
      "provider": "cloudflare",
      "logo": "/logos/cloudflare.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": 3072,
        "input_cost_per_token": "0.000001923",
        "output_cost_per_token": "0.000001923",
        "litellm_provider": "cloudflare",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cloudflare/@cf/meta/llama-2-7b-chat-int8",
      "provider": "cloudflare",
      "logo": "/logos/cloudflare.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0.000001923",
        "output_cost_per_token": "0.000001923",
        "litellm_provider": "cloudflare",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cloudflare/@cf/mistral/mistral-7b-instruct-v0.1",
      "provider": "cloudflare",
      "logo": "/logos/cloudflare.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000001923",
        "output_cost_per_token": "0.000001923",
        "litellm_provider": "cloudflare",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cloudflare/@hf/thebloke/codellama-7b-instruct-awq",
      "provider": "cloudflare",
      "logo": "/logos/cloudflare.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001923",
        "output_cost_per_token": "0.000001923",
        "litellm_provider": "cloudflare",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "databricks/databricks-claude-3-7-sonnet",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 200000,
        "max_input_tokens": 200000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.000017857",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-meta-llama-3-1-405b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00001500002",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-meta-llama-3-1-70b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000100002",
        "output_cost_per_token": "0.00000299999",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-meta-llama-3-3-70b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000100002",
        "output_cost_per_token": "0.00000299999",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-llama-4-maverick",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-dbrx-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.00000074998",
        "output_cost_per_token": "0.00000224901",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-meta-llama-3-70b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 128000,
        "input_cost_per_token": "0.00000100002",
        "output_cost_per_token": "0.00000299999",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-llama-2-70b-chat",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000050001",
        "output_cost_per_token": "0.0000015",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-mixtral-8x7b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000050001",
        "output_cost_per_token": "0.00000099902",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-mpt-30b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000099902",
        "output_cost_per_token": "0.00000099902",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-mpt-7b-instruct",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00000050001",
        "output_cost_per_token": "0",
        "litellm_provider": "databricks",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "sambanova/Meta-Llama-3.1-8B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Meta-Llama-3.1-405B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Meta-Llama-3.2-1B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.00000004",
        "output_cost_per_token": "0.00000008",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Meta-Llama-3.2-3B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000008",
        "output_cost_per_token": "0.00000016",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Llama-4-Maverick-17B-128E-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.00000063",
        "output_cost_per_token": "0.0000018",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": true,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Llama-4-Scout-17B-16E-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000007",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Meta-Llama-3.3-70B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000012",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Meta-Llama-Guard-3-8B",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000003",
        "output_cost_per_token": "0.0000003",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Qwen3-32B",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000008",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/QwQ-32B",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.000001",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/Qwen2-Audio-7B-Instruct",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0001",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/DeepSeek-R1-Distill-Llama-70B",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 131072,
        "max_input_tokens": 131072,
        "max_output_tokens": 131072,
        "input_cost_per_token": "0.0000007",
        "output_cost_per_token": "0.0000014",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/DeepSeek-R1",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000005",
        "output_cost_per_token": "0.000007",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "sambanova/DeepSeek-V3-0324",
      "provider": "sambanova",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 32768,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.0000045",
        "litellm_provider": "sambanova",
        "mode": "chat",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.sambanova.ai/plans/pricing"
      }
    },
    {
      "name": "snowflake/deepseek-r1",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/snowflake-arctic",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/claude-3-5-sonnet",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 18000,
        "max_input_tokens": 18000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/mistral-large",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/mistral-large2",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/reka-flash",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 100000,
        "max_input_tokens": 100000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/reka-core",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/jamba-instruct",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/jamba-1.5-mini",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/jamba-1.5-large",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 256000,
        "max_input_tokens": 256000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/mixtral-8x7b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama2-70b-chat",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3-8b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 8000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3-70b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 8000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.1-8b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.1-70b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.3-70b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/snowflake-llama-3.3-70b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 8000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.1-405b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/snowflake-llama-3.1-405b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 8000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.2-1b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/llama3.2-3b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/mistral-7b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "snowflake/gemma-7b",
      "provider": "snowflake",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8000,
        "max_input_tokens": 8000,
        "max_output_tokens": 8192,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "snowflake",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "nscale/meta-llama/Llama-4-Scout-17B-16E-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000009",
        "output_cost_per_token": "0.00000029",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/Qwen/Qwen2.5-Coder-3B-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000001",
        "output_cost_per_token": "0.00000003",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/Qwen/Qwen2.5-Coder-7B-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000001",
        "output_cost_per_token": "0.00000003",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/Qwen/Qwen2.5-Coder-32B-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000006",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/Qwen/QwQ-32B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000375",
        "output_cost_per_token": "0.000000375",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000025",
        "output_cost_per_token": "0.000000025",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000009",
        "output_cost_per_token": "0.00000009",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000007",
        "output_cost_per_token": "0.00000007",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0.00000015",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/mistralai/mixtral-8x22b-instruct-v0.1",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/meta-llama/Llama-3.1-8B-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000003",
        "output_cost_per_token": "0.00000003",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "nscale/meta-llama/Llama-3.3-70B-Instruct",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0.0000002",
        "litellm_provider": "nscale",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#chat-models"
      }
    },
    {
      "name": "featherless_ai/featherless-ai/Qwerky-72B",
      "provider": "featherless_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "featherless_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "featherless_ai/featherless-ai/Qwerky-QwQ-32B",
      "provider": "featherless_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 32768,
        "max_input_tokens": 32768,
        "max_output_tokens": 4096,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "featherless_ai",
        "mode": "chat",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    }
  ],
  "embedding": [
    {
      "name": "text-embedding-3-large",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0",
        "litellm_provider": "openai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "text-embedding-3-small",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000002",
        "output_cost_per_token": "0",
        "litellm_provider": "openai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "text-embedding-ada-002",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "openai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "text-embedding-ada-002-v2",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "openai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/ada",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/text-embedding-ada-002",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/text-embedding-3-large",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/text-embedding-3-small",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 8191,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000002",
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure_ai/Cohere-embed-v3-english",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "azure_ai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cohere.cohere-embed-v3-english-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/Cohere-embed-v3-multilingual",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "azure_ai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cohere.cohere-embed-v3-english-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "azure_ai/embed-v-4-0",
      "provider": "azure_ai",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": 128000,
        "max_input_tokens": 128000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "azure_ai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://azuremarketplace.microsoft.com/pt-br/marketplace/apps/cohere.cohere-embed-4-offer?tab=PlansAndPrice"
      }
    },
    {
      "name": "mistral/mistral-embed",
      "provider": "mistral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": null,
        "litellm_provider": "mistral",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "text-embedding-004",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "gemini-embedding-001",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000015",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "text-embedding-005",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "text-multilingual-embedding-002",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "multimodalembedding",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "multimodalembedding@001",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "text-embedding-large-exp-03-07",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models"
      }
    },
    {
      "name": "textembedding-gecko",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "textembedding-gecko-multilingual",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "textembedding-gecko-multilingual@001",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "textembedding-gecko@001",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "textembedding-gecko@003",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-embedding-preview-0409",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000000625",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "text-multilingual-embedding-preview-0409",
      "provider": "vertex_ai-embedding-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 3072,
        "max_input_tokens": 3072,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000000625",
        "output_cost_per_token": "0",
        "litellm_provider": "vertex_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "embed-english-light-v3.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 1024,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "embed-multilingual-v3.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 1024,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "embed-english-v2.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "embed-english-light-v2.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 1024,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "embed-multilingual-v2.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 768,
        "max_input_tokens": 768,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "embed-english-v3.0",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 1024,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "cohere",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-embed-text-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "bedrock",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-embed-text-v2:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000002",
        "output_cost_per_token": "0",
        "litellm_provider": "bedrock",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "amazon.titan-embed-image-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 128,
        "max_input_tokens": 128,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000008",
        "output_cost_per_token": "0",
        "litellm_provider": "bedrock",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://us-east-1.console.aws.amazon.com/bedrock/home?region=us-east-1#/providers?model=amazon.titan-image-generator-v1"
      }
    },
    {
      "name": "cohere.embed-english-v3",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "bedrock",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "cohere.embed-multilingual-v3",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "bedrock",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-embedding-up-to-150m",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000008",
        "output_cost_per_token": "0",
        "litellm_provider": "together_ai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "together-ai-embedding-151m-to-350m",
      "provider": "together_ai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000016",
        "output_cost_per_token": "0",
        "litellm_provider": "together_ai",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "fireworks_ai/nomic-ai/nomic-embed-text-v1.5",
      "provider": "fireworks_ai-embedding-models",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000008",
        "output_cost_per_token": "0",
        "litellm_provider": "fireworks_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/nomic-ai/nomic-embed-text-v1",
      "provider": "fireworks_ai-embedding-models",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000008",
        "output_cost_per_token": "0",
        "litellm_provider": "fireworks_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/WhereIsAI/UAE-Large-V1",
      "provider": "fireworks_ai-embedding-models",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000016",
        "output_cost_per_token": "0",
        "litellm_provider": "fireworks_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/thenlper/gte-large",
      "provider": "fireworks_ai-embedding-models",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000016",
        "output_cost_per_token": "0",
        "litellm_provider": "fireworks_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "fireworks_ai/thenlper/gte-base",
      "provider": "fireworks_ai-embedding-models",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000000008",
        "output_cost_per_token": "0",
        "litellm_provider": "fireworks_ai-embedding-models",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://fireworks.ai/pricing"
      }
    },
    {
      "name": "voyage/voyage-01",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-lite-01",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-large-2",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 16000,
        "max_input_tokens": 16000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-finance-2",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-lite-02-instruct",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 4000,
        "max_input_tokens": 4000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-law-2",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 16000,
        "max_input_tokens": 16000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-code-2",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 16000,
        "max_input_tokens": 16000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-2",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 4000,
        "max_input_tokens": 4000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000001",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-3-large",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-3",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000006",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-3-lite",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000002",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-code-3",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000018",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "voyage/voyage-multimodal-3",
      "provider": "voyage",
      "logo": "/logos/voyage.svg",
      "sample_spec": {
        "max_tokens": 32000,
        "max_input_tokens": 32000,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012",
        "output_cost_per_token": "0",
        "litellm_provider": "voyage",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "databricks/databricks-bge-large-en",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 512,
        "max_input_tokens": 512,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000010003",
        "output_cost_per_token": "0",
        "litellm_provider": "databricks",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    },
    {
      "name": "databricks/databricks-gte-large-en",
      "provider": "databricks",
      "logo": "/logos/databricks.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00000012999",
        "output_cost_per_token": "0",
        "litellm_provider": "databricks",
        "mode": "embedding",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://www.databricks.com/product/pricing/foundation-model-serving"
      }
    }
  ],
  "image_generation": [
    {
      "name": "256-x-256/dall-e-2",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "512-x-512/dall-e-2",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "1024-x-1024/dall-e-2",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "hd/1024-x-1792/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "hd/1792-x-1024/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "hd/1024-x-1024/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "standard/1024-x-1792/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "standard/1792-x-1024/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "standard/1024-x-1024/dall-e-3",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "low/1024-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "medium/1024-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "high/1024-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "low/1024-x-1536/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "medium/1024-x-1536/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "high/1024-x-1536/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "low/1536-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "medium/1536-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "high/1536-x-1024/gpt-image-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/low/1024-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/medium/1024-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/high/1024-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/low/1024-x-1536/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/medium/1024-x-1536/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/high/1024-x-1536/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/low/1536-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/medium/1536-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/high/1536-x-1024/gpt-image-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/standard/1024-x-1024/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/hd/1024-x-1024/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/standard/1024-x-1792/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/standard/1792-x-1024/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/hd/1024-x-1792/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/hd/1792-x-1024/dall-e-3",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/standard/1024-x-1024/dall-e-2",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": "0",
        "litellm_provider": "azure",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "vertex_ai/imagegeneration@006",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-4.0-generate-preview-06-06",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-4.0-ultra-generate-preview-06-06",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-4.0-fast-generate-preview-06-06",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-3.0-generate-002",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-3.0-generate-001",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "vertex_ai/imagen-3.0-fast-generate-001",
      "provider": "vertex_ai-image-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-image-models",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/pricing"
      }
    },
    {
      "name": "1024-x-1024/50-steps/bedrock/amazon.nova-canvas-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 2600,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "512-x-512/50-steps/stability.stable-diffusion-xl-v0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "512-x-512/max-steps/stability.stable-diffusion-xl-v0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "max-x-max/50-steps/stability.stable-diffusion-xl-v0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "max-x-max/max-steps/stability.stable-diffusion-xl-v0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "1024-x-1024/50-steps/stability.stable-diffusion-xl-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "1024-x-1024/max-steps/stability.stable-diffusion-xl-v1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.sd3-large-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.sd3-5-large-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.stable-image-core-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.stable-image-core-v1:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.stable-image-ultra-v1:0",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "stability.stable-image-ultra-v1:1",
      "provider": "bedrock",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 77,
        "max_input_tokens": 77,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "bedrock",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "nscale/black-forest-labs/FLUX.1-schnell",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "nscale",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#image-models"
      }
    },
    {
      "name": "nscale/stabilityai/stable-diffusion-xl-base-1.0",
      "provider": "nscale",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "nscale",
        "mode": "image_generation",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.nscale.com/docs/inference/serverless-models/current#image-models"
      }
    }
  ],
  "completion": [
    {
      "name": "ft:davinci-002",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ft:babbage-002",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-3.5-turbo-instruct-0914",
      "provider": "azure_text",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure_text",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-instruct",
      "provider": "azure_text",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure_text",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-35-turbo-instruct-0914",
      "provider": "azure_text",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 4097,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "azure_text",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "babbage-002",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000004",
        "output_cost_per_token": "0.0000004",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "davinci-002",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000002",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-instruct",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 8192,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-3.5-turbo-instruct-0914",
      "provider": "text-completion-openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": 4097,
        "max_input_tokens": 8192,
        "max_output_tokens": 4097,
        "input_cost_per_token": "0.0000015",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "text-completion-openai",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "text-completion-codestral/codestral-latest",
      "provider": "text-completion-codestral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "text-completion-codestral",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.mistral.ai/capabilities/code_generation/"
      }
    },
    {
      "name": "text-completion-codestral/codestral-2405",
      "provider": "text-completion-codestral",
      "logo": "/logos/mistral.svg",
      "sample_spec": {
        "max_tokens": 8191,
        "max_input_tokens": 32000,
        "max_output_tokens": 8191,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "text-completion-codestral",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://docs.mistral.ai/capabilities/code_generation/"
      }
    },
    {
      "name": "text-bison",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 8192,
        "max_output_tokens": 2048,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-bison@001",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-bison@002",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-bison32k",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-bison32k@002",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-unicorn",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.000028",
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "text-unicorn@001",
      "provider": "vertex_ai-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.000028",
        "litellm_provider": "vertex_ai-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-bison@001",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-bison@002",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-bison32k",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-bison-32k@002",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 6144,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-gecko@001",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64,
        "max_input_tokens": 2048,
        "max_output_tokens": 64,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-gecko@002",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64,
        "max_input_tokens": 2048,
        "max_output_tokens": 64,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-gecko",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64,
        "max_input_tokens": 2048,
        "max_output_tokens": 64,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "code-gecko-latest",
      "provider": "vertex_ai-code-text-models",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 64,
        "max_input_tokens": 2048,
        "max_output_tokens": 64,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "vertex_ai-code-text-models",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "palm/text-bison",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "palm/text-bison-001",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "palm/text-bison-safety-off",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "palm/text-bison-safety-recitation-off",
      "provider": "palm",
      "logo": "/logos/google.svg",
      "sample_spec": {
        "max_tokens": 1024,
        "max_input_tokens": 8192,
        "max_output_tokens": 1024,
        "input_cost_per_token": "0.000000125",
        "output_cost_per_token": "0.000000125",
        "litellm_provider": "palm",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#foundation_models"
      }
    },
    {
      "name": "command-nightly",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "cohere",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "command",
      "provider": "cohere",
      "logo": "/logos/cohere.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.000001",
        "output_cost_per_token": "0.000002",
        "litellm_provider": "cohere",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "j2-ultra",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000015",
        "output_cost_per_token": "0.000015",
        "litellm_provider": "ai21",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "j2-mid",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.00001",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "ai21",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "j2-light",
      "provider": "ai21",
      "logo": "/logos/ai21.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0.000003",
        "output_cost_per_token": "0.000003",
        "litellm_provider": "ai21",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "dolphin",
      "provider": "nlp_cloud",
      "logo": "/logos/nlp cloud.svg",
      "sample_spec": {
        "max_tokens": 16384,
        "max_input_tokens": 16384,
        "max_output_tokens": 16384,
        "input_cost_per_token": "0.0000005",
        "output_cost_per_token": "0.0000005",
        "litellm_provider": "nlp_cloud",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-base",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.00003",
        "output_cost_per_token": "0.000033",
        "litellm_provider": "aleph_alpha",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-extended",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000045",
        "output_cost_per_token": "0.0000495",
        "litellm_provider": "aleph_alpha",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "luminous-supreme",
      "provider": "aleph_alpha",
      "logo": "/logos/aleph alpha.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.000175",
        "output_cost_per_token": "0.0001925",
        "litellm_provider": "aleph_alpha",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-7b",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-13b",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "sagemaker/meta-textgeneration-llama-2-70b",
      "provider": "sagemaker",
      "logo": "/logos/amazon.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "sagemaker",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/codegemma",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/deepseek-coder-v2-base",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/deepseek-coder-v2-lite-base",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/llama2-uncensored",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/mistral",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 8192,
        "max_input_tokens": 8192,
        "max_output_tokens": 8192,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": true,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/codellama",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/orca-mini",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 4096,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "ollama/vicuna",
      "provider": "ollama",
      "logo": "/logos/ollama.svg",
      "sample_spec": {
        "max_tokens": 2048,
        "max_input_tokens": 2048,
        "max_output_tokens": 2048,
        "input_cost_per_token": "0",
        "output_cost_per_token": "0",
        "litellm_provider": "ollama",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/deepinfra/mixtral",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 32000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000027",
        "output_cost_per_token": "0.00000027",
        "litellm_provider": "deepinfra",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/01-ai/Yi-6B-200K",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.00000013",
        "output_cost_per_token": "0.00000013",
        "litellm_provider": "deepinfra",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepinfra/01-ai/Yi-34B-200K",
      "provider": "deepinfra",
      "logo": "/logos/deepinfra.svg",
      "sample_spec": {
        "max_tokens": 4096,
        "max_input_tokens": 200000,
        "max_output_tokens": 4096,
        "input_cost_per_token": "0.0000006",
        "output_cost_per_token": "0.0000006",
        "litellm_provider": "deepinfra",
        "mode": "completion",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    }
  ],
  "audio_transcription": [
    {
      "name": "gpt-4o-transcribe",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 16000,
        "max_output_tokens": 2000,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-transcribe",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 16000,
        "max_output_tokens": 2000,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "openai",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "whisper-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/whisper-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-transcribe",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 16000,
        "max_output_tokens": 2000,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-mini-transcribe",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": 16000,
        "max_output_tokens": 2000,
        "input_cost_per_token": "0.00000125",
        "output_cost_per_token": "0.000005",
        "litellm_provider": "azure",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/whisper-large-v3",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "groq",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/whisper-large-v3-turbo",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "groq",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/distil-whisper-large-v3-en",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "groq",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "assemblyai/nano",
      "provider": "assemblyai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "assemblyai",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "assemblyai/best",
      "provider": "assemblyai",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "assemblyai",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "deepgram/nova-3",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-3-general",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-3-medical",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-general",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-meeting",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-phonecall",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-voicemail",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-finance",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-conversationalai",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-video",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-drivethru",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-automotive",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-2-atc",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-general",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/nova-phonecall",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/enhanced",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/enhanced-general",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/enhanced-meeting",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/enhanced-phonecall",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/enhanced-finance",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-general",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-meeting",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-phonecall",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-voicemail",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-finance",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-conversationalai",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/base-video",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper-tiny",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper-base",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper-small",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper-medium",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    },
    {
      "name": "deepgram/whisper-large",
      "provider": "deepgram",
      "logo": "/placeholder.svg?height=30&width=30",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "deepgram",
        "mode": "audio_transcription",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false,
        "source": "https://deepgram.com/pricing"
      }
    }
  ],
  "audio_speech": [
    {
      "name": "tts-1",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "tts-1-hd",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "openai",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "gpt-4o-mini-tts",
      "provider": "openai",
      "logo": "/logos/openai.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "openai",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/gpt-4o-mini-tts",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": "0.0000025",
        "output_cost_per_token": "0.00001",
        "litellm_provider": "azure",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/tts-1",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "azure/tts-1-hd",
      "provider": "azure",
      "logo": "/logos/azure.svg",
      "sample_spec": {
        "max_tokens": null,
        "max_input_tokens": null,
        "max_output_tokens": null,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "azure",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    },
    {
      "name": "groq/playai-tts",
      "provider": "groq",
      "logo": "/logos/groq.svg",
      "sample_spec": {
        "max_tokens": 10000,
        "max_input_tokens": 10000,
        "max_output_tokens": 10000,
        "input_cost_per_token": null,
        "output_cost_per_token": null,
        "litellm_provider": "groq",
        "mode": "audio_speech",
        "supports_function_calling": false,
        "supports_parallel_function_calling": false,
        "supports_vision": false
      }
    }
  ]
};
