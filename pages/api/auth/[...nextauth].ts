import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Username",
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        console.log("API Called");
        const formData = {
          username: credentials.username,
          password: credentials.password,
          type: "SignIn",
        };
        console.log(formData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signin`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        if (user.status == 200) {
          return user;
        }
        return null;
      },
    }),
  ],
  /*
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
        
      return session;
    },
  },*/
};

export default NextAuth(authOptions);
