import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/mainlogo.png";
import { HiOutlineLogin, HiUserAdd } from "react-icons/hi";
import { scrollToSection } from "../utils/scrollToSection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(targetId), 300);
    } else {
      scrollToSection(targetId);
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-primary w-full shadow-md fixed z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:p-5">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ height: "40px" }}>
          <img src={Logo} alt="Logo" className="object-contain h-10 w-auto" />
        </Link>

        {/* Hamburger */}
        <button
          className="text-white md:hidden"
          style={{ marginRight: "2px" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <nav
          className={`w-full md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-white font-medium text-lg md:mt-0 mt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-secondary" : "hover:text-secondary"
                  } transition-colors`
                }
                onClick={() => setMenuOpen(false)}
              >
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-secondary" : "hover:text-secondary"
                  } transition-colors`
                }
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => handleScrollOrNavigate("events")}
                className="block py-2 px-3 hover:text-secondary text-left w-full"
              >
                Our Events
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollOrNavigate("gallery")}
                className="block py-2 px-3 hover:text-secondary text-left w-full"
              >
                Our Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollOrNavigate("contactus")}
                className="block py-2 px-3 hover:text-secondary text-left w-full"
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
            <button className="flex items-center text-white hover:text-[#D91E24] font-semibold text-lg py-2 md:px-4">
              <HiOutlineLogin className="mr-1 text-xl" />
              Login
            </button>
            <button className="flex items-center bg-[#D91E24] hover:bg-[#b2161c] text-white font-semibold rounded-lg text-lg py-2 md:px-5 mt-2 md:mt-0">
              <HiUserAdd className="mr-2 text-xl" />
              Register
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
