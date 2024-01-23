import { configureStore, createSlice, PayloadAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux'

interface UserState {
  name: string
  API_KEY: string
}

const initialUserState: UserState = {
  name: '',
  API_KEY: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string, API_KEY: string }>) => {
      state.name = action.payload.name
      state.API_KEY = action.payload.API_KEY
    },
  },
})

export const { setUser } = userSlice.actions

type RootState = {
  user: UserState
}

const rootReducer: Reducer<RootState> = combineReducers({
  user: userSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor, type RootState }

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
