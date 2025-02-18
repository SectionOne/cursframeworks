/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

// Creem el context 
const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('Missatge inicial');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
