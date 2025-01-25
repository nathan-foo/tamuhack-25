"use client"

import React, { useEffect, useState } from 'react'
import LobbyScreen from '../../_screens/LobbyScreen'
import StartScreen from '../../_screens/StartScreen';
import CodeScreen from '../../_screens/CodeScreen';
import FeedbackScreen from '../../_screens/FeedbackScreen';
import WaitingScreen from '../../_screens/WaitingScreen';
import EndScreen from '../../_screens/EndScreen';
import IntermissionScreen from '../../_screens/IntermissionScreen';

const PlayPage = () => {
  // From lobby screen
  const [roomId, setRoomId] = useState();

  // Game setup
  const [game, setGame] = useState(null);
  const [started, setStarted] = useState(false);

  // Game states
  const [question, setQuestion] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [intermission, setIntermission] = useState(false);

  // From database after room code is entered
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [rounds, setRounds] = useState("");

  // 
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
        // Screen to enter game code
        <LobbyScreen setRoomId={setRoomId} />
      ) : (
        <div>
          {!started ? (
            // Screen to start the game
            <StartScreen title={title} difficulty={difficulty} topic={topic} rounds={rounds} setStarted={setStarted} />
          ) : (
            <div>
              {!ended ? (
                <div>
                  {question ? (
                    <div>
                      {!submitted ? (
                        // Screen displaying the current coding question
                        <CodeScreen />
                      ) : (
                        // Waiting room
                        <WaitingScreen />
                      )}
                    </div>
                  ) : (
                    // Question will be removed after time is up and show this
                    <div>
                      {feedback ? (
                        <div>
                        {!intermission ? (
                          // Show feedback for user answer
                          <FeedbackScreen />
                        ) : (
                          // Score vs opponent etc.
                          <IntermissionScreen />
                        )}
                        </div>
                      ) : (
                        // Waiting room
                        <WaitingScreen />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // Game end screen
                <EndScreen />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PlayPage