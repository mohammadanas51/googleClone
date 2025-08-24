const SearchBar = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex bg-gray-500 rounded-full w-full max-w-xl px-4 py-2">
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-grow bg-transparent outline-none text-white placeholder-gray-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;
