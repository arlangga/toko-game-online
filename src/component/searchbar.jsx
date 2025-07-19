const SearchBar = () => {
  return (
    <div className="container flex">
      <input
        type="text"
        placeholder="Cari sesuatu..."
        className="p-2 rounded-r w-full h-10 border-2 focus:border-blue-600 focus:outline-none transition-colors duration-200"
      />
      <i className="fa-solid fa-magnifying-glass bg-blue-600 text-2xl flex items-center w-10 h-10 p-2 text-white rounded-r "></i>
    </div>
  );
};

export default SearchBar;
