import { useState } from 'react';
import EditButton from './EditButton';

const Player1 = ({ initialName = 'ΠΑΙΚΤΗΣ 1', symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <>
      <EditButton
        onClick={() => setIsEditing((isEditing) => !isEditing)}
        isEditing={isEditing}
      />
      <span className="player">
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
        <span className="player-symbol">{symbol}</span>
      </span>
    </>
  );
};
export default Player1;
