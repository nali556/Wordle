import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words";

export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = "right"
  
  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words)
    })
  })

  const onSelectLetter = (keyValue) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue;
    setBoard(newBoard);
    setAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setAttempt, onSelectLetter, onDelete, onEnter, correctWord }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}
