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
  const [ended, setEnded] = useState(false);

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

  return (
    <div>
      {!game ? (
        // Screen to enter game code
        <LobbyScreen setRoomId={setRoomId} setGame={setGame} setTitle={setTitle} setDifficulty={setDifficulty} setTopic={setTopic} setRounds={setRounds} />
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