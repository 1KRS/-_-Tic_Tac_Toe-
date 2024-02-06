import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player1 from './components/Player1';
import Player2 from './components/Player2';

function App() {
  const [playerOne, setPlayerOne] = useState(true);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <li className={playerOne ? 'active' : ''}>
            <Player1 initialName="ΠΑΙΚΤΗΣ 1" symbol="O" />
          </li>
          <li className={playerOne ? '' : 'active'}>
            <Player2 initialName="ΠΑΙΚΤΗΣ 2" symbol="X" />
          </li>
        </ol>
        <GameBoard playerOne={playerOne} setPlayerOne={setPlayerOne} />
      </div>
    </main>
  );
}

export default App;
