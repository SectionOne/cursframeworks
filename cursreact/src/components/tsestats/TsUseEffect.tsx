import React, { useEffect, useState } from 'react';

// Definim el tipus per als usuaris
interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  // Tipem l'estat com una llista d'usuaris
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Funció asíncrona per fer la crida a l'API
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) {
          throw new Error(`Error en la resposta: ${response.statusText}`);
        }

        // Tipem explícitament la resposta com una llista d'usuaris
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: unknown) {
        // Ens assegurem que l'error és un objecte que podem manejar
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error desconegut');
        }
      }
    };

    fetchUsers();
  }, []); // Depenent només de la inicialització

  return (
    <div>
      <h1>Llista d'usuaris</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;