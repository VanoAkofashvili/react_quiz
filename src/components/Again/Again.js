import React from "react";

export default function Again({ score, startAgain }) {
  return (
    <div className="try-again__container">
      <h2 className="score">Score: {score}</h2>
      <button className="btn" onClick={startAgain}>
        Try Again
      </button>
    </div>
  );
}
