import NextAuth, { Awaitable, NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Adapters from "next-auth/adapters";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

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
        /*
        const formData = {
          username: credentials.username,
          password: credentials.password,
          type: "SignIn",
        };
        console.log(formData);*/

        /*const request = new Request(
          `${process.env.NEXT_PUBLIC_HOST}/api/signin`,
          {
            method: "POST",
            body: JSON.stringify(formData),
          }
        );

        const user = await request.json();
        if (user.status == 200) {
          return user;
        }
        return null;*/

        const res = await fetch(`${process.env.LAMBDA_VERIFY_SIGNIN}`, {
          method: "POST",
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
            type: "SignIn",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        console.log("User is from creds: ", user);

        if (user.name) {
          return user;
        }
        return null;
        /*
        const user2 = {
          _id: "612b4646c41e9e9f5068727a",
          email: "email@test.com",
          name: "admin",
        };
        return user2;*/
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    /*async signIn({ user }) {
      return user.username;
    },*/
    async jwt({ token, profile }) {
      console.log("Profile: ", profile);
      console.log("Token: ", token);

      if (profile) {
        return { ...token, user: profile };
      }
      return token;
    },
    async session({ session, token }: any) {
      console.log(token);
      /*console.log("User is: ", user);
      console.log("Session is: ", session);
      session.user = user;
      console.log("Session is: ", session);
      return Promise.resolve(session);*/
      session.user.username = token.username;
      //console.log("Session is: ", session);
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
