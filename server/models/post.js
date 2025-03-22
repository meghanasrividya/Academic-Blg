import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';

class Post extends Model {}

Post.init({
  title: DataTypes.STRING,
  content: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Post',
});

Post.belongsTo(User);
User.hasMany(Post);

export default Post;
