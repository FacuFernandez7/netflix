'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Facundo',
      lastname: 'Fernandez',
      birth: new Date(),
      email: 'facuufernandez9@gmail.com',
      password: '123',
      isAdmin: true,
      url_image: '419069e6-9e7c-4cfe-89c6-2e05fcf720e0',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Nicolas',
      lastname: 'Zamora',
      birth: new Date(),
      email: 'zamo@gmail.com',
      password: '123',
      isAdmin: false,
      url_image: '0d696f9b-d480-4cb5-a709-6752001ea370',
      createdAt: new Date(),
      updatedAt: new Date() 
    }
  ], {});
  
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
