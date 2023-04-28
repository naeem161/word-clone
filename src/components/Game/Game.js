import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import UserInputs from '../UserInputs/UserInputs';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [input, setInput] = React.useState('')
  const [guesses, setGuesses] = React.useState([])

  console.info(guesses);

  return (
    <>
      <GuessResults />
      <UserInputs guesses={guesses} />
      <GuessInput input={input} setInput={setInput} guesses={guesses} setGuesses={setGuesses} />
    </>
  )
}

export default Game;
