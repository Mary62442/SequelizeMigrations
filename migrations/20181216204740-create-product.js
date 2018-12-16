'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,  allowNull:false,validate:{len: [2,30]}
      },
      description: {
        type:Sequelize.STRING, allowNull:true, validate:{len: [0,500]}
      },
      subTitle : {
        type: Sequelize.STRING, allowNull:true,
      },
      unitPrice: {
        type: Sequelize.DOUBLE,  allowNull:false
      },
      isOnOffer: {
        type:Sequelize.BOOLEAN,  allowNull:true
      },
      quantityOnOffer: {
        type:Sequelize.INTEGER,  allowNull:true
      },
      offerPrice: {
        type:Sequelize.DOUBLE,  allowNull:true
      }, 
      imageUrl: {
        type:Sequelize.STRING, allowNull:false
      },
      notes: {
        type:Sequelize.STRING, allowNull:true, validate:{len: [0, 500]}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};