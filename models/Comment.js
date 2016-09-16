module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comments', {
        bio: DataTypes.TEXT
    });

    return Comment;
};