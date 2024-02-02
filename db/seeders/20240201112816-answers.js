/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        name: '1 Моана',
        rightAnswer: false,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Кунг-фу Панда',
        rightAnswer: true,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Головоломка',
        rightAnswer: false,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Рапунцель',
        rightAnswer: true,
        questId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Тайна Коко',
        rightAnswer: false,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Душа',
        rightAnswer: true,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Босс - молокосос',
        rightAnswer: false,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Вверх',
        rightAnswer: false,
        questId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Время приключений',
        rightAnswer: false,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Футурама',
        rightAnswer: false,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Южный парк',
        rightAnswer: false,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Рик и Морти',
        rightAnswer: true,
        questId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Мадагаскар',
        rightAnswer: true,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Ледниковый период',
        rightAnswer: false,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Сезон Охоты',
        rightAnswer: false,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Лесная братва',
        rightAnswer: false,
        questId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Как приручить дракона',
        rightAnswer: true,
        questId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Город героев',
        rightAnswer: false,
        questId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Легенды ночных стражей',
        rightAnswer: false,
        questId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Храбрая сердцем',
        rightAnswer: false,
        questId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 История игрушек 4',
        rightAnswer: true,
        questId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Корпорация монстров',
        rightAnswer: false,
        questId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Семейка монстров',
        rightAnswer: false,
        questId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Эпик',
        rightAnswer: false,
        questId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Смешарики',
        rightAnswer: false,
        questId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Лунтик',
        rightAnswer: true,
        questId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Мимимишки',
        rightAnswer: false,
        questId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Три кота',
        rightAnswer: false,
        questId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Тайная жизнь домашних животных',
        rightAnswer: false,
        questId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Зверополис',
        rightAnswer: true,
        questId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Пингвины Мадагаскара',
        rightAnswer: false,
        questId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Зверопой',
        rightAnswer: false,
        questId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Красавица и Чудовище',
        rightAnswer: false,
        questId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Холодное сердце',
        rightAnswer: false,
        questId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Рапунцель: запутанная история',
        rightAnswer: true,
        questId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Принцесса и лягушка',
        rightAnswer: false,
        questId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '1 Феи: потерянное сокровище',
        rightAnswer: false,
        questId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '2 Похождение императора',
        rightAnswer: false,
        questId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3 Шрек',
        rightAnswer: true,
        questId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '4 Смурфики',
        rightAnswer: false,
        questId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На вручение примии "Оскар"',
        rightAnswer: false,
        questId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В фильме "Великий Гэтсби"',
        rightAnswer: true,
        questId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В фильме "Авиатор"',
        rightAnswer: false,
        questId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В фильме "Волк с Уолл-стрит"',
        rightAnswer: false,
        questId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кольцо',
        rightAnswer: true,
        questId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ноль',
        rightAnswer: false,
        questId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Всё ок',
        rightAnswer: false,
        questId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дырку от бублика',
        rightAnswer: false,
        questId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На пыльцу',
        rightAnswer: false,
        questId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На чай',
        rightAnswer: false,
        questId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На чушь',
        rightAnswer: true,
        questId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На пыль',
        rightAnswer: false,
        questId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фосаж',
        rightAnswer: false,
        questId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Черный Адам',
        rightAnswer: false,
        questId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Таксист',
        rightAnswer: false,
        questId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ведьмина гора',
        rightAnswer: true,
        questId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Покупая холодное пиво летом',
        rightAnswer: false,
        questId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Встретив бродягу',
        rightAnswer: false,
        questId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Покупая смартфон eyePhone',
        rightAnswer: true,
        questId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'вспоре с Бендером',
        rightAnswer: false,
        questId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В круиз на ТерИберку',
        rightAnswer: false,
        questId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В тюрьму',
        rightAnswer: true,
        questId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'К вулканам',
        rightAnswer: false,
        questId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'На остров',
        rightAnswer: false,
        questId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Брэд Брэйден',
        rightAnswer: false,
        questId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вилли Вонка',
        rightAnswer: true,
        questId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Силач Джакомо',
        rightAnswer: false,
        questId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Джейкоб Дженковски',
        rightAnswer: false,
        questId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Второгодники',
        rightAnswer: false,
        questId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Школа',
        rightAnswer: false,
        questId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сообщество',
        rightAnswer: true,
        questId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Друзья',
        rightAnswer: false,
        questId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зомбилэнд',
        rightAnswer: false,
        questId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Лощина мертвецов',
        rightAnswer: false,
        questId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ходячие мертвецы',
        rightAnswer: true,
        questId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Земля мертвых',
        rightAnswer: false,
        questId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Прольется',
        rightAnswer: false,
        questId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Её сомнут',
        rightAnswer: true,
        questId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Украдут',
        rightAnswer: false,
        questId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'В ней окажется не пиво',
        rightAnswer: false,
        questId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
