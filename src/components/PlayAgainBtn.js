import React from 'react';

const PlayAgainBtn = ({ endGame, message, onPlayAgain }) => {
  return (
    <div>
      <div className='message'>{message}</div>
      <div>
        {endGame && (
          <button className='play-again' onClick={onPlayAgain}>
            Play Again?
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayAgainBtn;
