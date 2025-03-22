import express from 'express';
import multer from 'multer';
import path from 'path';
import { User, Post } from '../models/index.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `avatar_${req.user.userId}${ext}`);
  }
});
const upload = multer({ storage });

// Get user profile
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: ['id', 'username', 'email', 'avatar'],
      include: [{ model: Post }],
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile', details: err.message });
  }
});

// Upload avatar
router.post('/avatar', authenticate, upload.single('avatar'), async (req, res) => {
  try {
    const filePath = `/uploads/${req.file.filename}`;
    await User.update({ avatar: filePath }, { where: { id: req.user.userId } });
    res.json({ message: 'Avatar uploaded', path: filePath });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload avatar', details: err.message });
  }
});

export default router;
