import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "./assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if we’re on a services page for active highlight
  const isServiceActive = location.pathname.startsWith("/services");
  const isProjectsActive =
    location.pathname.startsWith("/projects") ||
    location.pathname.startsWith("/navprojects");

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img src={logoImage} alt="NexGen" className=" md:h-auto w-32" />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            // custom active logic for Projects
            const isActive =
              (link.to === "/projects" && isProjectsActive) ||
              location.pathname === link.to;

            return (
              <NavLink
                key={link.name}
                to={link.to}
                className={`relative group py-2 transition-all duration-300 ease-out transform ${
                  isActive
                    ? "text-red-600 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <motion.span
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  {link.name}
                </motion.span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "w-full bg-red-600"
                      : "w-0 bg-red-500 group-hover:w-full"
                  }`}
                />
              </NavLink>
            );
          })}

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`relative flex items-center space-x-1 py-2 transition-all duration-300 ${
                isServiceActive
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <motion.span
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                Services
              </motion.span>
              <ChevronDown className="w-4 h-4 mt-px" />
              <span
                className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ease-in-out ${
                  isServiceActive
                    ? "w-full bg-red-600"
                    : "w-0 bg-red-500 group-hover:w-full"
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                >
                  <NavLink
                    to="/services/civil"
                    className="block px-4 py-2 text-sm hover:bg-red-50 transition"
                  >
                    Civil Construction
                  </NavLink>
                  <NavLink
                    to="/services/fire"
                    className="block px-4 py-2 text-sm hover:bg-red-50 transition"
                  >
                    Fire Safety
                  </NavLink>
                  <NavLink
                    to="/services/fabrication"
                    className="block px-4 py-2 text-sm hover:bg-red-50 transition"
                  >
                    Fabrication
                  </NavLink>
                  <NavLink
                    to="/services/maintenance"
                    className="block px-4 py-2 text-sm hover:bg-red-50 transition"
                  >
                    Maintenance
                  </NavLink>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => {
                const isActive =
                  (link.to === "/projects" && isProjectsActive) ||
                  location.pathname === link.to;

                return (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block relative group py-2 transition-all duration-300 ${
                      isActive
                        ? "text-red-600 font-semibold"
                        : "text-gray-700 hover:text-gray-900 "
                    }`}
                  >
                    {link.name}
                   
                  </NavLink>
                );
              })}

              <details className="mt-3">
                <summary className="py-2 cursor-pointer flex items-center justify-between text-gray-700 hover:text-gray-900">
                  Services <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  <NavLink
                    to="/services/civil"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-red-600"
                  >
                    Civil Construction
                  </NavLink>
                  <NavLink
                    to="/services/fire"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-red-600"
                  >
                    Fire Safety
                  </NavLink>
                  <NavLink
                    to="/services/fabrication"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-red-600"
                  >
                    Fabrication
                  </NavLink>
                  <NavLink
                    to="/services/maintenance"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-red-600"
                  >
                    Maintenance
                  </NavLink>
                </div>
              </details>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
