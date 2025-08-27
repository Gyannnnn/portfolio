import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    jwt_token?: string,
    role:string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      jwt_token?: string;
      role:string
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name: string;
    jwt_token?: string,
    role: string;
  }
}
