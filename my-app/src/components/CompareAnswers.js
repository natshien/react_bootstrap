/* Dropdown to choose category and button to start */

import React from 'react'
 
export default function CompareAnswers() {
    return (
        <div className="dropdown container">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Category
           </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" >Cinema</button>
                <button className="dropdown-item" >Books</button>
                <button className="dropdown-item" >Food</button>
                <button className="dropdown-item" >Drinks</button>
            </div>
            <br />
            <button className="btn btn-secondary" type="button" id="start">Start</button>
        </div>
    )
};