/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        name: 'Красивый',
        rightAnswer: true,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Плохой',
        rightAnswer: false,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Потому что',
        rightAnswer: false,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Почему',
        rightAnswer: true,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'И здесь',
        rightAnswer: false,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'И там',
        rightAnswer: true,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Никогда',
        rightAnswer: true,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сегодня',
        rightAnswer: false,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
