import React, { Component } from 'react';

export default class CompareAnswer extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let n = this.props.data.length
        let start = 0, j = 0;
        let ans = this.props.answers.length
        let responseArray =[]

        while (start < n && j < ans) {
            if (this.props.data[start].type === "multiple") {
                for (let i = j; i < (j + 4); i++) {
                    if (this.props.answers[i] !== undefined)
                        responseArray.push(this.props.answers[i])
                    }
                if(responseArray.length === start)
                    responseArray.push("Not Answered")
                start++
                j = j + 4
            }
            else if (this.props.data[start].type === "boolean") {
                for (let i = j; i < (j + 2); i++) {
                    if (this.props.answers[i] !== undefined)
                        responseArray.push(this.props.answers[i])
                }
                if(responseArray.length === start)
                    responseArray.push("Not Answered")
                start++
                j = j + 2
            }
            if (j === ans.length && start === n)
                break;
        }
        let returnCard =(
            this.props.data.map((question,i)=>
                <div className="quiz-box" style={{marginTop:"5px"}}>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                    <div className="question"> {this.props.data[i].question} </div>
                    <div className="answer-box">
                        {this.props.data[i].incorrect_answers.map((option) =>
                            <div style={{padding:"5px"}}>
                                <input type="radio" value={option} name={"option"}  />
                                <label className="container"> {option} </label>
                                <span className="checkmark"></span>
                            </div>
                        )}
                    </div>
                    {console.log(this.props.data[i].correct_answer === responseArray[i])}
                    {this.props.data[i].correct_answer === responseArray[i] ?

                    <div style={{display:"flex", justifyContent:"space-between", background:"#4CAF50"}} className="question">
                        <div style={{textAlign:"center", width:"49%"}}> Expected : {this.props.data[i].correct_answer}  </div>
                        <div style={{textAlign:"center" , width:"49%"}}>Response : {responseArray[i]} </div>
                    </div> :
                    <div style={{display:"flex", justifyContent:"space-between", background:"#F44336"}} className="question">
                        <div style={{textAlign:"center", width:"49%"}}> Expected : {this.props.data[i].correct_answer}  </div>
                        <div style={{textAlign:"center" , width:"49%"}}>Response : {responseArray[i]} </div>
                    </div>

                }
                </div>
            </div>
            )
        )
        return(
            <div>
            {returnCard}
            </div>
        )
    }
}