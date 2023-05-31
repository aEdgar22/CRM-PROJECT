import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], selectedUser: null },
  reducers: {

    setUsers: (state, action) => {
      state.users = action.payload;
    }, 

    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if(index !== -1) {
        state.users[index] = action.payload;
      }
    },
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
      if (state.selectedUser && state.selectedUser.id === action.payload) {
        state.selectedUser = null;
      }
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
});

export const { selectUser, updateUser, createUser, clearSelectedUser, setUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
