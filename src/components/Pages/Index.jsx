import React, { useState } from 'react';
import Message1 from '../Modals/Message1';
import audio1 from '../../assets/audio2.mp3'; // import your audio file

const Index = () => {
    const [showMessage1, setShowMessage1] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleButtonClick = () => {
        // Show the message modal
        setShowMessage1(true);
        // Play the audio
        setAudioPlaying(true);
    };

    const handleAudioEnded = () => {
        // Reset audioPlaying state when audio ends
        setAudioPlaying(true);
    };

    return (
        <div className='text-white flex justify-center items-center h-screen'>
            <button onClick={handleButtonClick} className='text-black px-2 py-2 bg-gray-300 rounded-md font-bold'>Click Me</button>
            {showMessage1 && <Message1 />}
            {/* Audio player */}
            <audio src={audio1} autoPlay={audioPlaying} onEnded={handleAudioEnded} />
        </div>
    );
};

export default Index;
