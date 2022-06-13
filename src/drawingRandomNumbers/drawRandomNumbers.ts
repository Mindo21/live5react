import * as config from '../config'

export default function drawRandomNumbers() {
    let lotteryNumbers = config.DEFAULT_NUMBERS_ARRAY
    let drawnNumbers: number[] = []
    for (let i = 0; i < 6; i++) {
        const min = 0;
        let max = lotteryNumbers.length;
        // get random index
        const randomizedIndex = Math.floor(Math.random() * (max - min) + min)
        // add to drawn numbers and delete that number from the lottery array
        drawnNumbers = drawnNumbers.concat(lotteryNumbers[randomizedIndex])
        lotteryNumbers.slice(randomizedIndex)
    }
    return drawnNumbers
}