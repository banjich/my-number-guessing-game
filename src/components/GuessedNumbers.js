import React from 'react';

const GuessedNumbers = ({ guessedNumbers }) => {
  return (
    <div>
      <div className='guessed-numbers'>
        Guessed numbers:
        {guessedNumbers.map((number, index) => {
          return (
            <div className='mapped-numbers' key={index}>
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuessedNumbers;
