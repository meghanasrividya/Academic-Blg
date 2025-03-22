import User from './user.js';
import Post from './post.js';
import Comment from './comment.js';

// User ↔ Post
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

// Post ↔ Comment
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});
Comment.belongsTo(Post, { foreignKey: 'postId' });

// User ↔ Comment
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

export { User, Post, Comment };
