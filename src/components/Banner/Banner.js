import React from "react";

function Banner({ status, correctAnswer, numOfGuesses }) {


  if (status === 'won') {
    return (
      <>

        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      </>
    )
  }


  if (status === 'loss') {
    return (
      <>


        <div class="sad banner">
          <p>Sorry, the correct answer is <strong> {correctAnswer} </strong>.</p>
        </div>
      </>
    )
  }

  // return (
  //   <>

  //     <div class="happy banner">
  //       <p>
  //         <strong>Congratulations!</strong> Got it in
  //         <strong>3 guesses</strong>.
  //       </p>
  //     </div>
  //     <div class="sad banner">
  //       <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  //     </div>
  //   </>
  // )
}

export default Banner;
