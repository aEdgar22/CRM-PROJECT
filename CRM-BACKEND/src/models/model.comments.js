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
});

Comment.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
User.hasMany(Comment, { foreignKey: 'userId', sourceKey: 'id' });

export default Comment;
