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
};

export default NextAuth(authOptions);
