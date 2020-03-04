/* Selecting up to 5 questions from selected by user category, user clicks one of two answers and goes to next question.
After last question is answered it should show the button 'see comparison'
 */
 
import React, { useState, useEffect } from 'react';
import { questionsDB } from '../mockupDB.js/questionsDB';
import SlideQuestion from './SlideQuestion';



const AnswerQuestions = () => {
 
 const [questions, setQuestions] = useState([]);
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  useEffect(()=>{
    setQuestions(questionsDB);//filter(category)
    setCurrentQuestionIndex(0);
  }, []);
  
  console.log(questions);

  // func goToNext botton onClick - checking if 
  // func goToPrev = botton onClick

  const goToNext = (answer) => {
    console.log(answer);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
    // conditional rendering -1 = message or the component
    //{getMap()[currentQuestionIndex]} 
    
    let exists = questions.length ? <SlideQuestion 
    question={questions[currentQuestionIndex]} 
    goToNext={goToNext}
   /> : '';
   
  return  (
  <div className="questions">
     {exists}
  </div>
  )
    
};
 
 
export default AnswerQuestions;