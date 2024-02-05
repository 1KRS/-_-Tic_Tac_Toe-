import { useState } from 'react';

const Player1 = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
      <span className="player">
        {isEditing ? (
          <input type="text" />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
    </>
  );
};
export default Player1;
