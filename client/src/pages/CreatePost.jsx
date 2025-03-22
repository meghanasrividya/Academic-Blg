import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async e => {
    e.preventDefault();
    await axios.post('/api/posts', { title, content });
    navigate('/');
  };

  return (
    <div className="form-page">
      <form onSubmit={handleCreate} className="post-form">
        <h2>Create Post</h2>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Content" rows="8" onChange={e => setContent(e.target.value)} required></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}