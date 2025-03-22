import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">AcademicBlog</Link>
        <div className="navbar-links">
          {token ? (
            <>
              <Link to="/create" className="navbar-button">Create</Link>
              <button onClick={handleLogout} className="navbar-button logout">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-button">Login</Link>
              <Link to="/register" className="navbar-button">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}