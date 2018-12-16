'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {type: Sequelize.STRING,  allowNull:false,validate:{len: [2,30]}},
    description: {type:Sequelize.STRING, allowNull:true, validate:{len: [0,500]}}   
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};