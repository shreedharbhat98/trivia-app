import React, { Component } from 'react';

export default class HomePge extends Component{
    constructor(props){
        super(props)
        this.state ={
            isStart : true
        }
    }
    handleStart = ()=>{
        this.setState({
            isStart: true,
        })

    }
    render(){
        let {handleStart} = this.props
        return(
            <div className="App home">
            <h1> Exited to play Trivia Quizzes ? </h1>
            <h2>Here u go !!!</h2>
         <button className="startBtn" onClick={()=>handleStart(this.state.isStart)}>
          Start
        </button>
      </div>
        )
    }
}