/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const FunctionalChildFillaPare = (props) => {
  const handleClick = () => {
    // Enviem dades al component pare
    props.sendDataToParent('Hola, sóc el fill!');
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar dades al pare</button>
    </div>
  );
};

export default FunctionalChildFillaPare;
