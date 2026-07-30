import { useEffect, useState } from "react";
import { IoClose, IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const count = useSelector(selectCartCount);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <nav
      className={`fixed left-1/2 top-0 -translate-x-1/2  z-50 bg-stone-100/80 flex items-center transition-all duration-500 ease-in-out  justify-between
  ${
    scrolled
      ? `
      w-[90%] md:w-[80%]
      mt-2
      rounded-full
      backdrop-blur-3xl
      shadow-xl
      px-6 sm:px-6 lg:px-8
      py-2 gap-1
      `
      : `
      w-full bg-transparent
      rounded-none
      px-4 md:px-10
      py-3
      `
  }`}
    >
      <a
        href="/"
        className="text-3xl md:text-4xl font-semibold tracking-tight whitespace-nowrap"
      >
        North <span className="font-light">& Co.</span>
      </a>
      <div className="hidden md:flex items-center gap-4 lg:gap-8 font-light">
        <NavLink
          to="/"
          className="relative overflow-hidden h-6 group text-[14px]  tracking-[0.06em] uppercase"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            HOME
          </span>
          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            HOME
          </span>
        </NavLink>
        <NavLink
          to="/shop"
          className="relative overflow-hidden h-6 group text-[14px]  tracking-[0.06em] uppercase"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            SHOP
          </span>
          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            SHOP
          </span>
        </NavLink>
        <NavLink
          to="/collections"
          className="relative overflow-hidden h-6 group text-[14px]  tracking-[0.06em] uppercase"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            COLLECTIONS
          </span>
          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            COLLECTIONS
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className="relative overflow-hidden h-6 group text-[14px]  tracking-[0.06em] uppercase"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            ABOUT
          </span>
          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            ABOUT
          </span>
        </NavLink>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar />

        <Link
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="relative cursor-pointer text-sm font-medium"
        >
          <IoCartOutline className="text-xl" />
          {count !== 0 && (
            <span className="absolute -top-2 -right-2 bg-black/80 text-white text-xs rounded-full px-1.25">
              {count}
            </span>
          )}
        </Link>

        <Link
          to={userInfo ? "/account" : "/login"}
          className="hidden md:block p-2 text-lg font-extrabold cursor-pointer"
        >
          <IoPersonOutline />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black text-xl z-50"
        >
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        <div
          className={`absolute top-full z-40 left-0 w-full bg-stone-100 text-black shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden overflow-y-auto px-8 ${
            menuOpen
              ? "h-screen opacity-100 visible backdrop-blur-3xl"
              : "h-0 opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col gap-0">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/"
              className="text-[20px] font-light tracking-[0.04em] uppercase border-y border-gray-300 py-5"
            >
              Home
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/shop"
              className="text-[20px] font-light tracking-[0.04em] uppercase border-b border-gray-300 py-5"
            >
              Shop
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/collections"
              className="text-[20px] font-light tracking-[0.04em] uppercase border-b border-gray-300 py-5"
            >
              Collections
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/about"
              className="text-[20px] font-light tracking-[0.04em] uppercase border-b border-gray-300 py-5"
            >
              About
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/cart"
              className="text-[20px] font-light tracking-[0.04em] uppercase border-b border-gray-300 py-5"
            >
              Cart
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to={userInfo ? "/account" : "/login"}
              className="text-[20px] font-light tracking-[0.04em] uppercase border-b border-gray-300 py-5"
            >
              {userInfo ? "My Account" : "Login"}
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
