/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>Missatge rebut del pare: {this.props.message}</p>
      </div>
    );
  }
}

export default ChildComponent;