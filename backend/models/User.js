module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {

        user_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        id: false,
        timestamps: false
    });
    return Users;
}
















