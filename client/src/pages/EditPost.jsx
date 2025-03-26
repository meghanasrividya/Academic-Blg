// EditPost.jsx - Update Post (Professional UI)
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import './Form.css';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(() => {
        alert('Failed to load post');
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/posts/${id}`, { title, content });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Failed to update post');
    }
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <>
      <div className='page-wrapper'>
        <div className='form-page'>
          <div className='form-container'>
            <form onSubmit={handleUpdate} className='post-form'>
              <h2>✏️ Edit Post</h2>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                rows='10'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <button type='submit'>✅ Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
