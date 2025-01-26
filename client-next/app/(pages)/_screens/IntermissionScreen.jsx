import { Button } from '@/components/ui/button'
import React from 'react'

const IntermissionScreen = ({ players, handleNewQuestion }) => {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] relative overflow-clip text-white h-screen">
      <div className='flex items-center justify-center'>
        <div className='flex flex-col gap-4 w-full px-12'>
          <div className='text-5xl font-bold text-center pt-48 pb-24'>
            Player Scores
          </div>
          {players.map((player, index) => (
            <div key={index} className='flex items-start justify-between bg-slate-900 py-4 px-16 rounded-lg text-white'>
              <div className='font-bold'>
                {player.name}
              </div>
              <div className='font-bold'>
                {player.totalScore}
              </div>
            </div>
          ))}
          <div className='flex items-center justify-center'>
            <Button className='mt-4 w-56' onClick={handleNewQuestion}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntermissionScreen