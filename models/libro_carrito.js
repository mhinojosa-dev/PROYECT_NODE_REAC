'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LIBRO_CARRITO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LIBRO_CARRITO.belongsTo(models.Libro,{
        as:'libros',
        foreignKey: 'libro_id'
      })
      LIBRO_CARRITO.belongsTo(models.Carrito,{
        as:'carritos',
        foreignKey: 'cart_id'
      })
      // define association here
    }
  };
  LIBRO_CARRITO.init({
    cantidad: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'LIBRO_CARRITO',
  });
  return LIBRO_CARRITO;
};