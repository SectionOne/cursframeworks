/* eslint-disable no-unused-vars */
import React from 'react';
import { MessageProvider } from './MessageContext';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const App = () => {
  return (
    <MessageProvider>
      <h1>Comunicació amb Context API</h1>
      <ComponentA />
      <ComponentB />
    </MessageProvider>
  );
};

export default App;
