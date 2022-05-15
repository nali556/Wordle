import React, { useContext } from "react";
import { AppContext } from "../App.js";

export default function Key({ keyValue, bigKey }) {
  const { board, setBoard, currAttempt, setAttempt } = useContext(AppContext);
  const selectLetter = () => {
    if (keyValue === "ENTER") {
      if (currAttempt.letterPos !== 5) return;
      setAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else if (keyValue === "DELETE") {
        if(currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
        setBoard(newBoard)
        setAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
    } else {
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue;
      setBoard(newBoard);
      setAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}
