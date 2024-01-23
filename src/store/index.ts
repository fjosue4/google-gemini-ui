import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './User/UserSlice';
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux'

interface UserState {
  name: string
  API_KEY: string
}




type RootState = {
  user: UserState
}

const rootReducer: Reducer<RootState> = combineReducers({
  user: userReducer,
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
