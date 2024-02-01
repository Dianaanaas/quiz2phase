/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quests', [
      {
        title: 'Какой?',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Почему?',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Где?',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Когда?',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quests', null, {});
  },
};
