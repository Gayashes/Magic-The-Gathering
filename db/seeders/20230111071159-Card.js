const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      title: 'Каргский устрашитель',
      link: 'https://www.goha.ru/s/E:Ca/6X/MghqAkRsIR.png',
      cost: '10,2',
      condition: 'хорошее',
      status: true,
      description: 'устрашает сильно',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Перобразовательница магмы',
      link: 'https://www.goha.ru/s/E:CL/eX/SP0SMskkme.png',
      cost: '4',
      condition: 'плохое',
      status: true,
      description: 'кодовство и прочие магические вещи',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
