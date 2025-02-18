/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Comptador actualitzat a: ${count}`);
  }, [count]); // Depèn de `count`

  return (
    <div>
      <p>Comptador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;
