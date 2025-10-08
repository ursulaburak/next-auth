import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

// Use proper environment variable names
if (
  !process.env.HrW9ZowUDa7XpmP3003vEycbM1MWIyOo ||
  !process.env.Bad2Zd3uRe-R3DowVN-ALIZtJ7F5EFLiEFnItplB9Ct1heORu88APRDEg_qqm8iY ||
  !process.env.dev-ue2evpin1ifzgppy.us.auth0.com
) {
  throw new Error("Missing Auth0 environment variables");
}

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.HrW9ZowUDa7XpmP3003vEycbM1MWIyOo,
      clientSecret: process.env.Bad2Zd3uRe-R3DowVN-ALIZtJ7F5EFLiEFnItplB9Ct1heORu88APRDEg_qqm8iY,
      issuer: process.env.dev-ue2evpin1ifzgppy.us.auth0.com,
    }),
  ],
  session: {
    strategy: "jwt",
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
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};