import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import NumbersSelectedScreen from './NumbersSelected/NumbersSelectedScreen';
import { Dispatch } from 'redux';
import { RootState } from './store/store';
import { pickRandomNumbers, deselectPickedNumber, pickNewNumber, drawNumbers, resetLotery, runMultipleDraws } from './store/lotterySlice';
import * as config from './config'


const App: React.FC = () => {

  const allNumbers = config.DEFAULT_NUMBERS_ARRAY
  const drawnNumbers = useSelector((state: RootState) => state.lotteryReducer.drawnNumbers)
  const pickedNumbers = useSelector((state: RootState) => state.lotteryReducer.pickedNumbers)
  const hasDrawn = useSelector((state: RootState) => state.lotteryReducer.hasDrawn)
  const wonMoneyCurrentDraw = useSelector((state: RootState) => state.lotteryReducer.wonMoneyCurrentDraw)
  const wonMoney = useSelector((state: RootState) => state.lotteryReducer.wonMoney)
  const quickRunStats = useSelector((state: RootState) => state.lotteryReducer.quickRunStats)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <NumbersSelectedScreen
        pickRandomNumbers={() => dispatch(pickRandomNumbers())}
        pickNewNumber={(n: number) => dispatch(pickNewNumber(n))}
        deselectPickedNumber={(n: number) => dispatch(deselectPickedNumber(n))}
        drawNumbers={() => dispatch(drawNumbers())}
        resetLotery={() => dispatch(resetLotery())}
        runMultipleDraws={(numberOfDraws: number) => dispatch(runMultipleDraws(numberOfDraws))}
        pickedNumbers={pickedNumbers}
        allNumbers={allNumbers}
        drawnNumbers={drawnNumbers}
        hasDrawn={hasDrawn}
        wonMoneyCurrentDraw={wonMoneyCurrentDraw}
        wonMoney={wonMoney}
        quickRunStats={quickRunStats}
      />
    </div>
  );
}

export default App;
