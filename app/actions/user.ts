
"use server"
import axios from "axios";
// actions/user.ts
export const signin = async ({
  userEmail,
  userPassword,
}: {
  userEmail: string;
  userPassword: string;
}) => {
  try {
    const response = await axios.post("https://portfolio-be-flame.vercel.app/api/v1/auth/signin", {
      userEmail,
      userPassword,
    });

    console.log("Signed in successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Sign in failed:", error.response?.data || error.message);
    throw error;
  }
};
