module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        /*
        models = {
          'posts': Post,
          'comments': Comment,
          'tags': Tag,
          ...etc...
        }
        */
        Post.belongsTo(models.users, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        Post.hasMany(models.comments);
        Post.belongsToMany(models.tags, { through: 'post_tags' });
      }
    }
  });

  return Post;
};