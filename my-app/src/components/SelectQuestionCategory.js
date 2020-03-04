/* Dropdown to choose category and button to start */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

 
export default function SelectQuestionCategory() {
    return (
        <div className="container">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
        </Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-category" className="" title="Category">
                <Dropdown.Item >Cinema</Dropdown.Item>
                <Dropdown.Item >Books</Dropdown.Item>
                <Dropdown.Item >Food</Dropdown.Item>
                <Dropdown.Item>Drinks</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-secondary" type="button" id="start">Start</button>
        </div>
    )
};

