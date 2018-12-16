'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          sku: 'web1',
          name: 'Presentation Website',
          description: 'Website for representation with basic navigation and description.',
          subTitle : 'Basic Website for representation.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
          unitPrice: 1000,
          isOnOffer: true,
          quantityOnOffer: 2,
          offerPrice: 1800, 
          imageUrl: 'web1.com',
          notes: ''
        }
      ],      
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
