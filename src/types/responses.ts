export interface textResponse {
    candidates: Array<{
      content: {
        parts: Array<{ text: string }>;
      };
    }>;
  }

  export interface UserState {
    name: string;
    API_KEY: string;
    conversation: {
      loading: boolean
      error?: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data?: any
    }
  }