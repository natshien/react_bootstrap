/* Selecting up to 5 questions from selected by user category, user clicks one of two answers and goes to next question.
After last question is answered it should show the button 'see comparison'
 */

import React, { useState, useEffect } from 'react';
import { questionsDB, answersDB } from '../mockupDB.js/questionsDB';

const AnswerQuestions = () => {

  //const [questions, setQuestions] = useState(questionsDB);
  let questions = questionsDB;

  console.log(questions);

  let askForm = questions.map((question) => {

    return (<div className="askBox">
      <h5>{question.questionText}</h5>
      <form>
        <input type="radio" id="ansA" value={question.answerA}></input> <label for="ansA">{question.answerA}</label><br />
        <input type="radio" id="ansB" value={question.answerB}></input> <label for="ansB">{question.answerB}</label><br />
        <button type="submit">Next</button>
      </form>
    </div>
    )
  });


  return (
    <div>
      Hello React
            {askForm}
    </div>
  )

};

export default AnswerQuestions;