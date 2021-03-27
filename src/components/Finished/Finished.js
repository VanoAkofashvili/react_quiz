import React, { useState } from "react";
import { useGlobalContext } from "../../context";

export default function Finished() {
  const { score, startAgain, questions } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="try-again-container">
        <h2 className="score">Score: {score}</h2>
        <button className="btn" onClick={startAgain}>
          Try Again
        </button>
        <div className="correct-answers-container">
          <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
            Correct Answers
          </button>

          <div className={`${isModalOpen ? "modal modal--show" : "modal"}`}>
            <ul>
              {questions.map((item, i) => {
                return (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: `${item.question} / <span>${item.correct_answer}</span>`,
                    }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
