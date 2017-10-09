import React, { Component } from 'react';
import './App.css';

import QuestionList from './quiz/QuestionList';
import appState from './state/State';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = appState;
  }

  render() {
    return (
      <div>
        <QuestionList {...this.state} />
      </div>
    );
  }
}

export default App;
