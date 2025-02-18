/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ChildComponent extends Component {
  handleClick = () => {
    // Enviem dades al component pare
    this.props.sendDataToParent('Hola, sóc el fill!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Enviar dades al pare</button>
      </div>
    );
  }
}

export default ChildComponent;
