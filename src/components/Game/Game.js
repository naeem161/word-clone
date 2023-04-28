import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import UserInputs from '../UserInputs/UserInputs';


// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {


  const [guesses, setGuesses] = React.useState([])

  console.info('array ', guesses);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess])
  }

  return (
    <>
      <UserInputs guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  )
}

export default Game;
