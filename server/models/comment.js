import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // ❌ REMOVE postId and userId — Sequelize adds them automatically
}, {
  sequelize,
  modelName: 'Comment',
});

export default Comment;
