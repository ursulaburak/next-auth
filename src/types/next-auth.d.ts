import type { DefaultSession } from 'next-auth';


declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    sub?: string;
  }
}

declare module 'next-auth' {
  // Merges your custom fields with the default Session interface
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      role?: string;
    } & DefaultSession['user']; // The type 'DefaultSession' is correctly used here
  }

  // NOTE: You don't need to redeclare the 'JWT' interface here if you already declared it in 'next-auth/jwt'.
  // If you must redeclare it, ensure it's not overriding existing properties.
  // The first 'declare module "next-auth/jwt"' block is sufficient for the token object.
  // I recommend removing the second JWT interface declaration below.

  // interface JWT { 
  //   accessToken?: string;
  //   refreshToken?: string;
  //   role?: string;
  // }
}