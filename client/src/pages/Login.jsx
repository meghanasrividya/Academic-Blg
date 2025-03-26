import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Make sure you're using your Axios instance
import './Form.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/auth/login', { email, password });

      // ✅ Store token after successful login
      localStorage.setItem('token', res.data.token);

      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div className='page-wrapper'>
        <div className='form-page'>
          <div className='form-container'>
            <form onSubmit={handleLogin} className='post-form'>
              <h2>🔐 Login</h2>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
