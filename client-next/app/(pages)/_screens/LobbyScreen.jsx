import React from 'react'

const LobbyScreen = ({ setRoomId }) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            {/* Screen for user to enter a game code */}
            <button onClick={(() => setRoomId("8755935"))}>join game</button>
        </div>
    )
}

export default LobbyScreen