export interface textResponse {
    candidates: Array<{
      content: {
        parts: Array<{ text: string }>
      }
    }>
  }

  export interface Message {
    type: 'inbound' | 'outbound'
    message: string
    timestamp: string
  }

  export interface UserState {
    name: string
    API_KEY: string
    conversation: {
      loading: boolean
      error?: string
      data?: Message[]
    }
  }