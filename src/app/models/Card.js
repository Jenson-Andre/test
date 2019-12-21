import Sequelize, { Model } from 'sequelize';

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static async nextID() {
    const next = await Card.max('id');

    return next + 1;
  }
}

export default Card;
