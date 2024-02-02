/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Угадай мультфильм',
        img: 'https://assets.gq./photos/60a369c6bb28528c92559339/16:9/w_2560%2Cc_limit/8888888.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Киномемы',
        img: 'https://www.rbc.ua/static/img/1/2/123__22__652118f9ff10512b4dff3f16d4b04377_1200x675.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
