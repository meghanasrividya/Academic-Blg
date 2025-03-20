import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-blog">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.user.username}</p>
      <p>Category: {post.category.category_name}</p>
    </div>
  );
};

export default SingleBlog;