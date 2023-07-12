'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const g = {board_id: 1, style: 'get_image/:1'}
  

    await queryInterface.insert(null, 'boards', g);
    const boardElementsData = [
      [1, 1, 38, 'l',   2],
      [2, 4, 14, 'l',   2],
      [3, 8, 10, 'l',   2],
      [4, 21, 42, 'l',  2],
      [5, 28, 76, 'l',  2],
      [6, 36, 6, 's',   2],
      [7, 32, 10, 's',  2],
      [8, 48, 26, 's',  2],
      [9, 50, 67, 'l',  2],
      [10, 63, 18, 's', 2],
      [11, 71, 92, 'l', 2],
      [12, 80, 99, 'l', 2],
      [13, 88, 24, 's', 2],
      [14, 95, 56, 's', 2],
      [15, 97, 78, 's', 2],
      [16, 88, 24, 's', 2],
      [17, 97, 78, 's', 2]
    ];
    const boardElementsColumns = ['board_element_id', 'from', 'to', 'type', 'board_id'];
    await queryInterface.bulkInsert('board_elements', boardElementsData.map(data => Object.fromEntries(boardElementsColumns.map((col, i) => [col, data[i]]))));
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('board_elements', null, {});
  }
};
