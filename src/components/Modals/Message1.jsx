import React, { useState } from 'react';
import message_data from './message';
const Message1 = () => {
  const [index, setIndex] = useState(0);
  const message = message_data[index];


  const handleNext = () => {
    // Increment the index to show the next message
    if(index < message_data.length - 1)
    setIndex(index + 1);
  };
  const handlePrev = () => {
    // Increment the index to show the next message
    if(index !== 0){
    setIndex(index - 1);
    }
  };


  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0  transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="sm:flex sm:items-start w-full">
                <div className="mx-auto flex h-[20rem] sm:h-auto  object-cover object-center bg-center bg-cover flex-shrink-0 items-center justify-center overflow-hidden bg-red-100 sm:mx-0">
                  <img src={message.image} className='sm:h-[10rem] bg-cover object-cover object-center ' alt="" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-black leading-6 text-gray-900" id="modal-title">{message.date}</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{message.message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex mb-2 w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Next
              </button>
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex mb-2 w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Prev
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message1;