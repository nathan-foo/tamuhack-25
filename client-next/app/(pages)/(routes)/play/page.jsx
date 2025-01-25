"use client"

import React, { useState } from 'react'
import LobbyScreen from '../../_screens/LobbyScreen'

const PlayPage = () => {
  const [roomId, setRoomId] = useState("");

  return (
    <div>
      {/* code still broken */}
        <LobbyScreen onRoomJoin={((id) => setRoomId(id))} />
    </div>
  )
}

export default PlayPage