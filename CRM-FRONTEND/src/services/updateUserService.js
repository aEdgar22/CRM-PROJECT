import axiosInstance from "../utils/axiosConfig";

const updateUserService = async (user) => {
    try {
        const updateUser = await axiosInstance.put(`/update/${user.userId}`, user.data);
        return updateUser;
      } catch (error) {
        console.log(error);
      }
}

export default updateUserService;