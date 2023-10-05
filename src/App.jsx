import React, { useState, useEffect } from 'react';
import './App.css';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; 

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1>ITEM LIST</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>User ID:</strong> {item.userId} <br />
            <strong>Title:</strong> {item.title} <br />
            <strong>Completed:</strong> {item.completed ? 'Yes' : 'No'} <br />
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
