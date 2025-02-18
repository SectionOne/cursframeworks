/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  handleChildData = (data) => {
    alert(`Dades rebudes del fill: ${data}`);
  };

  render() {
    return (
      <div>
        <h1>Comunicació de Fill a Pare</h1>
        {/* Passem una funció com a prop al fill */}
        <ChildComponent sendDataToParent={this.handleChildData} />
      </div>
    );
  }
}

export default ParentComponent;
