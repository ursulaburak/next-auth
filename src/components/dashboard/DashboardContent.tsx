'use client';

import { signOut } from 'next-auth/react';
import { User } from 'next-auth';

interface DashboardContentProps {
  user: User;
}

export function DashboardContent({ user }: DashboardContentProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/auth/signin' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
            <h2 className="text-2xl font-bold mb-4">Protected Content</h2>
            <p className="text-gray-600">
              This page is protected by NextAuth middleware and requires authentication.
            </p>
            <div className="mt-4 p-4 bg-white rounded shadow">
              <h3 className="font-semibold">User Info:</h3>
              <pre className="mt-2 text-sm">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}