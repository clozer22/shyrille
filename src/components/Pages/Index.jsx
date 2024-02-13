import React, { useState } from 'react';
import Message1 from '../Modals/Message1';

const Index = () => {
    const [showMessage1, setShowMessage1] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [muted, setMuted] = useState(true);
    const [earphoneChecked, setEarphoneChecked] = useState(false); // State to track whether earphone is checked

    const handleButtonClick = () => {
        // Show the message modal
        setShowMessage1(true);
        // Play the audio
        setAudioPlaying(true);
        setMuted(false)
    };

    const handleAudioEnded = () => {
        // Reset audioPlaying state when audio ends
        setAudioPlaying(false);
    };

    return (
        <div className='text-white flex justify-center items-center h-screen flex-col'>
            <h2 className='text-2xl font-bold mb-2'>Earphone is a must!</h2>
            <label htmlFor="earphoneCheckbox" className="mb-2 flex justify-center items-center">
                <input
                    type="checkbox"
                    id="earphoneCheckbox"
                    className='mx-2'
                    checked={earphoneChecked}
                    onChange={() => setEarphoneChecked(!earphoneChecked)} // Toggle the earphoneChecked state
                />
                I am wearing earphones
            </label>
            {/* Button is disabled if earphone is not checked */}
            <button 
                onClick={handleButtonClick} 
                className={`text-black px-2 py-2 bg-gray-300 rounded-md font-bold ${!earphoneChecked && 'opacity-50 cursor-not-allowed'}`} 
                disabled={!earphoneChecked}
            >
                Open
            </button>
            {showMessage1 && <Message1 />}
            {/* Audio player */}
            
        </div>
    );
};

export default Index;
