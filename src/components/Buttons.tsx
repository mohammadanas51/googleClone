import React from 'react';

const Buttons = () => {
  return (
    <>
      <div className="flex justify-center gap-5 mt-3 ">
        <button className="bg-gray-100 rounded p-0.5 hover:cursor-pointer hover:ring-1 ring-gray-300">Google Search</button>
        <button className="bg-gray-100 hover:cursor-pointer hover:ring-1 ring-gray-300">I'm Feeling Lucky</button>
      </div>
    </>
  );
};

export default Buttons;
