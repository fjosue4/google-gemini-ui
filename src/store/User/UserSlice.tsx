/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { generateTextContent } from './dispatchers.user';
import { UserState } from 'types/responses';

const initialUserState: UserState = {
  name: '',
  API_KEY: '',
  conversation: {
    loading: false,
    error: undefined,
    data: undefined
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.API_KEY = action.payload.API_KEY;
    },
    clearUser: (state) => {
        console.log('test')
        state.name = initialUserState.name
        state.API_KEY = initialUserState.API_KEY
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(generateTextContent.pending, (state) => {
      if (state.conversation) {
        state.conversation.loading = true;
        state.conversation.error = undefined;
      }
    })
    .addCase(generateTextContent.fulfilled, (state, action) => {
      if (state.conversation) {
        state.conversation.loading = false;
        state.conversation.data = action.payload;
      }
    })
    .addCase(generateTextContent.rejected, (state, action) => {
      if (state.conversation) {
        state.conversation.loading = false;
        state.conversation.error = action.error.message || 'Error generating content';
      }
    });
  
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
