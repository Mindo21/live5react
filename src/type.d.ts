interface IDrawnNumber {
    id: number  // from 0 to 5
    n: number   // randomly drawn number
}

type DrawnNumbersState = {
    drawnNumbers: IDrawnNumber[]
}

type DrawnNumbersAction = {
    type: string
    drawnNumber?: IDrawnNumber
}

type DispatchType = (args: DrawnNumbersAction) => DrawnNumbersAction