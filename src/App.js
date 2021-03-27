import React from "react";
import "./App.css";

import StartingForm from "./components/StartingForm/StartingForm";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import { useGlobalContext } from "./context";

function App() {
  const { started, isError } = useGlobalContext();

  if (started) {
    return (
      <main className="App">
        {isError ? (
          "Something went wrong, Please try again later"
        ) : (
          <QuestionBox />
        )}
      </main>
    );
  }

  // Starting Form
  else {
    return (
      <main className="App">
        <StartingForm />
      </main>
    );
  }
}

export default App;
