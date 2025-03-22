import { useEffect, useState } from "react";
import axios from "axios";
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    axios.get("/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setUser(res.data))
    .catch(err => {
      console.error("Profile fetch error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    });
  }, [token]);

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    try {
      await axios.post('/api/users/avatar', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      window.location.reload(); // Refresh to show updated avatar
    } catch (err) {
      console.error("Avatar upload failed:", err);
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2>👤 My Profile</h2>
      <div className="profile-card">
        <img
          src={user.avatar || '/default-avatar.png'}
          alt="avatar"
          className="avatar-img"
        />
        <input type="file" onChange={handleUpload} />
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
