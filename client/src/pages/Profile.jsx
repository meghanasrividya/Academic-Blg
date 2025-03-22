import { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(err => console.error('Failed to load profile', err));
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="page">
      <h2>{user.username}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Member Since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

      <h3>Your Posts</h3>
      {user.Posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        user.Posts.map(post => (
          <div className="post-card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}
