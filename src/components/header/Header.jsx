import React, { useState } from "react";
import logo from "../../assets/Logo_.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="py-5 flex items-center justify-between relative">
      <div className="flex items-center gap-10">
        <a href="#home">
          <img src={logo} alt="logo" className="w-32 md:w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[#211F54] font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#article">Article</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <p className="text-[#211F54]">Cart (0)</p>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">
          Get a free quote
        </button>
      </div>

      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 md:hidden z-50">
          <ul className="flex flex-col gap-6 text-lg text-[#211F54]">
            <li>
              <a href="#home" onClick={handleCloseMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleCloseMenu}>About</a>
            </li>
            <li>
              <a href="#service" onClick={handleCloseMenu}>Service</a>
            </li>
            <li>
              <a href="#article" onClick={handleCloseMenu}>Article</a>
            </li>
            <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
          </ul>

          <div className="mt-6 flex flex-col gap-4">
            <p>Cart (0)</p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">
              Get a free quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;  