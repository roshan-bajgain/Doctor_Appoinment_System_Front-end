import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const Navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-blue-500 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8.5 rounded-full" src={assets.profile_pic} alt="Profile image" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Drop Down Icon" />
            <div className="absolute top-0 right-0 pt-18 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <div>
                <p>My Profile</p>
                <p>My Appoinment</p>
                <p>Logout</p>
              </div>
            </div>
            
          </div>
        ) : (
          <button
            onClick={() => Navigate("/login")}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
