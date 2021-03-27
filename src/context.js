import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Reset quiz
  const startAgain = () => {
    setStarted(false);
    setQuestions([]);
    setIndex(0);
    setScore(0);
  };

  const startQuiz = (cat, diff) => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Can not fetch quesions");
        }
      })
      .then((data) => {
        setQuestions(data.results);
        setStarted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        started,
        questions,
        index,
        score,
        startQuiz,
        startAgain,
        setIndex,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
