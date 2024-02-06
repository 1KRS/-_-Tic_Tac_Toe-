import { useState } from 'react';

const GameBoard = ({ playerOne, setPlayerOne }) => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (rowIndex, colIndex) => {
    setBoard((prevBoard) => {
      const symbol = playerOne ? 'O' : 'X';

      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });
    setPlayerOne((playerOne) => !playerOne);
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
