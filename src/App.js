import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import * as action from './a'
import List from './List'
import Commit from './Commit'
import Daka from './Daka'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Daka></Daka>
        <List></List>
        <Commit></Commit>
      </div>
    );
  }
}

export default App;
