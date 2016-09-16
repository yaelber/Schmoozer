module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comments', {
        content: DataTypes.TEXT
    }, {
      classMethods: {
        associate: function(models){
          Comment.belongsTo(models.posts, {
            onDelete: 'CASCADE',
            foreignKey: {
              allowNull: false
            }
          });

          Comment.belongsTo(models.users, {
            onDelete: 'SET NULL',
            foreignKey: {
              allowNull: true
              // a comment doesn't always belong to
              // a user (can be anonymous)
            }
          });
        }
      }
    });

    return Comment;
};