import * as config from '../config'

export default function calculateMoneyWonFromDraw(pickedNumbers: number[], drawnNumbers: number[]) {
    let numbersGuessedCount = 0
    for (let i = 0; i < pickedNumbers.length; i++) {
        if (drawnNumbers.includes(pickedNumbers[i])) {
            numbersGuessedCount++
        }
    }
    return calculateMoneyWonFromNumberOfGuessedNumbers(numbersGuessedCount)
}

function calculateMoneyWonFromNumberOfGuessedNumbers(numbersGuessedCount: number) {
    return config.WINNING_RULES[numbersGuessedCount]
}