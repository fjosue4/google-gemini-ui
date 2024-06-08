import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'
import { textResponse } from '../../types/responses'

export const generateTextContent = createAsyncThunk(
  'user/generateTextContent',
  async ({ prompt }: { prompt: string }, thunkApi) => {
    const currentState = thunkApi.getState() as RootState
    const { API_KEY: apiKey, proxy, conversation } = currentState.user

    const conversationParts = conversation.data && conversation.data.length > 0
      ? conversation.data.slice(0, -1).map(entry => entry.message)
      : []

    const allParts = [...conversationParts, prompt]

    const requestBody = {
      contents: [{
        parts: allParts.map(text => ({ text }))
      }]
    }

    const response = await fetch(
      `${proxy ? proxy : ''}https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      }
    )

    const data: textResponse = await response.json()

    const aiAnswerText = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (aiAnswerText === undefined) {
      throw Error(data?.error?.message)
    }

    return aiAnswerText
  }
)
