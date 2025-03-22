import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`/api/comments/${postId}`).then(res => setComments(res.data));
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/comments/${postId}`, { content: text }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setComments([res.data, ...comments]);
    setText('');
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      {token && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="3"
            placeholder="Add a comment..."
            required
          />
          <button type="submit">Post</button>
        </form>
      )}
      <ul>
        {comments.map(c => (
          <li key={c.id}>
            <strong>{c.User.username}</strong>: {c.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
