// import all models
const Post = require('./post');
const User = require('./user');
const LikeVote = require('./like-vote');
const Comment = require('./comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
User.belongsToMany(Post, {
  through: LikeVote,
  as: 'liked_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: LikeVote,
  as: 'liked_posts',
  foreignKey: 'post_id'
});

LikeVote.belongsTo(User, {
  foreignKey: 'user_id'
});

LikeVote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(LikeVote, {
  foreignKey: 'user_id'
});

Post.hasMany(LikeVote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, LikeVote, Comment };
