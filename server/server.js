import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import path from 'path';
import { fileURLToPath } from 'url';

import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xssClean());

// ✅ Serve static files (avatars, images, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

// ✅ Start the server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('✅ Database synced');
    app.listen(10000, () =>
      console.log('🚀 Server running on http://localhost:5005')
    );
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
