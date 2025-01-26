import React from 'react'
import { Button } from "@/components/ui/button";

const CodeScreen = ({ question, setAnswer }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg rounded-3xl p-1 bg-gradient-to-b from-purple-600 to-purple-400">
        <div className='flex items-center justify-center h-auto rounded-[calc(1.5rem-1px)] p-10 bg-white'>
          {/* To-do still have to pass in props */}
          <div
            className='flex flex-col items-center justify-center gap-4 text-black'
            style={{ whiteSpace: 'pre-line' }}
          >
            <div>{question.title}</div>
            <div>{question.question}</div>
            <div>{question.example_1}</div>
            <div>{question.example_2}</div>
            {/* Remove hard coded answer once text input is given */}
            <Button className="w-[50%] bg-gray-800 text-white hover:bg-gray-900 m-5" onClick={(() => setAnswer('use a two pointer approach, this algorithm has a time complexity of n^4 and a space complexity of n^2'))}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeScreen