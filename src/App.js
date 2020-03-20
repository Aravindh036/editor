import React, { Component } from "react";
import "./App.css";
import parse from "./controllers/parser";
import { eventHandlers } from "./controllers/helper";

class App extends Component {
  state = {
    currentHover: null,
    click:false,
    currentClick:null,
    handles:false,
    flag:false,
    globalGroup:null
  };
  getLeftPosition=(target,position=0)=>{
    // console.log(target);
    if(target!=null){
      if(!(target.classList[0] === 'artboard-id')){
        position += target.offsetLeft;
        // console.log("target classlist : ",target.classList,position)
        position = this.getLeftPosition(target.offsetParent,position);
      }
    }
    return position;
  }
  getTopPosition=(target,position=0)=>{
    // console.log(target);
    if(target!=null){
      if(!(target.classList[0] === 'artboard-id')){
        position += target.offsetTop;
        // console.log("target classlist : ",target.classList,position)
        position = this.getTopPosition(target.offsetParent,position);
      }
    }
    return position;
  }
  componentDidMount() {
    parse(this);
    eventHandlers(this);    
  }
  initializeRuler=(ruler)=>{
    ruler.style.top = 0;
    ruler.style.bottom = 0;
    ruler.style.left = 0;
    ruler.style.right = 0;
  }
  getPercentage=(value,root)=>{
    return(value/root)*100;
  }
  render() {
    return <div className="App"></div>;
  }
}



export default App;
