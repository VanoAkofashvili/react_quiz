import "./App.css";


import StartingForm from "./components/StartingForm/StartingForm";
import {useState} from "react";
import Spinner from "./components/Spinner/Spinner";
import Question from "./components/Question/Question";
import QuestionBox from "./components/QuestionBox/QuestionBox";

const url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy";

function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")

  const startQuiz = ( cat, diff) => {

    setLoading(true)
    fetch(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setQuestions(data.results)
        setLoading(false)
        setStarted(true)
      })
      .catch(error => {
        console.log("Error")
        console.log(error)
      })
  }

  if (!started) {
    return <main className="App">
      <StartingForm submitHandler={startQuiz}/>
    </main>

  }


  return (
    <main className="App">
      {loading ? <Spinner/> :
        <QuestionBox questions={questions} index={index} setIndex={setIndex}/>}
    </main>
  );
}

export default App;
