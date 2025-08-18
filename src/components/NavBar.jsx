import { ChevronLeft, Gauge, Menu, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Fleet",
      path: "/fleet",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];

  // Mobile nav links 
  const getNavLinkClass = ({ isActive }) => 
    `text-center p-5 transition-all duration-300 ${
      isActive 
        ? "text-white bg-zinc-900 font-semibold" 
        : "text-zinc-800 border-b border-b-zinc-200 hover:text-white hover:bg-zinc-900"
    }`;

  return (
    <header
      className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full h-14 
    ${
      isScrolled
        ? "bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl"
        : "bg-zinc-200 w-[95%] max-w-4xl"
    }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <NavLink to="/" className="flex items-center">
            <div className="h-auto relative flex items-center gap-2">
              <Gauge className={`h-8 w-8 ${isScrolled ? "text-zinc-100" : "text-zinc-700/60"}`} />
              <p className={`tracking-tighter cursor-pointer text-xl clash-display font-medium 
                ${isScrolled ? "text-zinc-200" : "text-zinc-700"}`}>
                DriveWell <sup className="text-xs ml-1">Tm</sup>
              </p>
            </div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item, index) => (
              <NavLink 
                key={index} 
                to={item.path} 
                className={({ isActive }) => `
                  text-sm md:text-lg hover:font-semibold hover:-translate-y-1 ease-out transition-all duration-300 
                  ${isActive ? "font-semibold" : ""}
                  ${isScrolled ? "text-white hover:text-yellow-300" : "text-zinc-800"}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Link to="/rent">
              <button className="clash-display text-base bg-gradient-to-r from-zinc-700 to-zinc-950 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-in-out">
                Rent Today
              </button>
            </Link>
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center cursor-pointer">
              <User className="text-white" />
            </div>
          </div>
          
          <div className="md:hidden p-1 rounded-md">
            <button 
              className="text-white hover:text-zinc-400 transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={34} className={`${isScrolled ? "text-white" : "text-zinc-800"}`} />
              ) : (
                <Menu size={40} className={`${isScrolled ? "text-white" : "text-zinc-800"}`} />
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`absolute md:hidden top-0 left-10 w-full h-screen bg-zinc-50 backdrop-blur-lg transition-transform duration-300 ease-in-out z-[999] flex flex-col justify-between ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center border-b border-b-zinc-500/80">
              <button onClick={() => setIsOpen(false)} className="flex items-center p-4 gap-2">
                <ChevronLeft className="text-zinc-800" /> 
                <p className="text-lg clash-display text-zinc-800">Back</p>
              </button>
            </div>
            <div className="flex-1 flex flex-col text-zinc-800 pb-4">
              {[...navLinks, { name: "Rent Now", path: "/rent" }].map((item, i) => (
                <NavLink 
                  key={i} 
                  to={item.path} 
                  className={getNavLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-xl w-full clash-display text-center py-4">
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="text-center text-sm pt-8 pb-8 text-zinc-500">
              &copy;{new Date().getFullYear()} <span className="font-semibold">DriveWell</span> All rights reserved.
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;