import { useState } from "react";
import Question from "../Question/Question";
import Option from "../Option/Option";
import Finished from "../Finished/Finished";
import { useGlobalContext } from "../../context";

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const QuestionBox = () => {
  const { questions, index, setIndex, setScore } = useGlobalContext();
  const [finished, setFinished] = useState(false);

  const checkAnswer = (answer) => {
    // Answer is correct, increase score by one
    if (answer === questions[index].correct_answer) {
      setScore((score) => score + 1);
    }

    // There are some questions left
    if (index < questions.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setFinished(true);
    }
  };

  // Store answers on "answers" array as <Option/> component
  const answers = [
    ...questions[index].incorrect_answers.map((option, i) => (
      <Option checkAnswer={checkAnswer} content={option} key={i} />
    )),
  ];

  // Add correct answer at the end of the array
  answers.push(
    <Option
      checkAnswer={checkAnswer}
      key={4}
      content={questions[index].correct_answer}
    />
  );

  // Shuffle array, so correct answer won't be always on fourth position
  shuffle(answers);

  return (
    <section className="question__section">
      {finished ? (
        <Finished />
      ) : (
        <>
          <h2 className="question__count">
            Question {index + 1} / {questions.length}
          </h2>
          <section className="">
            <Question title={questions[index].question} />
            <div className="options">{answers}</div>
          </section>
        </>
      )}
    </section>
  );
};

export default QuestionBox;
