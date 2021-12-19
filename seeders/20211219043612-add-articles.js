'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    
     await queryInterface.bulkInsert('Articles', [{
      title: "title seeder 1",
      body: "body seeder 1",
      approved: true,
      createdAt: '2021-12-19 03:28:35',
      updatedAt:  '2021-12-19 03:28:35'
      },
      {
        title: "title seeder 2",
        body: "body seeder 2",
        approved: true,
        createdAt: '2021-12-19 03:28:35',
      updatedAt:  '2021-12-19 03:28:35'
      },
      ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
