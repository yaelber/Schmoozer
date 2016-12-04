module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mobile: DataTypes.STRING(10),

    });

    return User;
};