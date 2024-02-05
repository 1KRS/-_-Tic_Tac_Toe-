import Player1 from './components/Player1';
import Player2 from './components/Player2';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player1 name="ΠΑΙΚΤΗΣ 1" symbol="O" />
          </li>
          <li>
            <Player2 name="ΠΑΙΚΤΗΣ 2" symbol="X" />
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
