import User from './user.js';
import Post from './post.js';

User.hasMany(Post);
Post.belongsTo(User);

export { User, Post };
