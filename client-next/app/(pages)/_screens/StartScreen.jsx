import React from 'react'

const StartScreen = ({ title, difficulty, topic, rounds, setStarted }) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* This is the screen when the players have entered a room code and are waiting to start the game */}
        <ul>
            <li>{title}</li>
            <li>{difficulty}</li>
            <li>{topic}</li>
            <li>{rounds}</li>
            <button onClick={setStarted}>start game</button>
        </ul>
    </div>
  )
}

export default StartScreen