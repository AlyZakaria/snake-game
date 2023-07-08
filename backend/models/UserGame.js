


module.exports = (sequelize, DataTypes) => {
    const UserGame = sequelize.define("UserGame", {
        user_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            primaryKey: true
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.INTEGER ,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        id: false,
        timestamps: false
    });
    //UserGame.belongsTo(Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    //UserGame.belongsTo(Game, { foreignKey: 'game_id', onDelete: 'CASCADE' });
    return UserGame;
}

