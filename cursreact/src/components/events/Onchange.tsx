import React from 'react';

// Definim el component InputField
const InputField: React.FC = () => {
  // Funció que s'executa quan canvia el valor de l'input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // Mostra el valor de l'input a la consola
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange} // Assignem la funció handleChange a l'esdeveniment onChange
        placeholder="Escriu alguna cosa..."
      />
    </div>
  );
};

export default InputField;