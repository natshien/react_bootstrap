import React from 'react';
/*import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'; */
import './App.css';

// <Link to="/add_question">  <Link to="/compare_answers">

function Menu() {
  return (
    <div className="main-menu">
      <h2>Add Question</h2> 
      <br/>
      <h2>Compare My Answers</h2>
    </div>      
  );
}

export default Menu;
