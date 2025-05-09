// server/routes/postRoutes.js
import express from 'express';
import { Post, User } from '../models/index.js';
import { Comment } from '../models/index.js'; // Add this at the top

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
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: Comment, include: [User] },
        { model: User, attributes: ['username'] }
      ]
    });

    if (!post) return res.status(404).json({ error: 'Post not found' });
    await post.increment('views');

    res.json(post);
  } catch (err) {
    console.error('Get Post Error:', err);
    res.status(500).json({ error: 'Error fetching post', details: err.message });
  }});

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


// Like a post

// Like a post
router.post('/:id/like', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.likes += 1;
    await post.save();
    res.json({ message: 'Liked!', likes: post.likes });
  } catch (err) {
    console.error('Like error:', err);
    res.status(500).json({ error: 'Failed to like post' });
  }
});


export default router;
