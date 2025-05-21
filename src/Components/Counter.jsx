import React, { useState } from 'react'

function Counter() {
    const [score, setScore] = useState(0);
  return (
    <div>
        <div className='m-4'>
            <h2>
                Current Score: {score} 
            </h2>
            <button onClick={()=>setScore(score+10)} className='px-6 py-1 mt-2 bg-blue-400 rounded text-zinc-100'>
                Run
            </button>
            <button onClick={()=>setScore(0)} className='px-6 py-1 mt-2 ml-2 bg-blue-400 rounded text-zinc-100'>
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter