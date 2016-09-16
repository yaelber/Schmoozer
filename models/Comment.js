module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comments', {
        bio: DataTypes.TEXT
    }, {
      classMethods: {
        associate: function(models){
          Comment.belongsTo(models.posts, {
            onDelete: 'CASCADE',
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });

    return Comment;
};