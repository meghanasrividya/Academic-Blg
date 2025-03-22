import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function Home({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Failed to fetch posts:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Latest Posts</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : filteredPosts.length === 0 ? (
        <p>❌ No posts found.</p>
      ) : (
        filteredPosts.map(post => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 120)}...</p>
            <div className="actions">
              <Link to={`/edit/${post.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => {
                axios.delete(`/api/posts/${post.id}`);
                setPosts(prev => prev.filter(p => p.id !== post.id));
              }} className="delete-btn">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
