/* eslint-disable no-unused-vars */
import React from 'react';
import { useMessage } from './MessageContext';

const ComponentA = () => {
  const { setMessage } = useMessage();

  return (
    <div>
      <button onClick={() => setMessage('Hola des de Component A!')}>
        Enviar Missatge
      </button>
    </div>
  );
};

export default ComponentA;
