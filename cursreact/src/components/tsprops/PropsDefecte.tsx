import React from 'react';

// Definim la interfície per a les props
interface GreetingProps {
  name: string; // Obligatòria
  age?: number; // Opcional
}

// Definim el component Greeting amb un valor per defecte per a 'age'
const GreetingDefecte: React.FC<GreetingProps> = ({ name, age = 18 }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>Tens {age} anys.</p>
    </div>
  );
};

// Exportem el component perquè pugui ser utilitzat en altres parts de l'aplicació
export default GreetingDefecte;