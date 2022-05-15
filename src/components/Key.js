import React, { useContext } from "react";
import { AppContext } from "../App.js";

export default function Key({ keyValue, bigKey }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}
