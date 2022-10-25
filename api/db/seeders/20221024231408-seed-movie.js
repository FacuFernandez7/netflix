'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Movies', [{
        title: 'Dragon Ball Super:Super Hero',
        synopsis: 'The Red Ribbon Army was once destroyed by Goku. The people who meet his spirit have created the ultimate androids, Gamma 1 and Gamma 2. They start attacking Piccolo and Gohan. What is the OBJETIVE? In the face of approaching danger, it is time to wake up.',
        Score: 4,
        genre: ['animated'],
        url_image: '9401aaa5-a424-4f37-a4b4-63cfc7c46828',
        age: 2022,
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
