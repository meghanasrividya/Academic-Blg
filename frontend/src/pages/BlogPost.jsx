import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api";
import "./BlogPost.css"; // Import the CSS for styling

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(({ data }) => setPost(data));
  }, [id]);

  return post ? (
    <div className="blogpost-container">
      <div className="blogpost-card">
        <h1 className="blogpost-title">{post.title}</h1>
        <p className="blogpost-content">{post.content}</p>
        <p className="blogpost-category">Category: <span>{post.category}</span></p>
      </div>
    </div>
  ) : (
    <div className="loading-container">
      <p>Loading...</p>
    </div>
  );
};

export default BlogPost;
