'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const boardElementsData = [
      [1, 1, 38, 'l', 1],
      [2, 4, 14, 'l', 1],
      [3, 8, 10, 'l', 1],
      [4, 21, 42, 'l', 1],
      [5, 28, 76, 'l', 1],
      [6, 36, 6, 's', 1],
      [7, 32, 10, 's', 1],
      [8, 48, 26, 's', 1],
      [9, 50, 67, 'l', 1],
      [10, 63, 18, 's', 1],
      [11, 71, 92, 'l', 1],
      [12, 80, 99, 'l', 1],
      [13, 88, 24, 's', 1],
      [14, 95, 56, 's', 1],
      [15, 97, 78, 's', 1],
      [16, 88, 24, 's', 1],
      [17, 97, 78, 's', 1]
    ];
    const boardElementsColumns = ['board_element_id', 'from', 'to', 'type', 'board_id'];
    await queryInterface.bulkInsert('board_elements', boardElementsData.map(data => Object.fromEntries(boardElementsColumns.map((col, i) => [col, data[i]]))));
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('board_elements', null, {});
  }
};
