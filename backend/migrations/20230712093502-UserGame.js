'use strict';


const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("UserGames", {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      color: {
        type: DataTypes.STRING,
        defaultValue: "white",
      }
    }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
