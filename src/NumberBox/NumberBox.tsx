import React from 'react'
import '../css/NumberBox.css'

interface NumberBoxProps {
    n: number,
    picked: boolean,
    drawn: boolean,
    onClick: () => any,
}

export default function NumberBox({ n, picked, drawn, onClick }: NumberBoxProps) {
    let numberBoxClasses = "numberBox"
    if (drawn && picked) {
        numberBoxClasses = numberBoxClasses.concat(" correct")
    } else if (drawn && !picked) {
        numberBoxClasses = numberBoxClasses.concat(" drawn")
    } else if (picked) {
        numberBoxClasses = numberBoxClasses.concat(" selected")
    }
    return (
        <button onClick={() => onClick()} className={numberBoxClasses}>
            <span className="numberBoxSpan">{n}</span>
        </button >
    )
}