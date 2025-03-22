import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">📘 Academic Blog</Link>
      </div>

      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar-right">
        {token ? (
          <>
            <Link to="/create">✍️ New</Link>
            <Link to="/profile">👤 Profile</Link>
            <button onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
              window.location.reload();
            }}>🚪 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
