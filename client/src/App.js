import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

function App() {
  const [turnLogs, setTurnLogs] = useState([]);
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [board, setBoard] = useState(initialBoard);
  const [players, setPlayers] = useState({O: 'Player 1', X: 'Player 2'})

  const turnsPlayed = turnLogs.length;
  const symbol = turnsPlayed % 2 === 0 ? 'X' : 'O';

  const handleClick = (rowIndex, colIndex) => {
    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });

    setTurnLogs((prevTurnLogs) => {
      const newTurn = [
        `Player ${symbol} played at position { ${rowIndex + 1}-${
          colIndex + 1
        } }`,
      ];
      const updatedLog = [...newTurn, ...prevTurnLogs];
      return updatedLog;
    });
  };

  const handleChangePlayerName = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return{
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  const handleRematch = () => {
    setTurnLogs([])
    setBoard(initialBoard)
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstBox = board[combination[0].row][combination[0].column];
    const secondBox = board[combination[1].row][combination[1].column];
    const thirdBox = board[combination[2].row][combination[2].column];

    if (firstBox && firstBox === secondBox && firstBox === thirdBox) {
      winner = players[firstBox];
      console.log(players);
    }
  }

  let isADraw = turnsPlayed === 9 && !winner

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <li className={symbol === 'O' ? 'active' : ''}>
            <Player symbol="O" handleChangePlayerName={handleChangePlayerName}/>
          </li>
          <li className={symbol === 'X' ? 'active' : ''}>
            <Player symbol="X" handleChangePlayerName={handleChangePlayerName}/>
          </li>
        </ol>
        {(winner || isADraw) && <GameOver winner={winner} handleRematch={handleRematch}/>}
        <GameBoard
          symbol={symbol}
          turnLogs={turnLogs}
          setTurnLogs={setTurnLogs}
          board={board}
          setBoard={setBoard}
          handleClick={handleClick}
        />
      </div>
      <Log turnLogs={turnLogs} />
    </main>
  );
}

export default App;
