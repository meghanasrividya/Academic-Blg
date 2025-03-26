import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/posts', { title, content });
      navigate('/');
    } catch (err) {
      console.error('Post creation failed:', err);
      alert('Failed to publish post.');
    }
  };

  return (
    <div className='page-wrapper'>
      <div className='form-page'>
        <div className='form-container'>
          <form onSubmit={handleCreate} className='post-form'>
            <h2>Create Post</h2>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder='Content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows='8'
              required
            />
            <button type='submit'>Publish</button>
          </form>
        </div>
      </div>
    </div>
  );
}
