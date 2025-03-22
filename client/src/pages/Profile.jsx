import { useEffect, useState } from "react";
import axios from "axios";
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    axios.get("/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      setUser(res.data);
      setAvatar(res.data.avatar);
    })
    .catch(err => console.error("Profile fetch error:", err));
  }, [token]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
  
    // ✅ File type and size validation
    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed.');
      return;
    }
  
    if (file.size > 1024 * 1024) { // 1MB limit
      alert('Image size must be less than 1MB.');
      return;
    }
  
    const formData = new FormData();
    formData.append('avatar', file);
  
    try {
      const res = await axios.post('/api/users/avatar', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
  
      setAvatar(res.data.avatar); // ✅ update avatar preview
    } catch (err) {
      console.error("Upload error:", err);
      alert('Failed to upload avatar.');
    }
  };

  const handleRemoveAvatar = async () => {
    const confirmDelete = window.confirm("Are you sure you want to remove your avatar?");
    if (!confirmDelete) return;
  

    try {
      await axios.delete('/api/users/avatar', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setAvatar(null); // Update state to remove avatar
    } catch (err) {
      console.error("Remove error:", err);
    }
  };
  

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-card">
        <img
          src={avatar ? `/uploads/${avatar}` : '/default-avatar.png'}
          alt="avatar"
          className="avatar-img"
        />
        <button onClick={handleRemoveAvatar} className="remove-btn" title="Remove Avatar">
        🗑️
</button>
        <input type="file" onChange={handleUpload} />
        
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
