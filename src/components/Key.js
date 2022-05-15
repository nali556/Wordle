import React, {useContext} from "react";
import { AppContext } from "../App.js";

export default function Key({ keyValue, bigKey }) {
    const { board, setBoard, currAttempt, setAttempt } = useContext(AppContext);
    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue
        setBoard(newBoard)
        setAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    }
  return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyValue}</div>;
}
