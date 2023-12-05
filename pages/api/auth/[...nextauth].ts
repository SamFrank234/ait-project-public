// https://github.com/EBEREGIT/nextjs-nextauth-tut/blob/main/page_router_tutorial/pages/api/auth/%5B...nextauth%5D.js

import dbConnect from "@/lib/dbConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { SessionStrategy } from "next-auth";
import type { Session, User as AuthUser } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { AdapterUser } from "next-auth/adapters";

interface credentials {
    email: string
    password: string
}

const strat :SessionStrategy = "jwt"

export const authOptions = {
    session:{
      strategy: strat
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'username',
                    placeholder: 'username'
                  },
                  password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    return null
                  }
                  const { username, password } = credentials;
        
                try {
                  await dbConnect();
                  const user = await User.findOne({ username });
        
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
    callbacks: {
      jwt({ token, user } : {token: JWT, user: AdapterUser | AuthUser}) {
        if (user) {
          token.id = user?.id
        }
        return token
      },
      session({ session, token } : {session: Session, token: JWT}) {
          session.user.id = token.id;
          return session;
        },
    },
}

export default NextAuth(authOptions)