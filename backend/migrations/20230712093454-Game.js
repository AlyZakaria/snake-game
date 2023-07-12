'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Games", {
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      current_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      game_cap: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      board_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
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
    }
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
