import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as config from '../config'
import drawRandomNumbers from '../drawingRandomNumbers/drawRandomNumbers'
import calculateMoneyWonFromDraw from './calculations'

export interface LotteryState {
    drawnNumbers: number[]
    remainingNumbers: number[]
    pickedNumbers: number[]
    hasDrawn: boolean,
    wonMoney: number,
    wonMoneyCurrentDraw: number,
    quickRunStats: {
        numberOfDraws: number,
        gamesWon: number,
        moneyWon: number,
        gamesWonPercentage: number,
    }
}

const initialState: LotteryState = {
    drawnNumbers: [],
    remainingNumbers: config.DEFAULT_NUMBERS_ARRAY,
    pickedNumbers: [],
    hasDrawn: false,
    wonMoney: 0,
    wonMoneyCurrentDraw: 0,
    quickRunStats: {
        numberOfDraws: 0,
        gamesWon: 0,
        moneyWon: 0,
        gamesWonPercentage: 0,
    }
}

export const lotterySlice = createSlice({
    name: 'lottery',
    initialState,
    reducers: {
        pickRandomNumbers: (state) => {
            state.pickedNumbers = drawRandomNumbers()
        },
        pickNewNumber: (state, action: PayloadAction<number>) => {
            state.pickedNumbers = state.pickedNumbers.concat(action.payload)
        },
        deselectPickedNumber: (state, action: PayloadAction<number>) => {
            state.pickedNumbers = state.pickedNumbers.filter((n) => n !== action.payload)
        },
        drawNumbers: (state) => {
            state.drawnNumbers = drawRandomNumbers()
            const wonMoneyCurrentDraw = calculateMoneyWonFromDraw(state.pickedNumbers, state.drawnNumbers)
            state.wonMoneyCurrentDraw = wonMoneyCurrentDraw
            state.wonMoney += wonMoneyCurrentDraw
            state.hasDrawn = true
        },
        runMultipleDraws: (state, action: PayloadAction<number>) => {
            let wonMoneyCurrentDraw = 0
            let gamesWon = 0
            for (let i = 0; i < action.payload; i++) {
                const pickedNumbers = drawRandomNumbers()
                const drawnNumbers = drawRandomNumbers()
                const wonMoney = calculateMoneyWonFromDraw(pickedNumbers, drawnNumbers)
                if (wonMoney > 0) gamesWon++
                wonMoneyCurrentDraw += wonMoney
            }
            state.quickRunStats = {
                numberOfDraws: action.payload,
                gamesWon: gamesWon,
                moneyWon: wonMoneyCurrentDraw,
                gamesWonPercentage: (gamesWon / action.payload) * 100,
            }
            state.wonMoneyCurrentDraw = wonMoneyCurrentDraw
            state.wonMoney += wonMoneyCurrentDraw
            state.hasDrawn = true
        },
        resetLotery: (state) => initialState,
    },
})

export const { pickRandomNumbers, pickNewNumber, deselectPickedNumber, drawNumbers, resetLotery, runMultipleDraws } = lotterySlice.actions

export default lotterySlice.reducer