import React, {useContext} from "react";
import { AppContext } from "../App.js";

export default function Key({ keyValue, bigKey }) {
    const { board, setBoard } = useContext(AppContext);
    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[0][0] = keyValue
        setBoard(newBoard)
    }
  return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyValue}</div>;
}
