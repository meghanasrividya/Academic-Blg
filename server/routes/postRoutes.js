import express from 'express';
import { Post } from '../models/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;

    // TEMP: Hardcoded user ID for now (replace with JWT later)
    const userId = 1;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newPost = await Post.create({
      title,
      content,
      userId // ✅ This is required by your database schema
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error('❌ Create Post Error:', err);
    res.status(500).json({ error: 'Failed to create post', details: err.message });
  }
});

export default router;
