// https://github.com/EBEREGIT/nextjs-nextauth-tut/blob/main/page_router_tutorial/pages/api/auth/%5B...nextauth%5D.js

import dbConnect from "@/lib/dbConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";

interface credentials {
    email: string
    password: string
}

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                  },
                  password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                  }
                  const { email, password } = credentials;
        
                try {
                  await dbConnect();
                  const user = await User.findOne({ email });
        
                  if (!user) {
                    return null;
                  }
        
                  if (password != user.password) {
                    return null;
                  }
        
                  return user;
                } catch (error) {
                  console.log("Error: ", error);
                }
              },
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}

export default NextAuth(authOptions)