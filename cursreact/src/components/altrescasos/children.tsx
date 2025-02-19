import React, { PropsWithChildren } from 'react';

// Definim el component Container utilitzant PropsWithChildren
const Container: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Exportem el component perquè pugui ser utilitzat
export default Container;