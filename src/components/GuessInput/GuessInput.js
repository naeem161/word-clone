import React from "react";
import { NUM_OF_GUESSES_ALLOWED as allowedGuesses } from '../../constants'

function GuessInput({ input, setInput, guesses, setGuesses }) {

  const handleSubmit = (e) => {
    if (input.length === 0 || input.length !== 5) {
      e.preventDefault()
      window.alert('Please enter 5 characters !')
      return
    }

    e.preventDefault()
    console.log({ guess: input });
    setGuesses([...guesses, input])
    setInput('')

  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        disabled={guesses.length === allowedGuesses}
        value={input}
        onChange={(e) => setInput((e.target.value).toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;
