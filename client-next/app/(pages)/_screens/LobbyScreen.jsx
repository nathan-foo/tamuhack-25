"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Real functionality is not yet working
const LobbyScreen = ({ setRoomId }) =>  {
  const [gameCode, setGameCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\\d{7}$/.test(gameCode)) {
      setError("");
      router.push(`/game/${gameCode}`); // Navigate to a dynamic route
    } else {
      setError("Please enter a valid 7-digit game code.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
      >
        <h1 className="text-2xl font-semibold text-center mb-4">
          Enter Game Code
        </h1>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="7-digit game code"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
            maxLength={7}
            className="w-full"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <Button
          type="submit"
          className="w-full bg-gray-800 text-white hover:bg-gray-900"
          onClick={(() => setRoomId("8755935"))}
        >
          Join Game
        </Button>
      </form>
    </div>
  );
}

export default LobbyScreen
// const LobbyScreen = ({ setRoomId }) => {
//     return (
//         <div className='flex items-center justify-center h-screen'>
//             {/* Screen for user to enter a game code */}

//             <button onClick={(() => setRoomId("8755935"))}>join game</button>
//         </div>
//     )
// }

// export default LobbyScreen