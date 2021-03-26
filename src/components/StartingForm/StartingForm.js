import React, {useRef} from "react";

import {categories} from "../../categories";

export default function StartingForm({submitHandler}) {
  const categoryRef = useRef(null)
  const difficultyRef = useRef(null)
  return (
    <form className="starting-form">
      <fieldset>
        <legend>
          To start a quiz, please select a category and difficulty level
        </legend>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryRef}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" ref={difficultyRef}>
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <button onClick={(e) => {
            e.preventDefault()
            submitHandler(categoryRef.current.value, difficultyRef.current.value)
          }} className="btn">Start Quiz</button>
        </div>
      </fieldset>
    </form>
  );
}
