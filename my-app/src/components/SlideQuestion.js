import React, {useState}from 'react';


const SlideQuestion = ({question, goToNext}) => {
    
    const [answer, setAnswer] = useState('');
    
    const handleClick = (event)=> {
        event.preventDefault();
        goToNext(answer);
    }

    const handleRadio = (event) => {
        setAnswer(event.target.id);
    }
    
    return (
        <div className="askBox">
        <h5>{question.questionText}</h5>
          <input type="radio" id={"ansA"} onChange = {handleRadio} name="answer" value={question.answerA}></input><label for="ansA">{question.answerA}</label><br />
          <input type="radio" id={"ansB"} onChange = {handleRadio} name="answer" value={question.answerB}></input> <label for="ansB">{question.answerB}</label><br />
          <button>Prev</button>
          <button onClick={handleClick}>Next</button>    
    </div>
    )
}

export default SlideQuestion;