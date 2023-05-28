import { DataTypes } from 'sequelize';
import sequelize from '../config.js';
/* import User from './model.user.js'; */

// Define la definición de `Task` solamente una vez
const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Importa el modelo User
import User from './model.user.js';

// Establecer la asociación entre User y Task
Task.belongsTo(User, { foreignKey: 'userId' });

export default Task;