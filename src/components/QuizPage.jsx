import React, { Component } from 'react';

export default class QuizPage extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        let { correct_answer, question, incorrect_answers } = this.props.data
        {incorrect_answers.push(correct_answer)};
        {incorrect_answers.sort(() => Math.random() - 0.5);}
        let index = this.props.index
        return (
            <div className="quiz-box" style={{marginTop:"5px"}}>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <div className="question"> {question} </div>
                    <div className="answer-box">
                        {incorrect_answers.map((option) =>
                            <div style={{padding:"5px"}}>
                                <input type="radio" value={option} name={"opt"+index}  />
                                <label className="container"> {option} </label>
                                <span className="checkmark"></span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}