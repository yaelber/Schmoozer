module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define('profiles', {
        bio: DataTypes.TEXT
    }, {
        classMethod: {
            associate: function(models) {
                Profile.belongsTo(models.users, {
                    onDelete: 'CASCADE',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Profile;
};