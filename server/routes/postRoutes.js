// server/routes/postRoutes.js
import express from 'express';
import { Post, User } from '../models/index.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = 1; // Temporary until JWT is added
    const post = await Post.create({ title, content, userId });
    res.status(201).json(post);
  } catch (err) {
    console.error('Create Post Error:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: { model: User, attributes: ['username'] },
      order: [['createdAt', 'DESC']]
    });
    res.json(posts);
  } catch (err) {
    console.error('Fetch Posts Error:', err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    console.error('Get Post Error:', err);
    res.status(500).json({ error: 'Error fetching post' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const [updated] = await Post.update(
      { title, content },
      { where: { id: req.params.id } }
    );

    if (updated) {
      res.json({ message: 'Post updated' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error('Edit Error:', err);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Post.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

export default router;
