import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <Link href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Register
      </Link>
      <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Login
      </Link>
    </div>
  );
}

export default Page;
