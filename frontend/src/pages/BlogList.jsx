import React, { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Link } from "react-router-dom";
import "./BlogList.css"; // Import the CSS file for styling

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Latest Blog Posts</h1>
      <div className="blog-cards-container">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-category">Category: {post.category}</p>
            <Link to={`/post/${post.id}`} className="blog-card-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
