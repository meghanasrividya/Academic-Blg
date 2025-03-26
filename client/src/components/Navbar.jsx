import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar({ onSearch }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/' className='navbar-logo'>
          📖 The Researcher's Guru
        </Link>
      </div>

      <form className='navbar-search' onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search posts...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      <div className='navbar-right'>
        <button onClick={toggleTheme} title='Toggle theme'>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {token ? (
          <>
            <Link to='/create'>✍️ New</Link>
            <Link to='/profile'>👤 Profile</Link>
            <button onClick={handleLogout}>🚪 Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}