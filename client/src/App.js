import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function App() {
  const [turnLogs, setTurnLogs] = useState(['']);

  const turnsPlayed = turnLogs.length;
  const symbol = turnsPlayed % 2 === 0 ? 'X' : 'O';

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <li className={symbol === 'O' ? 'active' : ''}>
            <Player id='O' symbol='O'/>
          </li>
          <li className={symbol === 'X' ? 'active' : ''}>
            <Player id='X' symbol='X'/>
          </li>
        </ol>
        <GameBoard
          symbol={symbol}
          turnLogs={turnLogs}
          setTurnLogs={setTurnLogs}
        />
      </div>
      <Log turnLogs={turnLogs} />
    </main>
  );
}

export default App;
