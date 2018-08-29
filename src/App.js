import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      data: []
    }
  }
  getInfo= async()=> {
    const {data} = await this.$http.post("hitokoto/",{a:1,b:2})
    this.setState({data}) 
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.getInfo.bind(this)}>按钮</button>
        <p></p>
      </div>
    );
  }
}

export default App;
