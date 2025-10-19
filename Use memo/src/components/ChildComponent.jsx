import { memo, useState } from 'react';

function ChildComponent({ todos, onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  console.log('Child component rendered');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="child-container">
      <h2>Todo List (Child Component)</h2>
      
      <form onSubmit={handleAddTodo} className="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <span className="status">{todo.completed ? '✓ Done' : '○ Pending'}</span>
          </li>
        ))}
      </ul>
      
      <p className="render-info">
        Check console: This component only re-renders when todos prop changes
      </p>
    </div>
  );
}

export default memo(ChildComponent);