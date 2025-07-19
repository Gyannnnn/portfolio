import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

interface signin {
  message: string;
  token: string;
  user: {
    id: string;
    userEmail: string;
    userName: string;
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Enter Your email",
          placeholder: "gyan@gyan.iitkirba.xyz",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*******",
        },
      },
      authorize: async (credentials) => {
        const response = await axios.post<signin>(
          "https://portfolio-be-flame.vercel.app/api/v1/auth/signin",
          {
            userEmail: credentials?.email,
            userPassword: credentials.password,
          }
        );

        const { user, token } = response.data;

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.userEmail,
          name: user.userName,
          token, // pass token forward
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.accessToken = ( user as any).token; // Save token in JWT
      }
      return token;
    },
    async session({ session, token }) {
      // Add token to session object
      session.accessToken = token.accessToken as string;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
});
