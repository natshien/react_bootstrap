/* Selecting up to 5 questions from selected by user category, user clicks one of two answers and goes to next question.
After last question is answered it should show the button 'see comparison'
 */

 import React from 'react';
 import {questions, answers} from '../mockupDB.js/questionsDB';

 let questionsDB = questions;
 
 const AnswerQuestions = () => {

    questionsDB.forEach( (question) => {
        console.log(question.questionText);    
    })

    return (
         <div>
             Hello React
         </div>
     )
 }
 
 export default AnswerQuestions;