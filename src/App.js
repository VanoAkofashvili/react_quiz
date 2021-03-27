import React from "react";
import "./App.css";

import StartingForm from "./components/StartingForm/StartingForm";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import { useGlobalContext } from "./context";

function App() {
  const { started } = useGlobalContext();

  // Starting page
  if (!started) {
    return (
      <main className="App">
        <StartingForm />
      </main>
    );
  }

  return (
    <main className="App">
      <QuestionBox />
    </main>
  );
}

export default App;
