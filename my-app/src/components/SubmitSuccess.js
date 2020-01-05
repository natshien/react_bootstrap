/* Dislpaying success message after submitting new question and button for comparing user's answers */

import React from 'react'

export default function SubmitSuccess() {
    return (
        <div className="container">
            <div><h4 className="font-weight-bold text-success">Your question has been added !</h4></div>
            <button className="btn btn-light">Compare my answers</button>
        </div>
    )
}
