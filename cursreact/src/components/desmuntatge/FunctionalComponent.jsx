/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup: esborrem l'interval quan es desmunta
    return () => {
      console.log('Component desmuntat. Netegem l\'interval.');
      clearInterval(interval);
    };
  }, []);

  return <p>Temps: {count} segons</p>;
};

export default Timer;