import { useState } from 'react';

const GameBoard = ({ turnLogs, setTurnLogs, symbol }) => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (rowIndex, colIndex) => {

    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });

    setTurnLogs(() => {
      const newTurn = [
        `Player ${symbol} played at position { ${rowIndex + 1}-${colIndex + 1} }`,
      ];
      const updatedLog = [...newTurn, ...turnLogs];
      return updatedLog;
    });
  };

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((box, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleClick(rowIndex, colIndex)}>
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
