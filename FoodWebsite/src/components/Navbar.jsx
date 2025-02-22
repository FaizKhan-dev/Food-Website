import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import from react-router-dom
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Mirath Chatkhara
              
            </h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="/" className="hover:text-brightColor transition-all cursor-pointer">Home</Link>
            <Link to="/dishes" className="hover:text-brightColor transition-all cursor-pointer">Dishes</Link>
            <Link to="/about" className="hover:text-brightColor transition-all cursor-pointer">About</Link>
            <Link to="/menu" className="hover:text-brightColor transition-all cursor-pointer">Menu</Link>
            <Link to="/review" className="hover:text-brightColor transition-all cursor-pointer">Reviews</Link>
            <Link to="/login">
              <Button title="Login" />
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to="/" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Home</Link>
          <Link to="/dishes" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Dishes</Link>
          <Link to="/about" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>About</Link>
          <Link to="/menu" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Menu</Link>
          <Link to="/review" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>Reviews</Link>
          <Link to="/login" onClick={closeMenu}>
            <Button title="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
