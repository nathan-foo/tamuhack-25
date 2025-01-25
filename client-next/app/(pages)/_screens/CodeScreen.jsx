import React from 'react'

const CodeScreen = ({ question, setAnswer }) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* To-do still have to pass in props */}
      <div
        className='flex flex-col items-center justify-center gap-4'
        style={{ whiteSpace: 'pre-line' }}
      >
        <div>{question.title}</div>
        <div>{question.question}</div>
        <div>{question.example_1}</div>
        <div>{question.example_2}</div>
        <button onClick={setAnswer}>Submit</button>
      </div>
    </div>
  )
}

export default CodeScreen