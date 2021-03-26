import Question from "../Question/Question";
import Option from "../Option/Option";

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
}

const QuestionBox = ({questions, index, setIndex}) => {
  const answers = [...questions[index].incorrect_answers.map((option, i) => <Option content={option} key={i}/>)]
  answers.push(<Option key={4} content={questions[index].correct_answer}/>)
  shuffle(answers)

  return <section className="question__box">
    <Question title={questions[index].question}/>
    <div className="options">

    {answers}
    </div>
  </section>
}

export default QuestionBox