import React from "react";

function Header({ cartCount,onCartClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left: Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search Anything..."
          className="border rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110">
          🔍
        </button>
      </div>

      {/* Center: Logo */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Helendo</h1>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        {/* Profile Icon */}
        <div className="relative text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110 cursor-pointer">
          👤
        </div>

        {/* Favorite Icon */}
        <div className="relative text-gray-500 hover:text-red-500 transition-transform transform hover:scale-110 cursor-pointer">
          ❤️
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full px-1.5">
            0
          </span>
        </div>

        {/* Cart Icon */}
        <div className="relative text-gray-500 hover:text-green-500 transition-transform transform hover:scale-110 cursor-pointer"onClick={onCartClick}>
          👜
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full px-1.5">
            {cartCount}
          </span>
        </div>

        {/* Menu Icon */}
        <div className="text-gray-500 hover:text-purple-500 transition-transform transform hover:scale-110 cursor-pointer">
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
