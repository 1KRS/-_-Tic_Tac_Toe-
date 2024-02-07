import { useState } from 'react';
import EditButton from './EditButton';

const Player = ({ id, initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(
    initialName ? initialName : id === 'O' ? 'PLAYER 1' : 'PLAYER 2'
  );

  return id === 'O' ? (
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
  ) : (
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
export default Player;
