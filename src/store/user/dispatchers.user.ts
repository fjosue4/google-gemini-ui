import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'
import { textResponse } from '../../types/responses'

export const generateTextContent = createAsyncThunk(
  'user/generateTextContent',
  async ({ prompt }: { prompt: string }, thunkApi) => {
    const currentState = thunkApi.getState() as RootState
    const apiKey = currentState.user.API_KEY

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      )

      const data: textResponse = await response.json()

      const aiAnswerText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

      return aiAnswerText
  }
)

