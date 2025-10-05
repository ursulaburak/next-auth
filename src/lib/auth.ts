import { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

if (!process.env.AUTH0_CLIENT_ID || !process.env.AUTH0_CLIENT_SECRET || !process.env.AUTH0_ISSUER_BASE_URL) {
  throw new Error('Missing Auth0 environment variables');
}

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.sub!;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};