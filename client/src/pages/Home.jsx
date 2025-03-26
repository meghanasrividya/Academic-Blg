import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Pages.css';

export default function Home({ searchQuery = '' }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('Failed to fetch posts:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (!confirm) return;

    try {
      await axios.delete(`/api/posts/${id}`);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Failed to delete:', err);
      alert('Error deleting post.');
    }
  };
  const handleLike = async (postId) => {
    try {
      const res = await axios.post(`/api/posts/${postId}/like`);
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, likes: res.data.likes } : p))
      );
    } catch (err) {
      console.error('Like error:', err);
    }
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='page'>
      <h2>📝 Latest Posts</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : filteredPosts.length === 0 ? (
        <p>❌ No posts found.</p>
      ) : (
        filteredPosts.map((post) => (
          <div className='post-card' key={post.id}>
            <Link to={`/posts/${post.id}`} className='post-title'>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.content.substring(0, 1000)}...</p>
            <div className='actions'>
              <Link to={`/edit/${post.id}`} className='edit-btn'>
                ✏️ Edit
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className='delete-btn'>
                🗑️ Delete
              </button>
              <button onClick={() => handleLike(post.id)} className='likes'>
                ❤️ {post.likes}
              </button>
              <br />
              <small>{post.views} views</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
