'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrito.hasMany(models.LIBRO_CARRITO,{
        as:'libro_carritos',
        foreignKey:'cart_id'
      }); 
    }
  };
  Carrito.init({
    nit: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue: 'sin nombre'
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Carrito',
  });
  return Carrito;
};