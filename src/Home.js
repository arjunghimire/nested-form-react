import React, { Component } from 'react';

import './App.css';

class Home extends Component {

  constructor(){
      super();
      this.state = {
          items: []
      }
  }

  onChangeHandle = (idx) => (evt) => {
    const itemsall = this.state.items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, name: evt.target.value };
    });

    this.setState({ items: itemsall });
  }

  addInputField = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          name: ""
        }
      ]
    })
  }
  handleSubmit = event => {
    this.setState({
      items: [
        ...this.state.items
      ]
    })
    console.log(this.state.items);
    this.props.callbackFromParent(this.state.items);
  }

  render() {

    return (
      <div className="App">
        { this.state.items.map((field, index) => {
         return (
              <div key={index}>
                <input 
                 type="text"
                 value={field.name} 
                 onChange={this.onChangeHandle(index)}/>
                <br/>
              </div>
              )
        })}
        <button onClick={this.addInputField}> Add </button>
        <button onClick={this.handleSubmit}> Submit </button>
        <hr/>
      </div>
    );
  }
}

export default Home;
