import React from 'react'
import { Button } from "@/components/ui/button";

const FeedbackScreen = ({ feedback, setIntermission }) => {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] relative overflow-clip text-white h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[80%] rounded-3xl p-1 bg-gradient-to-b from-purple-600 to-purple-400">
          <div className="rounded-[calc(1.5rem-1px)] p-10 bg-slate-900">
            <div className='flex flex-col text-center gap-4'>
              <div className='text-4xl font-bold'>Your Score: {feedback.final_score}/10</div>
              <div className='pt-2'>{feedback.feedback}</div>
              <div className='flex items-center justify-between gap-8 pt-16 px-12'>
                <div className="relative group inline-block">
                  <span className="cursor-pointer">
                    <div className='font-bold text-3xl'>
                      {feedback.time_complexity.score}/10
                    </div>
                    <div className='pt-4 font-bold'>
                      Time Complexity
                    </div>
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded-md p-8 whitespace-pre-wrap z-10 overflow-auto shadow-lg w-[350px] border border-white">
                    {feedback.time_complexity.feedback}
                  </div>
                </div>
                <div className="relative group inline-block">
                  <span className="cursor-pointer">
                    <div className='font-bold text-3xl'>
                      {feedback.space_complexity.score}/10
                    </div>
                    <div className='pt-4 font-bold'>
                      Space Complexity
                    </div>
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded-md p-8 whitespace-pre-wrap z-10 overflow-auto shadow-lg w-[350px] border border-white">
                    {feedback.space_complexity.feedback}
                  </div>
                </div>
                <div className="relative group inline-block">
                  <span className="cursor-pointer">
                    <div className='font-bold text-3xl'>
                      {feedback.dsa.score}/10
                    </div>
                    <div className='pt-4 font-bold'>
                      Data Structures & Algorithms
                    </div>
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded-md p-8 whitespace-pre-wrap z-10 overflow-auto shadow-lg w-[350px] border border-white">
                    {feedback.dsa.feedback}
                  </div>
                </div>
                <div className="relative group inline-block">
                  <span className="cursor-pointer">
                    <div className='font-bold text-3xl'>
                      {feedback.explanation.score}/10
                    </div>
                    <div className='pt-4 font-bold'>
                      Overall Effectiveness
                    </div>
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded-md p-8 whitespace-pre-wrap z-10 overflow-auto shadow-lg w-[350px] border border-white">
                    {feedback.explanation.feedback}
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Button className="w-[50%] bg-gray-800 text-white hover:bg-gray-700 m-5" onClick={() => setIntermission(true)}>Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackScreen