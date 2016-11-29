module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mobile: DataTypes.INTEGER(7),

    });

    return User;
};