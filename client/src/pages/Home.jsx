import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => {
        console.log('API Response:', res.data);

        // ✅ Handle both { data: [...] } and direct array response
        const response = res.data;
        const data = Array.isArray(response) ? response : response.data;
        setPosts(data || []);
      })
      .catch(err => {
        console.error('Failed to fetch posts', err);
        setMessage('❌ Failed to load posts.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    try {
      await axios.delete(`/api/posts/${id}`);
      setPosts(prev => prev.filter(p => p.id !== id));
      setMessage('✅ Post deleted successfully.');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to delete post.');
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="page">
      <h2>Latest Posts</h2>

      {message && <div className="info">{message}</div>}

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map(post => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 120)}...</p>
            {post.createdAt && (
              <small className="timestamp">
                Posted on {new Date(post.createdAt).toLocaleDateString()}
              </small>
            )}
            <div className="actions">
              <Link to={`/edit/${post.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => handleDelete(post.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
