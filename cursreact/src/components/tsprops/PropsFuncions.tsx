import React from 'react';

// Definim la interfície per a les props
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Funció que s'executa en fer clic
  label: string; // Text que es mostra al botó
}

// Definim el component Button
const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

// Exportem el component perquè pugui ser utilitzat en altres parts de l'aplicació
export default Button;