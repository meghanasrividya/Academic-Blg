
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { username, email, password });
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}