import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import UserInputs from '../UserInputs/UserInputs';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Banner from '../Banner/Banner';


// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState('running')


  console.info('array ', guesses);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)
    if (tentativeGuess === answer) {
      setStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('loss')
    }


  }



  return (
    <>
      {status}
      <UserInputs guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
      />

      <Banner status={status} correctAnswer={answer} numOfGuesses={guesses.length} />
    </>
  )
}

export default Game;
