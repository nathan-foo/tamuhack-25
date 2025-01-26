import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { FaMicrophone } from "react-icons/fa";

const CodeScreen = ({ question, setAnswer }) => {
  const [recording, setRecording] = useState(false);
  const [microphone, setMicrophone] = useState(false);
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] relative overflow-clip text-white h-screen text-sm pt-16">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="rounded-3xl p-1 bg-gradient-to-b from-purple-600 to-purple-400 h-[500px]">
          <div className='flex items-center justify-center h-full rounded-[calc(1.5rem-1px)] p-10 bg-slate-900'>
            {/* To-do still have to pass in props */}
            <div
              className='flex flex-col items-start justify-center gap-4 text-white'
              style={{ whiteSpace: 'pre-line' }}
            >
              <div className='font-bold text-xl'>{question.title}</div>
              <div>{question.question}</div>
              <div>
                <div>Example 1:</div>
                <div>{question.example_1}</div>
              </div>
              <div>
                <div>Example 2:</div>
                <div>{question.example_2}</div>
              </div>
              {/* Remove hard coded answer once text input is given */}
            </div>
          </div>
        </div>
        <div className='grid grid-rows-2 gap-4'>
          {!microphone ? (
            <div className='flex items-start justify-start'>
              <Textarea className='bg-slate-900 text-white w-full h-[400px] p-6 text-start' placeholder='Type here...'></Textarea>
            </div>
          ) : (
            <div className='flex items-start justify-start'>
              <div className='bg-slate-900 rounded-md border border-white text-white w-full h-[400px] p-6 text-start'></div>
            </div>
          )}
          <div className='flex items-start justify-start bg-slate-900 w-full max-h-[200px] rounded-lg'>
            <div className='flex items-center justify-center text-center h-full w-full text-white border border-white rounded-lg gap-16'>
              <button onClick={(() => {
                setMicrophone(true);
                setRecording(!recording);
              })}>
                {!recording ? (
                  <FaMicrophone className='text-6xl' />
                ) : (
                  <FaMicrophone className='text-6xl text-red-600' />
                )}
              </button>
              <Button className="px-12 py-4 bg-white text-black hover:bg-gray-100 m-5"
                // onClick={(() => setAnswer('use a two pointer approach, this algorithm has a time complexity of n^4 and a space complexity of n^2'))}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeScreen