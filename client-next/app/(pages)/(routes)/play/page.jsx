"use client"

import React, { useEffect, useState } from 'react'
import LobbyScreen from '../../_screens/LobbyScreen'
import StartScreen from '../../_screens/StartScreen';
import CodeScreen from '../../_screens/CodeScreen';

const PlayPage = () => {
  // From lobby screen
  const [roomId, setRoomId] = useState();

  // Game
  const [game, setGame] = useState(null);
  const [started, setStarted] = useState(null);

  // From database after room code is entered
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [rounds, setRounds] = useState("");

  useEffect(() => {
    if (!roomId) return;

    const setGameData = async () => {
      // const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/games?gameId=${roomId}`;
      const testUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/games?gameId=8755935`;

      try {
        const response = await fetch(testUrl);

        console.log(response);

        if (!response.ok) {
          toast.error('Something went wrong.');
          throw new Error(`Response status: ${response.status}`);
        } else {
          const json = await response.json();
          const data = json.games[0];

          console.log(data);

          setGame(data);

          setTitle(data.title);
          setDifficulty(data.difficulty);
          setTopic(data.topic);
          setRounds(data.rounds);
        }
      } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
      }
    }
    setGameData();
  }, [roomId]);

  return (
    <div>
      {!game ? (
        <LobbyScreen setRoomId={setRoomId} />
      ) : (
        <div>
          {!started ? (
            <StartScreen title={title} difficulty={difficulty} topic={topic} rounds={rounds} setStarted={setStarted} />
          ) : (
            <div>
              <CodeScreen />
            </div>
          )}
        </div>

      )}
    </div>
  )
}

export default PlayPage