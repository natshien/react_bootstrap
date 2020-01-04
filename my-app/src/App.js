import React from 'react';
/*import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'; */
import './App.scss';
import './styles/custom.scss';
import MainMenu from './components/mainMenu';

// <Link to="/add_question">  <Link to="/compare_answers">

function App() {
  return (
    <div className='container-fluid'>
      < MainMenu />
    </div>
  );
}

export default App;
