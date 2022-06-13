import { configureStore } from '@reduxjs/toolkit'
import lotteryReducer from './lotterySlice'

export const store = configureStore({
    reducer: {
        lotteryReducer: lotteryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch