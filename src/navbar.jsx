import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "./assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logoImage}
            alt="Company Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-semibold text-amber-700 tracking-wide">
            Nexgen Brothers
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-700 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <button className="flex items-center space-x-1 hover:text-amber-700 transition">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 mt-[2px]" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 origin-top overflow-hidden"
                >
                  {[
                    "Civil Construction",
                    "Fire Safety",
                    "Fabrication",
                    "Maintenance",
                  ].map((service, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ backgroundColor: "#fef3c7" }}
                      className="px-4 py-2 text-sm text-gray-700 hover:text-amber-700 cursor-pointer"
                    >
                      {service}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100"
          >
            <div className="px-6 py-4 flex items-center space-x-3 border-b border-gray-100">
              <img
                src={logoImage}
                alt="Company Logo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-semibold text-amber-700">
                Nexgen Brothers
              </span>
            </div>

            <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 hover:text-amber-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Services Dropdown in Mobile */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-2 hover:text-amber-700 transition">
                    Services
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {[
                      "Civil Construction",
                      "Fire Safety",
                      "Fabrication",
                      "Maintenance",
                    ].map((service, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 hover:text-amber-700 cursor-pointer transition"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
