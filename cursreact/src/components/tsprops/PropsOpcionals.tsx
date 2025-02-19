import React from 'react';

// Definim la interfície per a les props
interface GreetingProps {
  name: string; // Obligatòria
  age?: number; // Opcional
}

// Definim el component Greeting
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      {/* Mostrem l'edat només si està definida */}
      {age !== undefined && <p>Tens {age} anys.</p>}
    </div>
  );
};

export default Greeting;