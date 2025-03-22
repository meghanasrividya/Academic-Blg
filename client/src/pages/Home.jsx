// Home.jsx - List + Delete Posts (Production Ready)
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => setPosts(res.data))
      .catch(() => alert('❌ Failed to load posts.'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this post?');
    if (!confirm) return;

    try {
      await axios.delete(`/api/posts/${id}`);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      alert('Failed to delete post.');
      console.error(err);
    }
  };

  return (
    <div className="page">
      <div className="header">
        <h2>📚 Academic Blog</h2>
        <Link to="/create" className="create-btn">+ New Post</Link>
      </div>
      {loading ? <p>Loading...</p> : posts.length === 0 ? (
        <p>No posts yet. Start writing something!</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 120)}...</p>
            <small>
              By <strong>{post.User?.username || 'Anonymous'}</strong> 
              on {new Date(post.createdAt).toLocaleDateString()}
            </small>
            <div className="actions">
              <Link to={`/edit/${post.id}`} className="edit-btn">✏️ Edit</Link>
              <button onClick={() => handleDelete(post.id)} className="delete-btn">🗑️ Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}