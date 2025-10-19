import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import '../assets/styles/UserProfile.css';

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="user-profile">
      <div className="welcome-card">
        <p className="welcome-message">
          Welcome, <span className="user-name">{user?.name}</span>! 👋
        </p>
      </div>
      <button onClick={handleLogout} className="btn btn-logout">
        Logout
      </button>
    </div>
  );
}

export default UserProfile;