"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center h-screen">
      {user ? (
        <div>
          Hello, {user.firstName}!
        </div>
      ) : (
        <div>
          Hello, world!
        </div>
      )}
    </div>
  );
}