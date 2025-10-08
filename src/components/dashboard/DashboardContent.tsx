"use client";

import { useSession } from "next-auth/react";

export default function AdminPanel() {
  const { data: session } = useSession();

  if (session?.user.role !== "admin") {
    return <p>Access denied</p>;
  }

  return <p>Welcome Admin: {session.user.name}</p>;
}
