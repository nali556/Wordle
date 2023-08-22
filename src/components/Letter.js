import React, { useContext } from "react";
import { AppContext } from "../App.js";

export default function Letter({ letterPos, attemptValue }) {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptValue][letterPos];
  console.log(board)
  const correct = correctWord[letterPos].toUpperCase() === letter.toUpperCase()
  const almost = !correct && letter !== "" && correctWord.includes(letter.toLowerCase()) 
  const letterState = currAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error")

  return <div className="letter" id={letterState}> {letter}</div>;
}
