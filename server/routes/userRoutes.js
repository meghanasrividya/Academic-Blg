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
      const avatarFile = req.file.filename;
      const userId = req.user.userId;
  
      await User.update(
        { avatar: avatarFile },
        { where: { id: userId } }
      );
  
      res.json({ message: 'Avatar uploaded successfully', avatar: avatarFile });
    } catch (err) {
      res.status(500).json({ error: 'Failed to upload avatar', details: err.message });
    }
  });

export default router;
