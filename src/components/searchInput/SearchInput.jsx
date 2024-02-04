import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSearch = () => {
    onSearch(searchItem);
  };
  return (
    <>
      <div className={`mb-4 flex items-center ${isSmallScreen ? 'justify-center' : ''} md:ml-2 lg:ml-7`}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className=" p-2 focus:outline-none"
        />

        <IoSearch
          onClick={handleSearch}
          className={`ml-2 cursor-pointer w-6 h-6 ${isSmallScreen ? '' : 'hidden lg:inline-block md:inline-block'}`}
        />
      </div>
    </>
  );
};

export default SearchInput;
