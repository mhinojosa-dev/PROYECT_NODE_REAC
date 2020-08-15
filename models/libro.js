'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Libro.belongsTo(models.Autor,{
        as:'autors',
        foreignKey: 'autorId'
      })
      Libro.hasMany(models.LIBRO_CARRITO,{
        as:'libro_carritos',
        foreignKey:'libro_id'
      }); 
      // define association here
    }
  };
  Libro.init({
    titulo: {
      type:DataTypes.STRING,
      allowNull:false
    },

    descripcion: {
      type:DataTypes.STRING,
      allowNull:false
    },
    precio: { 
      type:DataTypes.DECIMAL,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};