'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Series', [{
      title: 'El Marginal',
      synopsis: 'An undercover ex-cop tries to break up a gang that operates from prison, but first he must master the codes of the underworld to survive.',
      score: 5,
      genre: ['action'],
      seasons: 5,
      url_image: 'fb8508d8-689f-4e1b-8c64-9233bdd7820b',
      age: 2016,
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Series', null, {});
  }
};
