/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Timer extends Component {
  interval = null;

  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component desmuntat. Netegem l\'interval.');
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return <p>Temps: {this.state.count} segons</p>;
  }
}

export default Timer;