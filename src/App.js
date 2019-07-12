import React, { Component } from 'react'; 
import WebFont from 'webfontloader';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
    counter: 0,
    toggle: true
    };
  }

increment = () => {
  //implement state changes
  let inc = this.state.toggle ? 2: 1; 
  this.setState({
    counter: this.state.counter + inc
  }, this.restart); //creates a method for button to run when button is clicked
}

decrement = () => {
  //implement state changes
  let dec = this.state.toggle ? 2: 1; 
  this.setState({
    counter: this.state.counter - dec
  },this.restart); //creates a method for button to run when button is clicked
}

clear = () => {
  this.setState({
    counter: 0 
  });
}

toggle = () => {
  this.setState( {
    toggle: !this.state.toggle
  });
}
restart = () => {
  if(this.state.counter > 100 || this.state.counter < 0) {
    this.setState({
      counter: 0
    }, alert("You are over the limit!"));
  }
}


render() {
  let cont; 
  if (this.state.toggle) {
    cont = "Double"
  } else {
    cont = "Single"
  }
  return (
    <div className = "container">
       <div className="navbar">Counter</div>
       <div className="description"> This counter will allow you to increment/decrement by 1 or 2. Enjoy </div>
       <div className="name">By Ashia Nagi</div>
       <div className="counter">
         <h1>{this.state.counter}</h1> 
         <button type="button" className= "button" onClick = {this.increment}>Increment</button>
         <button type="button" className= "button" onClick = {this.decrement}>Decrement</button>
         <button type="button" className= "button" onClick = {this.clear}>Clear</button>
         <button type="button" className= "button" onClick = {this.toggle}>{cont}</button>
       </div>
    </div>
    
  )
}
}

export default Counter;
