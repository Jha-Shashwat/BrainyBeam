import { useState, useMemo, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Complete React project', completed: true },
    { id: 2, title: 'Review useMemo and React.memo', completed: true },
    { id: 3, title: 'Optimize component performance', completed: false },
    { id: 4, title: 'Deploy to production', completed: false },
  ]);

  console.log('Parent component rendered');

  const memoizedTodos = useMemo(() => {
    console.log('useMemo: Todo list reference created');
    return todos;
  }, [todos]);

  const handleAddTodo = useCallback((title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="parent-container">
      <div className="counter-section">
        <h1>Parent Component</h1>
        <div className="counter-display">
          <p>Counter: <span className="counter-value">{counter}</span></p>
          <button onClick={incrementCounter}>Increment Counter</button>
        </div>
        <p className="info-text">
          Click the button to update counter. Notice that the Child component doesn't re-render!
        </p>
      </div>

      <ChildComponent todos={memoizedTodos} onAddTodo={handleAddTodo} />
    </div>
  );
}

export default ParentComponent;