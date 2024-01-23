import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
