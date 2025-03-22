import User from './user.js';
import Post from './post.js';

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

export { User, Post };
