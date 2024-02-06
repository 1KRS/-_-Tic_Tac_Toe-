import { useState } from 'react';
import EditButton from './EditButton';

const Player2 = ({ initialName = 'ΠΑΙΚΤΗΣ 2', symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
      </span>
      <EditButton
        onClick={() => setIsEditing((isEditing) => !isEditing)}
        isEditing={isEditing}
      />
    </>
  );
};
export default Player2;
