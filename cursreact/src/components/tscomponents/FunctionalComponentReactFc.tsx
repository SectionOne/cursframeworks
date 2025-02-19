import React from 'react';

// Definim una interfície per a les props
interface GreetingProps {
  name: string;
  age: number;
}

const GreetingReactFC: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>Tens {age} anys.</p>
    </div>
  );
};
export default GreetingReactFC;