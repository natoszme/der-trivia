import React from "react";

export default function Score({ score, setPlayAgain }) {
  return <div>
    <p>{score}</p>
    <button onClick={setPlayAgain}>Jugar de nuevo</button>
  </div>;
}