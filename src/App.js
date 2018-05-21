import React, { Component } from 'react';

import './App.css';
import Home from "./Home";


class App extends Component {
  constructor(){
    super();
    this.state = {
      groupname: "",
      items: []
    }
  }
  handleChange = (key,event) => {
    this.setState({[key]: event.target.value});
  }
  handleSubmitAll = event => {
    console.log(this.state.groupname);
    console.log(this.state.items);
  }
  myCallback = (dataFromChild) => {
   this.setState({items: dataFromChild})
  }
  render() {
    console.log(this.onGetValue);
    return (
      <div className="App">
        <input type="text" value={this.state.groupname} onChange={this.handleChange.bind(this,"groupname")} />
        <Home callbackFromParent={this.myCallback}/>
        <button onClick={this.handleSubmitAll}> Submit </button>
      </div>
    );
  }
}

export default App;
