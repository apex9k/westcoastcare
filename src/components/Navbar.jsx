import React from "react";
import {Link, BrowserRouter, Route, Outlet, Navigate, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-200 py-2">
      <div className="max-w-7xl mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>

              <li>
                <div className="form-control mt-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-primary w-full"
                  />
                </div>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-2xl">
            West Coast Care
          </NavLink>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" exact>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/services" exact>Services</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/contact" >Contact</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/login" >Login</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/register" >Register</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
