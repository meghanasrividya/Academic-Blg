import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error('Profile fetch error:', err));
  }, [token]);

  if (!user) return <p className="loading">Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">{user.username.charAt(0)}</div>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <hr />
        <h3>📝 Your Posts</h3>
        <ul className="profile-posts">
          {user.Posts?.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            user.Posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
