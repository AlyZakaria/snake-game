module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define("Board", {
        board_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        id: false,
        timestamps: false
    });
    return Board;
}

