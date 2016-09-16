module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.users, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });

        Post.hasMany(models.comments);
      }
    }
  });

  return Post;
};