/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Comptador actualitzat a: ${this.state.count}`);
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Comptador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;