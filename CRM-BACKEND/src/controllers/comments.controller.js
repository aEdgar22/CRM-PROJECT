import Comment from '../models/model.comments.js';

// Obtener todos los comentarios de un usuario
export const getUserComments = async (req, res) => {
  const { userId } = req.params;

  try {
    const comments = await Comment.findAll({ where: { UserId: userId } });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al obtener los comentarios del usuario' });
  }
};

// Crear un nuevo comentario para un usuario
export const createCommentForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const comment = await Comment.create({ ...req.body, UserId: userId });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear el comentario para el usuario' });
  }
};

// Actualizar un comentario de un usuario
export const updateCommentForUser = async (req, res) => {
  const { userId, commentId } = req.params;

  try {
    const comment = await Comment.findOne({ where: { id: commentId, UserId: userId } });
    if (comment) {
      await comment.update(req.body);
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al actualizar el comentario del usuario' });
  }
};

// Eliminar un comentario de un usuario
export const deleteCommentForUser = async (req, res) => {
  const { userId, commentId } = req.params;

  try {
    const comment = await Comment.findOne({ where: { id: commentId, UserId: userId } });
    if (comment) {
      await comment.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al eliminar el comentario del usuario' });
  }
};
