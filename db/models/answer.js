const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Quest}) {
      this.belongsTo(Quest, { foreignKey: 'questId' });
    }
  }
  Answer.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rightAnswer: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    questId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Quests',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
