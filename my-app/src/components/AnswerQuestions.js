/* Selecting up to 5 questions from selected by user category, user clicks one of two answers and goes to next question.
After last question is answered it should show the button 'see comparison'
 */
 
import React, { useState, useEffect } from 'react';
import { questionsDB } from '../mockupDB.js/questionsDB';
//import SlideQuestion from './SlideQuestion';



const AnswerQuestions = () => {
 
 const [questions, setQuestions] = useState([]);
 const [index, setIndex] = useState(0);

  useEffect(()=>{
    setQuestions(questionsDB);
  }, []);
  
  console.log(questions);

  const getMap = () => questions.map((question, index) => {
    return (
    <div className="askBox" index={question[index]}>
        <h5>{question.questionText}</h5>
        <form>
          <input type="radio" id={"ansA" + index} name="answer" value={question.answerA}></input> <label for="ansA">{question.answerA}</label><br />
          <input type="radio" id={"ansB" + index}  name="answer" value={question.answerB}></input> <label for="ansB">{question.answerB}</label><br />
          <button>Prev</button>
          <button type="submit">Next</button>
        </form>
    </div>
    )});
 
  return  (
  <div className="questions">
    {getMap()}
  </div>
  )
    
};
 
 
export default AnswerQuestions;