import { configureStore } from '@reduxjs/toolkit'

import statesReducer from './reducers/states'

export const store = configureStore({
  reducer: {
    states: statesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
