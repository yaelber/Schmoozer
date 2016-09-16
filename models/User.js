module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    }, {
        classMethod: {
            associate: function(models) {
                User.hasOne(models.profiles);
                User.hasMany(models.posts);
                User.hasMany(models.comments);
            }
        }
    });

    return User;
};