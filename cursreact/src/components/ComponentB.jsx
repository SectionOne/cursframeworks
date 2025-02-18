/* eslint-disable no-unused-vars */
import React from 'react';
import { useMessage } from './MessageContext';

const ComponentB = () => {
  const { message } = useMessage();

  return (
    <div>
      <p>Missatge rebut: {message}</p>
    </div>
  );
};

export default ComponentB;
