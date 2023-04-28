import React from "react";

function GuessInput({ handleSubmitGuess }) {

  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (e) => {
    if (tentativeGuess.length === 0 || tentativeGuess.length !== 5) {
      e.preventDefault()
      window.alert('Please enter 5 characters !')
      return
    }

    e.preventDefault()

    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')

  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess((e.target.value).toUpperCase())}
      />
    </form>
  )
}

export default GuessInput;
