import { useState } from 'react';

const Player1 = ({ initialName = 'ΠΑΙΚΤΗΣ 1', symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
      </span>
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </>
  );
};
export default Player1;
