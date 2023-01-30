import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const middleware = getDefaultMiddleware().concat(logger)

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
