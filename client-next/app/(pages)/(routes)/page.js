"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from 'next/link'

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-center">
      {user ? (
        <div>
          <p className = "text-2xl"> Hello, {user.firstName}!  </p>
          <p className = "text-base">Welcome to Race Code.</p>
          <Button className = "m-8">Play</Button> 
          
        </div>
      ) : (
        <div>
          <p className = "text-2xl">Hello, world! Welcome to Race Code. </p>
          <p className = "text-base">A 1v1 LeetCode blitz interview preperation game. </p>
          <Link href = 'sign-in'>
            <Button className = "m-8">Get started</Button>
          </Link> 
        </div>
      )}
      
    </div>
  );
}