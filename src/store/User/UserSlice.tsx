import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  API_KEY: string;
}

const initialUserState: UserState = {
  name: '',
  API_KEY: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; API_KEY: string }>) => {
      state.name = action.payload.name;
      state.API_KEY = action.payload.API_KEY;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
