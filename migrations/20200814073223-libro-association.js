'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Libros',
      'autorId',
      {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Autors'
          },
          key:'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull:false
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Libros',
      'autorId'
    )
  }
};
