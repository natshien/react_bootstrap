import React from 'react';
/*import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'; */
import './index.scss';
import './App.scss';
import './styles/custom.scss';
import MainMenu from './components/MainMenu';
import SelectQuestionCategory from './components/SelectQuestionCategory';
import QuestionForm from './components/QuestionForm';
import SubmitSuccess from './components/SubmitSuccess';
import AnswerQuestions from './components/AnswerQuestions';

// <Link to="/add_question">  <Link to="/compare_answers">

// checking all components display

function App() {
  return (
    <>
    
      <AnswerQuestions/>


    </>
  );
}

export default App;
