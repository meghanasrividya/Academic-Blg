import React, { useState } from "react";
import { createPost } from "../api";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
