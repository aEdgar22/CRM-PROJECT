import axiosInstance from "../utils/axiosConfig"

const createUserService = async (user) => {
  try {
    if (user !== undefined && user !== null) {
        const newUser = await axiosInstance.post('/create-user', user);
        return newUser
    }
  } catch (error) {
     console.log(error);
  }

}

export default createUserService