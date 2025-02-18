/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const FunctionalChildComponent = (props) => {
  return (
    <div>
      <p>Missatge rebut del pare: {props.message}</p>
    </div>
  );
};

export default FunctionalChildComponent;
