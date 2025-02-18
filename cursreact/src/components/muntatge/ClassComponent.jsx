/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  // useEffect per muntatge
  useEffect(() => {
    console.log('Component muntat!');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json.map((post) => post.title)));
  }, []); // Llista de dependències buida = s'executa només una vegada

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
