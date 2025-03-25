import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const token = localStorage.getItem('token');
  const postRef = useRef(); // for PDF export

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      setPost(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch post:', err);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/api/comments/post/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error('❌ Failed to fetch comments:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      await axios.post(
        '/api/comments',
        { postId: id, content: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewComment('');
      fetchComments(); // refresh comments
    } catch (err) {
      console.error('❌ Failed to post comment:', err);
    }
  };

  const handleDownloadPDF = () => {
    const element = postRef.current;
    html2pdf()
      .set({
        margin: 1,
        filename: `${post.title}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .from(element)
      .save();
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="post-detail-container">
      <div ref={postRef} className="pdf-section">
        <h2>{post.title}</h2>
        <p className="post-author">
          By User {post.userId} | {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div className="post-content">{post.content}</div>
        <p className="views-count">👁️ {post.views} views</p>
      </div>

      <button onClick={handleDownloadPDF} className="download-btn">
        📥 Download as PDF
      </button>

      <div className="comments-section">
        <h3>📝 Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <small>{comment.User?.username || 'Anonymous'}</small>
              <p>{comment.content}</p>
            </div>
          ))
        )}

        {token ? (
          <form className="comment-form" onSubmit={handleSubmit}>
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button type="submit">Post Comment</button>
          </form>
        ) : (
          <p>
            <em>Login to add a comment</em>
          </p>
        )}
      </div>
    </div>
  );
}
