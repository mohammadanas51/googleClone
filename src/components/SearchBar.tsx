import React from 'react';

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center max-w-xl px-4 py-2 border rounded-full shadow-sm hover:shadow-md ml-56 h-[50px] w-[686px]">
        <input
            type="text" 
            placeholder="Search Google or type a URL" 
            className="flex-grow px-4 py-1 outline-none"
          />
      </div>
    </>
  );
};

export default SearchBar;
