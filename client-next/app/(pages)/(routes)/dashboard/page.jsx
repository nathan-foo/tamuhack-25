"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [games, setGames] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchGame = async () => {
      if (!user) return;

      const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/games?createdBy=${user.id}`;

      try {
        const response = await fetch(url, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setGames(data.games);
      } catch (error) {
        console.error(`Failed to get games:`, error);
      }
    };
    fetchGame();
  }, [user]);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#0000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip">
      <div className="flex items-center justify-center h-screen">
        {user && games.length > 0 ? (
          <div className="flex items-center justify-center gap-16 h-screen">
            {games.map((game, index) => (
              <div key={index}>
                {game.title}: {game.gameId}
              </div>
            ))}
          </div>
        ) : (
          <div>Getting games...</div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;