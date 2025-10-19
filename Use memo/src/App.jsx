// src/App.jsx
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Performance Optimization Demo</h1>
        <p>useMemo + React.memo Example</p>
      </header>
      <ParentComponent />
    </div>
  );
}

export default App;