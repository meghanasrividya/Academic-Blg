import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(({ data }) => setPost(data));
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Category: {post.category}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BlogPost;
