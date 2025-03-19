import React, { useState } from "react";
import { login, createPost, getPosts } from "../api";
import './CreatePost.css'; // Import custom CSS file

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const [posts, setPosts] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { email: "user@example.com", password: "password123" };
    try {
      const { data } = await login(loginData); // Logging in
      localStorage.setItem("token", data.token); // Store the JWT token
      alert("Logged in successfully");
    } catch (error) {
      alert("Login failed: " + error.response?.data?.error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in to create a post");

    try {
      await createPost(form, token); // Creating a new post
      alert("Post created successfully!");
      loadPosts(); // Reload posts
    } catch (error) {
      alert("Error creating post: " + error.response?.data?.error);
    }
  };

  const loadPosts = async () => {
    try {
      const { data } = await getPosts(); // Fetching all posts
      setPosts(data);
    } catch (error) {
      alert("Error fetching posts: " + error.response?.data?.error);
    }
  };

  return (
    <div className="container">
      

      {/* Create Post Form */}
      <form onSubmit={handleCreatePost} className="post-form">
        <h2 className="form-title">Create a New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="input-field"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="input-field"
        />
        <button className="submit-btn" type="submit">Create Post</button>
      </form>

      {/* Display All Posts */}
      <div className="posts-section">
        <h2>All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
