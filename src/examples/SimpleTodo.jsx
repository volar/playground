import { useState } from 'react';

function TodoList({ todos, handleDeleteTodo, handleToggleCompleted }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.task}</span>
          <button onClick={() => handleDeleteTodo}>Delete</button>
          <button onClick={() => handleToggleCompleted}>Completed</button>
        </li>
      ))}
    </ul>
  );
}

export default function SimpleTodo() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTodo = () => {
    const id = Date.now();
    const newTodo = {
      id,
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const completedTodos = todos.filter((todo) => todo.completed === true);
  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  return (
    <>
      <h3>Simple Todo</h3>
      <input type="text" placeholder="Add a todo" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <br />
      <h4>Todo List</h4>
      <TodoList
        todos={incompleteTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleted={handleToggleCompleted}
      />
      <br />
      <h4>Completed Todos List</h4>
      <TodoList
        todos={completedTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleted={handleToggleCompleted}
      />
      <br />
    </>
  );
}
