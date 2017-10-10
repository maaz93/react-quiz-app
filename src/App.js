import React, { Component } from 'react';
import './App.css';

import QuestionList from './quiz/QuestionList';
import Scorebox from './quiz/Scorebox';
import Results from './quiz/Results';

import appState from './state/State';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = appState;
    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);
  }

  setCurrent(current) {
    this.setState({
      current
    });
  }

  setScore(score) {
    this.setState({
      score
    });
  }

  isScoreBoxVisible() {
    return this.state.current <= this.state.questions.length;
  }

  render() {
    return (
      <div>
        {this.isScoreBoxVisible() ? <Scorebox {...this.state} /> : null}
        {!this.isScoreBoxVisible() ? <Results {...this.state} /> : null}
        <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore} />
      </div>
    );
  }
}

export default App;
