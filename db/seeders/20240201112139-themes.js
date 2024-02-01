/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Фильмы',
        img: 'https://upload.wikimedia.org/wikipedia/ru/6/64/Inside_poster_%282023%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мультики',
        img: 'https://tengrinews.kz/userdata/news/2023/news_511807/thumb_m/photo_445334.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
