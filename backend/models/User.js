module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {

        user_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true ,
            defaultValue: 1
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    return Users;
}
















