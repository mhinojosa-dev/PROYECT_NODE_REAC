'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Libro_carritos',
      'libro_id',
      {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Libros'
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
      'Libro_carritos',
      'libro_id'
    )
  }
};
