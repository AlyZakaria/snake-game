module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define("Game", {

        game_id: {
            type: DataTypes.INTEGER ,
            // allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        current_user: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        game_cap: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'running', 'done'),
            allowNull: false,
            defaultValue: 'pending',
        },
        last_play: {
           type: DataTypes.DATE
        }
    }, {
        id: false,
        timestamps: false
    });
    
    return Game;
}

