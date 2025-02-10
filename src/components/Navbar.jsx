import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import star from "../../public/images/star.png";
import userAvatar from "../../public/images/userAvatar.png";

const Navbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white shadow-md p-4 flex items-center justify-between relative">

      <div className="flex items-center gap-2">
        <img src={star} alt="Star Icon" className="w-auto h-auto" />
        <h1 className="text-xl font-semibold text-gray-800">Weather App</h1>
      </div>

      <div className="relative">
        <button
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900  cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src={userAvatar} ></img>
          <IoMdArrowDropdown className="w-5 h-5" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border">
            <div className="px-4 py-3 text-sm text-gray-800">
              <p className="font-semibold">{user?.name}</p>
            </div>
            <button
              className="w-full text-center py-2 text-white font-semibold bg-gradient-to-b from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
