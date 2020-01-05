/* Question form to add by user containing: category dropdown menu, question text field max 200 chars, answers A and B */

import React from 'react'

export default function QuestionForm() {
    return (

        <form>
            <div className="container">
                <div className="form-group">
                    <label for="selectCaategory">Select category</label>
                    <select className="form-control" id="selectCategory">
                        <option>Cinema</option>
                        <option>Books</option>
                        <option>Food</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Question</label>
                    <textarea className="form-control" id="questionText" rows="3" placeholder="max 200 characters"></textarea>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">Answer A</label>
                    <input type="text" className="form-control" id="answerA"/>
                </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Answer B</label>
                        <input type="text" className="form-control" id="answerB"/>
                </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
                )
            }
