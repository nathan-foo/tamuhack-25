"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import DashboardCard from "../../_components/DashboardCard";

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
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#0000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip relative h-screen">
      <div className="pt-48"></div>
      <div className="flex items-center justify-center mb-24 font-bold text-4xl">
        Your Games
      </div>
      <div className="flex items-start justify-center">
        {user && games.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <DashboardCard key={index} title={game.title} code={game.gameId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;