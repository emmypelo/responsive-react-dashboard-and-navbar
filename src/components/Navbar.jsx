/* eslint-disable no-undef */
import { CiMenuBurger, CiSettings, CiUser } from "react-icons/ci";
import logo from "../assets/logo1.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";
import { IoCreateOutline } from "react-icons/io5";
import { GrBlog } from "react-icons/gr";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleAuth = () => {
    setAuth(!auth);
    auth ? alert("You are logged out") : alert("You are logged in");
  };

  const navLists =
    auth == true
      ? [
          { title: "Home", icon: TiHomeOutline },
          { title: "Posts", icon: GrBlog },
          { title: "New Post", icon: IoCreateOutline },
          { title: "Dashboard", icon: AiOutlineDashboard },
        ]
      : [
          { title: "Home", icon: TiHomeOutline },
          { title: "Posts", icon: GrBlog },
          { title: "New Post", icon: IoCreateOutline },
        ];

  return (
    <div className=" flex w-full fixed">
      <header className="flex items-center justify-between  bg-white  py-3 w-full">
        <div className="flex  w-[10%] ">
          <CiMenuBurger
            onClick={toggleMenu}
            className=" flex ml-3 cursor-pointer md:invisible"
          />
        </div>
        <div className=" w-[10%] relative">
          <img
            src={logo}
            alt="logo"
            className="w-8 cursor-pointer flex absolute -left-[120px] -top-4 z-10"
          />
        </div>
        <nav className="hidden md:flex items-center justify-center gap-4 rounded-full bg-slate-100 w-[80%] ">
          {navLists.map((nav) => (
            <Link
              key={nav.title}
              to="#"
              className="transition-all rounded-full px-5 py-3 text-sm font-semibold text-slate-700 duration-500 ease-in-out hover:bg-slate-700 hover:text-white"
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 w-[10%]">
          <CiSettings className="translate-all cursor-pointer text-3xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1 " />
          <CiUser
            className="translate-all cursor-pointer text-3xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1 "
            onClick={toggleAuth}
          />
        </div>
      </header>
      {/* mobile navbar */}
      <div
        className={`w-1/3 h-[70vh] bg-white absolute top-0 transition-transform duration-300 md:hidden ${
          menu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        {/* menu logo container */}
        <div className="menu-logo flex w-full justify-between  px-2 border-b h-14 items-center">
          <div className="cursor-pointer">
            <CiMenuBurger onClick={toggleMenu} className="ml-2" />
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-8  cursor-pointer invisible flex"
            />
          </div>
        </div>
        {/* Nav list */}
        <div className=" flex flex-col gap-3 w-full items-left cursor-pointer">
          {navLists.map((nav) => (
            <div
              key={nav.title}
              className="flex w-full transition-all rounded-xl px-3 py-1 text-sm font-semibold gap-4 text-slate-700 duration-500 ease-in-out hover:bg-slate-700 hover:text-white"
              onClick={toggleMenu}
            >
              {React.createElement(nav.icon, { className: "flex self-center" })}
              <Link to="#" className="flex self-center">
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
