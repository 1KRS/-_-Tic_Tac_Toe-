import { useState } from 'react';

const Player2 = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <input type="text" value={name}/>
        ) : (
          <span className="player-name">{name}</span>
        )}
      </span>
      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
    </>
  );
};
export default Player2;
