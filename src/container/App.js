import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
class App extends Component {
  render() {
    console.log("on y est")
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          
        </div>
        
      </div>
    );
  }
}

export default App;
