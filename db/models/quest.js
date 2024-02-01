const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.hasMany(Answer, { foreignKey: 'questId' });
    }
  }
  Quest.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    themeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'Cascade',

    },
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};
