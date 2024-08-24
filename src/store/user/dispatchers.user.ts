import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'
import { textResponse } from '../../types/responses'

export const generateTextContent = createAsyncThunk(
  'user/generateTextContent',
  async ({ prompt, base64File }: { prompt: string, base64File?: string | null }, thunkApi) => {
    const currentState = thunkApi.getState() as RootState
    const { API_KEY: apiKey, proxy, conversation, selectedModel } = currentState.user

    const conversationParts = conversation.data && conversation.data.length > 0
      ? conversation.data.slice(0, -1).map(entry => ({ text: entry.message }))
      : []

    const allParts = [...conversationParts, { text: prompt }]

    const base64TextPart = base64File ? { text: base64File } : {}

    const parts = [
      ...allParts.map(part => ({ text: part.text })),
      ...base64File ? [base64TextPart] : []
    ]

    const requestBody = {
      contents: [{ parts }]
    }

    console.log('Request Body:', requestBody)

    const response = await fetch(
      `${proxy ? proxy : ''}https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`,
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
      throw new Error(data?.error?.message)
    }

    return aiAnswerText
  }
)
