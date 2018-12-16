'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    sku: {type:Sequelize.STRING, allowNull:false},
    name: {type: Sequelize.STRING,  allowNull:false,validate:{len: [2,30]}},
    description: {type:Sequelize.STRING, allowNull:true, validate:{len: [0,500]}},
    subTitle : {type: Sequelize.STRING, allowNull:true,},
    unitPrice: {type: Sequelize.DOUBLE,  allowNull:false,},
    isOnOffer: {type:Sequelize.BOOLEAN,  allowNull:true,},
    quantityOnOffer: {type:Sequelize.INTEGER,  allowNull:true,},
    offerPrice: {type:Sequelize.DOUBLE,  allowNull:true,}, 
    imageUrl: {type:Sequelize.STRING, allowNull:false,},
    notes: {type:Sequelize.STRING, allowNull:true, validate:{len: [0, 500]}},
    palla: {type:Sequelize.STRING}
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Category);
  };
  return Product;
};