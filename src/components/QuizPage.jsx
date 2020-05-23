import React, { Component } from 'react';

export default class QuizPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTimeOver: false,
            count:0
        }
        // console.log(this.props)
    }
    setAnswer =(e)=>{
        // console.log(e.target.value)
    }

    render() {
        let { correct_answer, question, difficulty, type, category, incorrect_answers } = this.props.data
        {incorrect_answers.push(correct_answer)}
        {incorrect_answers.sort(() => Math.random() - 0.5);}
        let index = this.props.index
        return (
            <div className="quiz-box">

                <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <div className="question"> {question} </div>
                    <div className="answer-box" onChange={this.setAnswer}>
                        {incorrect_answers.map((option) =>
                            <div>
                                <input type="radio" value={option} name={"opt"+index} />
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