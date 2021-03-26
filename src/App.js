import "./App.css";

import StartingForm from "./components/StartingForm/StartingForm";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import { useGlobalContext } from "./context";

function App() {
  const {
    started,
    startQuiz,
    loading,
    questions,
    setScore,
    index,
    setIndex,
    score,
    startAgain,
  } = useGlobalContext();
  if (!started) {
    return (
      <main className="App">
        <StartingForm submitHandler={startQuiz} />
      </main>
    );
  }

  return (
    <main className="App">
      <QuestionBox
        questions={questions}
        setScore={setScore}
        index={index}
        setIndex={setIndex}
        score={score}
        startAgain={startAgain}
      />
    </main>
  );
}

export default App;
