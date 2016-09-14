const User = require('./User');
const Post = require('./Post');
const Profile = require('./Profile');

// Nahum: Include both the 'has' and the 'belongs'
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  User: User,
  Post: Post,
  Profile: Profile
};