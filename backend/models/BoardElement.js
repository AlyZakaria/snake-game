

module.exports = (sequelize, DataTypes) => {
    const board_element = sequelize.define("board_element", {

        board_element_id: {
            type: DataTypes.INTEGER ,
            allowNull: false
        },
        from: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        to: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        }
    }, {
        id: false,
        timestamps: false
    });
    
    
    return board_element;
}

