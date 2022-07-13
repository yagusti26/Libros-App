import React from 'react'

function Error({isWarning, text}) {
  return (
    <div className= { isWarning ? 'bg-yellow-300 text-yellow-700 py-2 px-8 rounded-md font-bold mb-3' : 'bg-violet-300 text-blue-700 py-2 px-8 rounded-md font-bold mb-3'}>
        {text}
    </div>
  )
}

export default Error