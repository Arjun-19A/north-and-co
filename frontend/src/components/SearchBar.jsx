import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={searchRef}
      className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 translate-y-0 opacity-100 left-0 w-full bg-stone-100 h-24 z-50" : "w-auto"}`}
    >
      {isOpen ? (
        <form className="relative flex items-center justify-center w-full">
          <div className="relative md:w-1/2 w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full
    border
    border-gray-300
    bg-gray-100
    px-6
    py-3
    pr-12
    outline-none
    focus:border-black
    transition"
            />
            <IoSearchOutline className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-500 cursor-pointer" />
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <IoSearchOutline className="text-xl text-center cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
