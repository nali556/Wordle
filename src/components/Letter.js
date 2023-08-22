import React, { useContext } from "react";
import { AppContext } from "../App.js";

export default function Letter({ letterPos, attemptValue }) {
  const { board, correctWord } = useContext(AppContext);
  const letter = board[attemptValue][letterPos];

  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== "" && correctWord.includes(letter) 

  const letterState = correct ? "correct" : almost ? "almost" :"error"

  return <div className="letter" id={letterState}> {letter}</div>;
}
