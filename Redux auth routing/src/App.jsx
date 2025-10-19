import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import './assets/styles/App.css';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="app-container">
      <div className="auth-card">
        <div className="card-header">
          <h1 className="title">Redux Auth Demo</h1>
          <p className="subtitle">Simple authentication with global state</p>
        </div>

        <div className="card-content">
          {!isAuthenticated ? <LoginForm /> : <UserProfile />}
        </div>

        <div className="state-viewer">
          <p className="state-title">Current State:</p>
          <p className="state-item">
            Authenticated: <span className="state-value">{isAuthenticated.toString()}</span>
          </p>
          <p className="state-item">
            User: <span className="state-value">{user ? user.name : 'null'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;