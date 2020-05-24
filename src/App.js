import React, { Component } from 'react';
import './App.css';
import "../node_modules/font-awesome/css/font-awesome.min.css"
import StartPage from './components/StartPage';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStart: true,
      isStop: false,
      isAllTheBest: false,
    }
  }

  handleStart = () => {
    this.setState({
      isStart: false,
      isAllTheBest: true,
    })

   setTimeout(()=>{
    this.setState({
      isAllTheBest:false,
      isStop: true,})

   } ,1000)

  }

  render() {
    if (this.state.isStart) {
      return (
        <>
        <div className="App home">
          <h1 style={{background:"#673AB7", color:"whitesmoke"}}> Excited to play Trivia Quizzes ? </h1>
          <h2 className="here-u-go">
            <img src="/289.gif" alt=""/>
          </h2>
          <button className="startBtn" onClick={this.handleStart}>
            Start
          </button>
        </div>
        <footer >
          <div style={{marginTop:"0", textAlign:"center"}}>
          <div style={{height:"50px", background:"#607D8B"}}>
          <div style={{fontWeight:"bold", color:"white"}}>  Made in <img src= "/367.gif" alt=""/> with masai </div>
          </div>

          </div>
        </footer>
        </>
      );
    }
    else if(this.state.isAllTheBest){
      return(
        <div className="App home" style={{color:'#EC407A'}}>

        <h1 style={{margin:"20%", fontSize:"90px", color:'#7B1FA2'}}> All the Best
        <i className="fa fa-hand-peace-o" aria-hidden="true" style={{color:'black', marginLeft:10}}></i>
        </h1>
        </div>
      )
    }
    else if (this.state.isStop) {
      return (
        <div className="App home">
        <StartPage/>
        </div>
      )
    }

  }
}

export default App;
