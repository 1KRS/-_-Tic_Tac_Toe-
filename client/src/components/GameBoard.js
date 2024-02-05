import { useState } from "react"

const GameBoard = () => {
  const [board, setBoard] = useState([[null, null, null], [null, null, null], [null, null, null]])

const handleClick = () => {
  
}

  return (
   <>
    <ol id='game-board'>
      {board.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((box, colIndex) => <li key={colIndex}>
            <button onClick={handleClick}>{box}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
   </>
  )
}
export default GameBoard