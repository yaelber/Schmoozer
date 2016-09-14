const User = require('./User');
const Post = require('./Post');
const Profile = require('./Profile');

User.hasOne(Profile);

module.exports = {
  User: User,
  Post: Post,
  Profile: Profile
};