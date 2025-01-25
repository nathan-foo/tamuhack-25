"use client"

import React, { useEffect, useState } from 'react'
import LobbyScreen from '../../_screens/LobbyScreen'
import StartScreen from '../../_screens/StartScreen';
import CodeScreen from '../../_screens/CodeScreen';
import FeedbackScreen from '../../_screens/FeedbackScreen';
import WaitingScreen from '../../_screens/WaitingScreen';
import EndScreen from '../../_screens/EndScreen';
import IntermissionScreen from '../../_screens/IntermissionScreen';
import { io } from 'socket.io-client';
import toast from 'react-hot-toast';

let socket;

const PlayPage = () => {
  // Room info
  const [roomId, setRoomId] = useState();
  const [player, setPlayer] = useState();
  const [players, setPlayers] = useState();

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

  useEffect(() => {
    socket = io('http://localhost:8000');

    socket.on('broadcastPlayerJoin', (player, players) => {
      setPlayer(player);
      setPlayers(players);
      toast.success(`${player.name} joined the game`);
    });

    socket.on('broadcastPlayerLeave', (players) => {
      setPlayers(players);
    })
  }, []);

  // Send message to socket when player joins a room
  useEffect(() => {
    if (!roomId) return;
    socket.emit('playerJoin', roomId);
  }, [roomId]);

  return (
    <div>
      {!game ? (
        // Screen to enter game code
        <LobbyScreen setRoomId={setRoomId} setGame={setGame} setTitle={setTitle} setDifficulty={setDifficulty} setTopic={setTopic} setRounds={setRounds} />
      ) : (
        <div>
          {!started ? (
            <div>
              {players && (
                // Screen to start the game
                <StartScreen title={title} difficulty={difficulty} topic={topic} rounds={rounds} players={players} setStarted={setStarted} />
              )}
            </div>
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