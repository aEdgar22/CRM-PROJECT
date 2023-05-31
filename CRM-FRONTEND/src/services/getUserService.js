import axiosInstance from "../utils/axiosConfig";

const getUserService = async () => {
  try {
    const user = await axiosInstance.get("/");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default getUserService;
