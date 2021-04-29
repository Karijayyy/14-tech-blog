// took code from week 14 mini project activity 28

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment')

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = { User, Post, Comment }; 