import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller.js';
import { createCommentForUser, deleteCommentForUser, getUserComments, updateCommentForUser } from '../controllers/comments.controller.js';
import { createTaskForUser, deleteTaskForUser, getTasksByUser, updateTaskForUser } from '../controllers/task.controller.js';

const router = express.Router();

//rutas para usuarios 
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

//rutas para tareas de usuario
router.get('/:userId/tasks', getTasksByUser);
router.post('/:userId/create-task', createTaskForUser);
router.put('/:userId/update-task/:taskId', updateTaskForUser);
router.delete('/:userId/delete-task/:taskId', deleteTaskForUser);

//rutas para comentarios de usuario
router.get('/:userId/comments', getUserComments);
router.post('/:userId/create-comment', createCommentForUser);
router.put('/:userId/update-comment/:commentId', updateCommentForUser);
router.delete('/:userId/delete-comment/:commentId', deleteCommentForUser);


export default router;