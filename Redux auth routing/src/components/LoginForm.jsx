import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import '../assets/styles/LoginForm.css';

function LoginForm() {
  const [nameInput, setNameInput] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (nameInput.trim()) {
      dispatch(login({ name: nameInput }));
      setNameInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-form">
      <div className="form-group">
        <label htmlFor="name-input">Enter your name</label>
        <input
          id="name-input"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your name here..."
          className="form-input"
        />
      </div>
      <button
        onClick={handleLogin}
        disabled={!nameInput.trim()}
        className="btn btn-login"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;