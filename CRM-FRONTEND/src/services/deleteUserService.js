import axiosInstance from "../utils/axiosConfig";


const deleteUserService = async(id) => {
    try {
        const deleteUser = await axiosInstance.delete(`/delete/${id}`);
        return deleteUser;
      } catch (error) {
        console.log(error);
      }
}

export default deleteUserService