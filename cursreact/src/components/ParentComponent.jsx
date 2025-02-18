/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    const message = 'Hola des del component pare!';
    return (
      <div>
        <h1>Comunicació de Pare a Fill</h1>
        {/* Passem el missatge com a prop al fill */}
        <ChildComponent message={message} />
      </div>
    );
  }
}

export default ParentComponent;
