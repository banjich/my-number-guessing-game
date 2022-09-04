import React, { useState } from 'react';
import icon from '../assets/thinking-icon.png';
import InputForm from '../components/InputForm';
import GuessedNumbers from './GuessedNumbers';
import PlayAgainBtn from './PlayAgainBtn';

let secretNumber = Math.floor(Math.random() * 100) + 1;

const Game = () => {
  const [guessedNumber, setGuessedNumber] = useState('');
  const [message, setMessage] = useState('');
  const [roundCounter, setRoundCounter] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [guessedNumbers, setGuessedNumbers] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const logo = icon;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      guessedNumber <= 0 ||
      guessedNumber > 100 ||
      guessedNumber === undefined
    ) {
      setGuessedNumber('');
      alert('Please enter a number between 1 and 100!');
      return;
    }
    if (guessedNumbers.includes(guessedNumber)) {
      setGuessedNumber('');
      setMessage('You already guessed this number. Pick another!');
      return;
    }
    setRoundCounter(roundCounter - 1);
    if (secretNumber == guessedNumber) {
      setMessage('You Won!');
      setDisabled(true);
      setEndGame(true);
    }
    if (guessedNumber < secretNumber) setMessage('Oops, that was too low!');
    else if (guessedNumber > secretNumber)
      setMessage('Oops, that was too high!');
    if (roundCounter <= 1 && guessedNumber != secretNumber) {
      setMessage('You Lost!');
      setDisabled(true);
      setEndGame(true);
    }
    setGuessedNumbers([...guessedNumbers, guessedNumber]);
    setGuessedNumber('');
  };

  const onPlayAgain = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    setGuessedNumber('');
    setMessage('');
    setRoundCounter(10);
    setDisabled(false);
    setGuessedNumbers([]);
    setEndGame(false);
  };

  return (
    <div>
      <img src={logo} width='100px' alt='logo'></img>
      <h3>Guess the number between 1 and 100</h3>
      <InputForm
        disabled={disabled}
        guessedNumber={guessedNumber}
        setGuessedNumber={setGuessedNumber}
        onSubmit={onSubmit}
      />
      <div className='moves-left'> Moves left: {roundCounter}</div>
      <GuessedNumbers guessedNumbers={guessedNumbers} />
      <PlayAgainBtn
        endGame={endGame}
        message={message}
        onPlayAgain={onPlayAgain}
      />
      {!endGame && (
        <button
          className='reset-btn'
          onClick={onPlayAgain}
          disabled={!disabled}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Game;
