import React, { Component } from "react";
import styles from "./StartPage.module.css"
import QuizPage from "./QuizPage";
import axios from "axios";

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            isSelect: true,
            isLoading: false,
            category: "",
            difficulty: "",
            type: "",
            questionArray: [],
            responseArray: [],
            isShowanswer: false,
            count: 0,
        }
    }

    handleCategory = (e) => {
        this.setState({
            category: e.target.value,
        })
    }
    handleDifficulty = (e) => {
        this.setState({
            difficulty: e.target.value,
        })
    }
    handleType = (e) => {
        this.setState({
            type: e.target.value,
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        this.setState({
            isStarted: true,
            isSelect: false,
        })
        this.callAxios()
    }
    callAxios = () => {
        this.setState({
            isLoading: true,
        })
        axios({
            method: "get",
            url: "https://opentdb.com/api.php?amount=15&category=" + this.state.category + "&difficulty=" + this.state.difficulty + "&type=" + this.state.type
        })
            .then(res => {
                this.setState({
                    isLoading: false,
                    questionArray: res.data.results,
                    isStarted: true
                })
            })
            .catch(err => console.log(err))
    }

    submitAnswers = () => {
        let ans = document.querySelectorAll("input")
        let n = this.state.questionArray.length
        let start = 0, j = 0;

        this.setState({ isShowanswer: true, isStarted: false })

        while (start < n && j < ans.length) {
            if (this.state.questionArray[start].type === "multiple") {
                for (let i = j; i < (j + 4); i++) {
                    if (ans[i].checked)
                        this.state.responseArray.push(ans[i].value)
                    else
                        this.state.responseArray.push(undefined)
                }
                start++
                j = j + 4
            }
            else if (this.state.questionArray[start].type === "boolean") {
                for (let i = j; i < (j + 2); i++) {
                    if (ans[i].checked)
                        this.state.responseArray.push(ans[i].value)
                    else
                        this.state.responseArray.push(undefined)
                }
                start++
                j = j + 2
            }
            if (j === ans.length && start === n)
                break;
        }

        this.calculateResult()
    }

    calculateResult = () => {
        let n = this.state.questionArray.length
        let start = 0, j = 0;
        let ans = this.state.responseArray.length
        var count = 0
        while (start < n && j < ans) {
            if (this.state.questionArray[start].type === "multiple") {
                for (let i = j; i < (j + 4); i++) {
                    if (this.state.responseArray[i] === this.state.questionArray[start].correct_answer) {
                        count++
                    }
                }
                start++
                j = j + 4
            }
            else if (this.state.questionArray[start].type === "boolean") {
                for (let i = j; i < (j + 2); i++) {
                    if (this.state.responseArray[i] === this.state.questionArray[start].correct_answer) {
                        count++
                    }
                }
                start++
                j = j + 2
            }
            if (j === ans.length && start === n)
                break;
        }
        console.log(count)
        this.setState({
            count: count
        })
    }
    handleRestart = () => {
        this.setState({
            isSelect: true
        })
    }
    render() {
        if (this.state.isSelect) {
            return (
                <div>
                    <h1>Select Your Preferencs Below <i className="fa fa-hand-o-down" aria-hidden="true" style={{ marginLeft: 10 }}></i> </h1>
                    <form onSubmit={this.submitForm} style={{ marginTop: "200px" }}>
                        <label style={{ fontSize: "30px", color: "black", fontWeight: "bold", padding: "10px" }}>Select Category :</label>
                        <select value={this.state.value} onChange={this.handleCategory} style={{ height: "40px", padding: "5px" }}>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="">Any Category</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="9">General Knowledge</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="10">Entertainment : Books</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="11">Entertainment : Film</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="12">Entertainment : Music</option>
                            console.log(this.state.isShowanswer)
     <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="30">Science : Gadgets</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="20">Mythology</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="21">Sports</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="22">Geography</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="23">History</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="24">Politics</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="25">Art</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="26">Celebrities</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="27">Animals</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="28">Vehicles</option>
                        </select>
                        <label style={{ fontSize: "30px", color: "black", fontWeight: "bold", padding: "10px" }} >
                            Select Difficulty :
                            <select style={{ height: "40px", padding: "5px" }} value={this.state.value} onChange={this.handleDifficulty}>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="">Any Difficulty</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="easy">Easy</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="medium">Medium</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="hard">Hard</option>
                            </select>
                        </label>
                        <label style={{ fontSize: "30px", color: "black", fontWeight: "bold", padding: "10px" }} >
                            Select Type :
                            <select style={{ height: "40px", padding: "5px" }} value={this.state.value} onChange={this.handleType}>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="">Any Type</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="multiple">Multiple Choices</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize: "15px" }} value="boolean">True / False</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit" className="startBtn">START</button>
                    </form>
                </div>
            )
        }
        if (this.state.isLoading) {
            return (
                <div style={{ marginTop: "200px" }}>
                    <img src="/6.svg" alt="Loading.." />
                </div>
            )
        }
        if (this.state.isStarted) {
            return (
                <div>
                    <h2>Keep Calm and Answer !!!</h2>
                    <div>
                        {this.state.questionArray.map((quiz, index) =>
                            <QuizPage data={quiz} index={index} />
                        )}
                        <div style={{ textAlign: "left", margin: "20px", marginLeft: "38%" }}>
                            <button style={{ padding: "10px", width: "150px", fontWeight: "bold", borderRadius: "10px" }} className="btn-grad" onClick={this.submitAnswers}>SUMBIT</button>
                            <button style={{ padding: "10px", width: "150px", fontWeight: "bold", borderRadius: "10px", marginLeft: "10px" }} className="btn-grad" onClick={() => window.location.reload(true)}>BACK</button>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.isShowanswer) {
            return (
                <div>
                    <div style={{ width: "500px", height: "400px", background: "#9575CD", margin: "auto", marginTop: "5%", borderRadius: "35px" }}>
                        <div style={{ padding: "30px" }}> <img src="/299.gif" alt="" width="400px" /> </div>
                        <div style={{ paddingTop: "50px", color: "whitesmoke", fontSize: "50px", fontWeight: "bold" }}> {this.state.count} / 15 </div>
                        <div style={{ display: "flex", marginTop: "5%", marginLeft: "13%", flex: "1" }}>
                            <button style={{ marginTop: "50px", padding: "10px", width: "150px", fontWeight: "bold", borderRadius: "10px", marginLeft: "20px" }} className="btn-grad" onClick={this.handleRestart}>RESTART</button>
                            <button style={{ marginTop: "50px", padding: "10px", width: "150px", fontWeight: "bold", borderRadius: "10px", marginLeft: "20px" }} className="btn-grad" onClick={() => window.location.reload(true)}>HOME</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}