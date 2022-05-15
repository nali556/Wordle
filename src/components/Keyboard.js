import React, {useCallback, useEffect, useContext} from "react";
import Key from "./Key";
import { AppContext } from "../App";


export default function Keyboard() {
const {onEnter, onDelete, onSelectLetter} = useContext(AppContext);

  //Map through the array in order to display each letter on keyboard
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]; //Delete and enter separate

  const handleKeyboard = useCallback((event) =>{ //
    if (event.key === "Enter"){
      onEnter()
    }else if(event.key === "Backspace"){
      onDelete()
    }else{
     keys1.forEach((key)=> {
       if (event.key.toUpperCase() === key){
         onSelectLetter(key)
       }
     })
     keys2.forEach((key)=> {
      if (event.key.toUpperCase() === key){
        onSelectLetter(key)
      }
    })
    keys3.forEach((key)=> {
      if (event.key.toUpperCase() === key){
        onSelectLetter(key)
      }
    })
  }
  })
  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])


  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey/>
        {keys3.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue={"DELETE"} bigKey/>
      </div>
    </div>
  );
}
