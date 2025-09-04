import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import axios from "axios";

interface SignInResponse {
  message: string;
  token: string;
  user: {
    id: string;
    userEmail: string;
    userName: string;
    userRole:string
  };
}

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials)=> {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          const res = await axios.post<SignInResponse>(
            "https://portfolio-be-flame.vercel.app/api/v1/auth/signin",
            {
              userEmail: email,
              userPassword: password,
            }
          );          
          const { user, token } = res.data;
          if (!user) {
            return null;
          }
          console.log(user.userRole);
          return {
            id: user.id,
            email: user.userEmail,
            name: user.userName,
            jwt_token:token,
            role:user.userRole
          } as any;
        } catch (error) {
          const err = error as Error;
          if (error instanceof ZodError) {
            return null;
          }
          console.log("Login Failed : " + err.message);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.id = user.id),
          (token.name = user.name),
          (token.email = user.email),
          (token.jwt_token = (user as any).jwt_token),
           (token.role = (user as any).role);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user.id = token.id as string),
          (session.user.name = token.name as string),
          (session.user.email = token.email as string),
          (session.user.jwt_token = token.jwt_token as string)
          session.user.role = token.role as string;
      }
      return session;
    },
  },
});
