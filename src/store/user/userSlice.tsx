import { createSlice } from '@reduxjs/toolkit'
import { generateTextContent } from './dispatchers.user'
import { UserState } from '../../types/responses'

const initialUserState: UserState = {
  name: '',
  API_KEY: '',
  conversation: {
    loading: false,
    error: undefined,
    data: []
  },
  proxy: undefined,
  theme: 'dark'
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.API_KEY = action.payload.API_KEY
      state.proxy = action.payload.proxy
    },
    clearUser: (state) => {
      state.name = initialUserState.name
      state.API_KEY = initialUserState.API_KEY
      state.conversation = initialUserState.conversation
      state.proxy = initialUserState.proxy
    },
    clearChat: (state) => {
      state.conversation = initialUserState.conversation
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateTextContent.pending, (state, action) => {
        if (!state.conversation) {
          state.conversation = initialUserState.conversation
        }

        state.conversation.loading = true
        state.conversation.error = undefined

        const outboundTimestamp = new Date().toISOString()

        state?.conversation?.data?.push({
          type: 'outbound',
          message: action.meta.arg.prompt,
          timestamp: outboundTimestamp,
          role: 'user'
        })
      })
      .addCase(generateTextContent.fulfilled, (state, action) => {
        state.conversation.loading = false

        const inboundTimestamp = new Date().toISOString()

        state?.conversation?.data?.push({
          type: 'inbound',
          message: action.payload,
          timestamp: inboundTimestamp,
          role: 'model'
        })
      })
      .addCase(generateTextContent.rejected, (state, action) => {
        state.conversation.loading = false
        state.conversation.error = action.error.message || 'Error generating content'
      })
  },
})

export const { setUser, clearUser, clearChat, setTheme } = userSlice.actions
export default userSlice.reducer
