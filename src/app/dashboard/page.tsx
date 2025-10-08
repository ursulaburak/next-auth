"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center mt-20">You must be signed in to view this page.</p>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to your Dashboard 🎉
        </h1>
        <p className="text-lg">Hello, {session.user?.name || "User"}!</p>
      </div>
    </div>
  );
}
