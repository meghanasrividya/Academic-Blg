import React, { useState } from "react";
import { createPost } from "../api";
import "./CreatePost.css"; // Import the CSS for styling

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", content: "", category: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Login required!");

    await createPost(form, token);
    alert("Post created!");
  };

  return (
    <div className="create-post-container">
      <div className="create-post-card">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit} className="create-post-form">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="create-post-input"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="create-post-input"
            required
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="create-post-textarea"
            required
          ></textarea>
          <button type="submit" className="create-post-button">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
