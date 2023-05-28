import User from '../models/model.user.js';
import Task from '../models/model.task.js';

// Obtener todas las tareas de un usuario
/* export const getUserTasks = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId, { include: Task });
    if (user) {
      res.json(user.Tasks);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al obtener las tareas del usuario' });
  }
}; */

export const getTasksByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Verificar si el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener las tareas del usuario
    const tasks = await Task.findAll({ where: { userId } });

    return res.json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

// Crear una nueva tarea para un usuario
export const createTaskForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      const { title, deadline, status, assignedTo } = req.body;
      const task = await Task.create({ title, deadline, status, userId, assignedTo });
      res.status(201).json(task);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear la tarea para el usuario' });
  }
};

// Actualizar una tarea de un usuario
export const updateTaskForUser = async (req, res) => {
  const { userId, taskId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      const task = await Task.findOne({ where: { id: taskId, userId } });
      if (task) {
        await task.update(req.body);
        res.json(task);
      } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
      }
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar la tarea del usuario' });
  }
};

// Eliminar una tarea de un usuario
export const deleteTaskForUser = async (req, res) => {
  const { userId, taskId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      const task = await Task.findOne({ where: { id: taskId, userId } });
      if (task) {
        await task.destroy();
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
      }
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al eliminar la tarea del usuario' });
  }
};
