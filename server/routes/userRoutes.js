// server/routes/userRoutes.js

import express from 'express';
import { User, Post } from '../models/index.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * GET /api/users/me
 * Protected route — returns the currently authenticated user's profile.
 */
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: ['id', 'username', 'email', 'createdAt'],
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'content', 'createdAt'],
          order: [['createdAt', 'DESC']],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('❌ Error fetching user profile:', err);
    res.status(500).json({ error: 'Failed to fetch profile', details: err.message });
  }
});

export default router;
