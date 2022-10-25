'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.ENUM('action', 'adventure', 'animated', 'comedy', 'drama', 'horror')
      },
      seasons: {
        type: Sequelize.INTEGER
      },
      url_image: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true
      },
      age: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Series');
  }
};