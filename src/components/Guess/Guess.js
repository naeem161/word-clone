import React from "react";
import { range } from "../../utils";
import { checkGuess } from '../../game-helpers'
import { answer } from '../Game'

function Guess({ value }) {

  const cl = checkGuess(value, answer)

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className={`cell ${cl ? cl[num].status : undefined} `}>
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </>
  )
}

export default Guess;
