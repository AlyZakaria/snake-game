'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Boards', {
      board_id: {
        type: DataTypes.INTEGER ,
        primaryKey: true,
        autoIncrement: true
    },
    style: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },);
  },

  async down (queryInterface, Sequelize) {
    
  }
};
