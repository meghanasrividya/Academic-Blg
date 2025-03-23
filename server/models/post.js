import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Post',
});

export default Post;
