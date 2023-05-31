import createUserService from "../../services/createUserService";
import deleteUserService from "../../services/deleteUserService";
import getUserService from "../../services/getUserService";
import updateUserService from "../../services/updateUserService";
import { createUser, setUsers, updateUser, deleteUser } from "../slices/userSlice";

export const getUsers = () => {
  return async (dispatch) => {
    const users = await getUserService();
    dispatch(setUsers(users.data));
  };
};

export const createUserThunk = (user) => {
  return async (dispatch) => {
    const newUser = await createUserService(user);
    dispatch(createUser(newUser.data));
  };
};

export const updateUserThunk = (user) => {
  return async (dispatch) => {
    const newUpdateUser = await updateUserService(user);
    dispatch(updateUser(newUpdateUser.data));
  };
}

export const deleteUserThunk = (id) => {
  return async (dispatch) => {
    const deleteUserID = await deleteUserService(id);
    dispatch(deleteUser(parseInt(deleteUserID.data)));
  };
}