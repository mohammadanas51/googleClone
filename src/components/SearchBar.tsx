
const SearchBar = () => {
  return (
    <>
      <div className="bg-gray-500 rounded-md p-0.5 ml-1 mr-1">
        <input
            type="text" 
            placeholder="Search Google or type a URL" 
            className="flex-grow px-4 py-1 outline-none text-white"
          />
      </div>
    </>
  );
};

export default SearchBar;
