import React, { Component } from 'react';

class Results extends Component {

  render() {
    const percent = (this.props.score / this.props.questions.length) * 100;
    let message = null;
    if (percent > 80) {
      message = "Awesome job!";
    } else if (percent < 80 && percent > 60) {
      message = "You did good.";
    } else {
      message = "You did horrible.";
    }
    return (
      <div className='well'>
        <h4>You got {this.props.score} out of {this.props.questions.length} correct!</h4>
        <h1>{percent}% - {message} </h1>
        <hr />
        <a href="/app">Take again</a>
      </div>
    );
  }
}

export default Results;
