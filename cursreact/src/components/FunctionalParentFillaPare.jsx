/* eslint-disable no-unused-vars */
import React from 'react';
import FunctionalChildFillaPare from './FunctionalChildFillaPare';

const FunctionalParentFillaPare = () => {
  const handleChildData = (data) => {
    alert(`Dades rebudes del fill: ${data}`);
  };

  return (
    <div>
      <h1>Comunicació de Fill a Pare</h1>
      {/* Passem una funció com a prop al fill */}
      <FunctionalChildFillaPare sendDataToParent={handleChildData} />
    </div>
  );
};

export default FunctionalParentFillaPare;
