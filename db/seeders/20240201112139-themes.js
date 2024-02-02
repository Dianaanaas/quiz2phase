/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Кино',
        img: 'https://esquire.kz/wp-content/uploads/2022/12/memy.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мемы',
        img: 'https://cs12.pikabu.ru/post_img/big/2022/05/26/7/1653560579164255219.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
