import React from 'react';
interface GreetingProps {
    name: string;
    age: number;
  }
  
const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>Tens {age} anys.</p>
    </div>
  );
};

export default Greeting;