import React, { Component } from "react";
import styles from "./StartPage.module.css"
import QuizPage from "./QuizPage";
import axios from "axios";

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            isLoading:false,
            category: "",
            difficulty: "",
            type: "",
            questionArray : [],
            responseArray :[],
            ansArray:[],
            shouldReturn:false,
            results:0,
            count:0
        }
    }

    handleCategory = (e) => {
        this.setState({
            category: e.target.value,
        })
        console.log(this.state.category)
    }
    handleDifficulty = (e) => {
        this.setState({
            difficulty: e.target.value,
        })
        console.log(this.state.difficulty)

    }
    handleType = (e) => {
        this.setState({
            type: e.target.value,
        })
        console.log(this.state.type)

    }
    submitForm = (e) => {
        e.preventDefault()
        this.setState({
            isStarted: true,
        })
        this.callAxios()
    }
    callAxios=()=>{
        this.setState({
            isLoading:true,
        })
        axios({
            method:"get",
            url:"https://opentdb.com/api.php?amount=15&category="+this.state.category + "&difficulty="+this.state.difficulty + "&type="+this.state.type
        })
        .then(res=>{
            // console.log(res.data.results[0].type)
                this.setState({
                    isLoading:false,
                    questionArray :res.data.results
                })})
        .catch(err=>console.log(err))
    }
   submitAnswers =(e)=>{

        let ans = document.querySelectorAll("input")

    }
    render() {
        if (!this.state.isStarted) {
            return (
                <div>
                    <h1>Select Your Preferencs Below <i className="fa fa-hand-o-down" aria-hidden="true" style={{ marginLeft: 10 }}></i> </h1>
                    <form onSubmit={this.submitForm}  style={{marginTop:"200px"}}>
                        <label style={styles.label} style={{fontSize:"30px"}}>Select Category :</label>
                        <select value={this.state.value} onChange={this.handleCategory} style={{height:"30px", padding:"5px"}}>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="">Any Category</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="9">General Knowledge</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="10">Entertainment : Books</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="11">Entertainment : Film</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="12">Entertainment : Music</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="13">Entertainment : Musicles & Theatres</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="14">Entertainment : Television</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="15">Entertainment : Video Games</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="16">Entertainment : Board Games</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="29">Entertainment : Comics</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="31">Entertainment : Japanese Anime % Manga</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="32">Entertainment : Cartoon % Animations</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="17">Science & Nature</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="18">Science : Computers</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="19">Science : Mathematics</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="30">Science : Gadgets</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="20">Mythology</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="21">Sports</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="22">Geography</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="23">History</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="24">Politics</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="25">Art</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="26">Celebrities</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="27">Animals</option>
                            <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="28">Vehicles</option>
                        </select>
                        <label style={styles.label} >
                            Select Difficulty :
                            <select style={{height:"30px", padding:"5px"}} value={this.state.value} onChange={this.handleDifficulty}>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="">Any Difficulty</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="easy">Easy</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="medium">Medium</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="hard">Hard</option>
                            </select>
                        </label>
                        <label style={styles.label} >
                            Select Type :
                            <select style={{height:"30px", padding:"5px"}} value={this.state.value} onChange={this.handleType}>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="">Any Type</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="multiple">Multiple Choices</option>
                                <option style={{ padding: "15px", background: "#263238", color: "white", fontSize:"15px" }} value="boolean">True / False</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit" className="startBtn">START</button>
                    </form>
                </div>
            )
        }
        else if(this.state.isLoading){
            return(
                <div style={{marginTop:"200px"}}>
                  <img src="/6.svg"/>
                </div>
            )
        }
        else if(this.state.isStarted){
            return(
                <div>
                    <h2>Keep Calm and Answer !!!</h2>
                <div>
                    {this.state.questionArray.map((quiz,index)=>
                    <QuizPage data={quiz} index={index}/>
                    )}
                    <div style={{textAlign:"left", margin:"20px", marginLeft:"38%"}}>
                    <button style={{ padding:"10px",width:"150px", fontWeight:"bold", borderRadius:"10px"}} onClick={this.submitAnswers}>SUMBIT</button>
                    <button style={{ padding:"10px",width:"150px", fontWeight:"bold", borderRadius:"10px", marginLeft:"10px"}} onClick={() => window.location.reload(true)}>BACK</button>
                    </div>
                </div>
                </div>
            )
        }
    }
}