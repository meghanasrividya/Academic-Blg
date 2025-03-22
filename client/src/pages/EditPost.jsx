import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Form.css';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleUpdate = async e => {
    e.preventDefault();
    await axios.put(`/api/posts/${id}`, { title, content });
    navigate('/');
  };

  return (
    <div className="form-page">
      <form onSubmit={handleUpdate} className="post-form">
        <h2>Edit Post</h2>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea value={content} rows="8" onChange={e => setContent(e.target.value)} required></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
