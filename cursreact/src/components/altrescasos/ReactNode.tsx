import React from 'react';

// Definim la interfície per a les props
interface ContainerProps {
  children: React.ReactNode; // children pot ser qualsevol element de React
}

// Definim el component Container utilitzant la interfície
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Exportem el component perquè pugui ser utilitzat
export default Container;