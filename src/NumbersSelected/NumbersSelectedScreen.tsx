import NumberBox from "../NumberBox/NumberBox"
import '../css/NumbersSelectedScreen.css'
import { useState } from "react"

interface NumbersSelectedScreenProps {
    pickRandomNumbers: () => any,
    pickNewNumber: (n: number) => any,
    deselectPickedNumber: (n: number) => any,
    drawNumbers: () => any,
    resetLotery: () => any,
    runMultipleDraws: (numberOfDraws: number) => any,
    pickedNumbers: number[],
    allNumbers: number[],
    drawnNumbers: number[],
    hasDrawn: boolean,
    wonMoneyCurrentDraw: number,
    wonMoney: number,
    quickRunStats: {
        numberOfDraws: number,
        gamesWon: number,
        moneyWon: number,
        gamesWonPercentage: number,
    },
}

export default function NumbersSelectedScreen({ pickRandomNumbers, pickNewNumber, deselectPickedNumber, drawNumbers, resetLotery, runMultipleDraws, pickedNumbers, allNumbers, drawnNumbers, hasDrawn, wonMoneyCurrentDraw, wonMoney, quickRunStats }: NumbersSelectedScreenProps) {
    const [numberOfDraws, setNumberOfDraws] = useState(1)

    const handleNumberBoxClick = (n: number) => {
        if (pickedNumbers.includes(n)) {
            deselectPickedNumber(n)
        } else if (pickedNumbers.length >= 6) {
            window.alert("There's 6 numbers already selected.")
        } else {
            pickNewNumber(n)
        }
    }

    return (
        <div className="numbersSelectedScreen">
            <div className="allNumbers">
                {allNumbers.map((n) => (
                    <NumberBox
                        n={n}
                        picked={pickedNumbers.includes(n)}
                        drawn={drawnNumbers.includes(n)}
                        onClick={() => handleNumberBoxClick(n)} />
                ))}
            </div>
            <button className="luckyDipBtn" onClick={() => pickRandomNumbers()}>Lucky Dip</button>
            <button className="drawSelectedBtn" disabled={pickedNumbers.length !== 6} onClick={() => drawNumbers()}>Draw 6 Selected Numbers</button>
            <button className="resetBtn" disabled={!hasDrawn} onClick={() => resetLotery()}>Reset</button>
            <div>
                <span>Number Of Draws: </span>
                <input type={"number"} max={1000000} min={1} value={numberOfDraws} onChange={e => setNumberOfDraws(+e.target.value)} />
                <button className="quickRunBtn" onClick={() => runMultipleDraws(numberOfDraws)}>Quick Run</button>
            </div>
            <div>
                <p>Quick Run Stats:</p>
                <p>Number Of Runs: {quickRunStats.numberOfDraws}</p>
                <p>Quick Run Money Won: {quickRunStats.moneyWon}</p>
                <p>Quick Run Games Won: {quickRunStats.gamesWon}</p>
                <p>Won Games Out Of Runs: {quickRunStats.gamesWonPercentage.toFixed(2)}%</p>
            </div>
            <div>
                <p className="legendSpan">Selected: <div className="selectedLegend"></div></p>
                <p className="legendSpan">Correct: <div className="correctLegend"></div></p>
                <p className="legendSpan">Drawn and not selected: <div className="drawnAndNotSelectedLegend"></div></p>
            </div>
            <div>
                <span>Money Won In The Current Draw: {wonMoneyCurrentDraw}</span>
            </div>
            <div>
                <span>Money Won: {wonMoney}</span>
            </div>
        </div>
    )
}