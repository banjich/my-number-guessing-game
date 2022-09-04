import React from 'react';

const InputForm = ({ disabled, guessedNumber, setGuessedNumber, onSubmit }) => {
  return (
    <div className='input-form'>
      <form>
        <div className='input-with-btn'>
          <input
            disabled={disabled}
            type='number'
            placeholder='Enter a number'
            onChange={(e) => {
              setGuessedNumber(e.target.value);
            }}
            value={guessedNumber}
          ></input>
          <button
            disabled={disabled}
            type='submit'
            className='guess-btn'
            onClick={onSubmit}
          >
            Guess
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
