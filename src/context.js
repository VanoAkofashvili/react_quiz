import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isError, setIsError] = useState(false);

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
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code === 0) {
          setQuestions(data.results);
          setStarted(true);
        } else {
          throw new Error("Can not fetch questions");
        }
      })
      .catch((error) => {
        setIsError(true);
        setStarted(true);
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
        isError,
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
