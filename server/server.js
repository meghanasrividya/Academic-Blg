import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import commentRoutes from './routes/commentRoutes.js';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use('/api/comments', commentRoutes);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Static route to serve uploaded avatars
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB and server start
sequelize.sync().then(() => {
  console.log('✅ Database synced');
  app.listen(5000, () => console.log('🚀 Server running on port 5000'));
});
