import React, { useState } from 'react'
import Message1 from '../Modals/Message1';

const Index = () => {
    const [showMessage1, setShowMessage1] = useState(false);

  return (
    <div className='text-white flex justify-center items-center h-screen'>
        <button onClick={() => setShowMessage1(true)} className='text-black px-2 py-2 bg-gray-300 rounded-md font-bold'>Click Me</button>
        {showMessage1 && <Message1 />}
    </div>
  )
}

export default Index