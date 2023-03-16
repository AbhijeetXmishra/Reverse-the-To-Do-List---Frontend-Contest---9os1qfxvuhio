import React, { useState } from 'react'
import '../styles/App.css';


import ToDo from './ToDo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, createdAt: new Date(), text: "Task 1" },
    { id: 2, createdAt: new Date(), text: "Task 2" },
    { id: 3, createdAt: new Date(), text: "Task 3" },
  ]);

  const reverseOrder = () => {
    setTodos(todos.reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Input</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDo key={todo.id} todoId={todo.id} createdAt={todo.createdAt} inputText={todo.text} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
