// https://stackoverflow.com/questions/70409219/get-user-id-from-session-in-next-auth-client

import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}