import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

if (
  !process.env.arCLwOuQkjqTV1YjsGFhy0KapROGMxsj ||
  !process.env['fmx8AaPpw1Qz-F5NK1H78b9rZ8yz6wZdtfsjxNqVBWqMMj91ugvaHkKLxUsPmvbi'] ||
  !process.env['dev-ue2evpin1ifzgppy.us.auth0.com']
) {
  throw new Error("Missing Auth0 environment variables");
}

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.arCLwOuQkjqTV1YjsGFhy0KapROGMxsj,
      clientSecret: process.env['fmx8AaPpw1Qz-F5NK1H78b9rZ8yz6wZdtfsjxNqVBWqMMj91ugvaHkKLxUsPmvbi'],
      issuer: process.env['dev-ue2evpin1ifzgppy.us.auth0.com'],
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
      session.accessToken = token.accessToken;
      session.user.id = token.sub!; 
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};
