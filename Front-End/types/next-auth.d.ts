import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
      refreshToken?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}