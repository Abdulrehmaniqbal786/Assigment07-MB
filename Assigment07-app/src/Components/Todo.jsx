import React, { useState } from 'react';


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className='font-black from-stone-100 text-5xl text-cyan-600'>Todo App</h1>
      <input
      className='p-2 border-4 border-indigo-200 border-x-indigo-500  rounded-lg bg-none'
      placeholder='Enter Todos'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='m-8 bg-black text-white w-40 h-10 font-black rounded-3xl' onClick={addTodo}>Add Todo</button>
      <ul className='text-black font-bold'>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='bg-slate-400 p-1 m-2 font-black text-white rounded-xl' onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;