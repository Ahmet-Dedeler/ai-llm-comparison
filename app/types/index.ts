export type AIModelMode = 'chat' | 'embedding' | 'image_generation' | 'completion' | 'audio_transcription' | 'audio_speech'

export interface AIModel {
  name: string
  provider: string
  logo: string
  sample_spec: {
    max_tokens: number | null
    max_input_tokens: number | null
    max_output_tokens: number | null
    input_cost_per_token: number | null
    output_cost_per_token: number | null
    litellm_provider: string
    mode: AIModelMode
    supports_function_calling: boolean
    supports_parallel_function_calling: boolean
    supports_vision: boolean
    [key: string]: any
  }
}

export interface AIModels {
  [key: string]: AIModel[]
}
