export const MAX_NUMBERS = 6
export const HIGHEST_LOTTERY_NUMBER = 59
export const DEFAULT_NUMBERS_ARRAY = Array.from(Array(HIGHEST_LOTTERY_NUMBER).keys()).map((n) => n + 1)
interface WINNING_RULESType {
    [n: number]: number
}
export const WINNING_RULES: WINNING_RULESType = {
    0: 0,
    1: 0,
    2: 0,
    3: 50,
    4: 100,
    5: 200,
    6: 500,
}