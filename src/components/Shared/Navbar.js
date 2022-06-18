import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="rounded-lg text-white">
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-[#0a192f] fixed top-0 z-50 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink
          className="italic font-bold text-2xl sm:px-20 text-white"
          to="/"
        >
          Somen Singha
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-x-2">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
