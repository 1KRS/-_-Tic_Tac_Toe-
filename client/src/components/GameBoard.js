import { useState } from 'react';

const GameBoard = ({ turnLogs, setTurnLogs, symbol, board, setBoard, handleClick }) => {

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((box, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleClick(rowIndex, colIndex)} disabled={box !== null}>
                    {box}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};
export default GameBoard;
