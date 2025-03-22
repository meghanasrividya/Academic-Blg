// server/routes/commentRoutes.js
import express from 'express';
import { Comment, User } from '../models/index.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new comment
router.post('/', authenticate, async (req, res) => {
  try {
    const { postId, content } = req.body;
    const comment = await Comment.create({
      content,
      postId,
      userId: req.user.userId,
    });
    res.status(201).json(comment);
  } catch (err) {
    console.error('❌ Comment POST error:', err);
    res.status(500).json({ error: 'Failed to post comment' });
  }
});
router.get('/post/:id', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.id },
      include: [{ model: User, attributes: ['username'] }],
      order: [['createdAt', 'DESC']]
    });
    res.json(comments);
  } catch (err) {
    console.error('❌ Comments GET error:', err);
    res.status(500).json({ error: 'Failed to get comments' });
  }
});

export default router;
