import axios from "axios";

export const getUserDetails = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/v1/auth/me",
      {
        withCredentials: true, 
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.error("Error fetching user:", error.response?.data || error.message);
    throw error;
  }
};
