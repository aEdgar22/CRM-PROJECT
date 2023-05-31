import { DataTypes } from 'sequelize';
import sequelize from '../config.js';
import User from './model.user.js';

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

Comment.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

export default Comment;
