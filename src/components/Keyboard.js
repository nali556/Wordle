import React from "react";

export default function Keyboard() {
  //Map through the array in order to display each letter on keyboard
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]; //Delete and enter separate

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <div>{key}</div>;
        })}
      </div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
}
