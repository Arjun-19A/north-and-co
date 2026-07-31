import { useEffect, useRef, useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searchOpen, setSearchOpen, expanded = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        expanded &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded, setSearchOpen]);

  if (!expanded) {
    return (
      <button
        onClick={() => setSearchOpen(true)}
        className="p-2 hover:opacity-70 transition"
      >
        <IoSearchOutline className="text-xl" />
      </button>
    );
  }

  return (
    <div ref={searchRef} className="relative flex items-center w-full">
      <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
        <input
          autoFocus
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-gray-300 bg-gray-100 px-6 py-3 pr-24 outline-none focus:border-black transition"
        />

        <IoSearchOutline className="absolute right-14 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

        <button
          type="button"
          onClick={() => setSearchOpen(false)}
          className="absolute right-5 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
        >
          <IoClose className="text-xl" />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
