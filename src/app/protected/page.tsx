"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You must be logged in</p>
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
