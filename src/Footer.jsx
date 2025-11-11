import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import companyLogo from "./assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Logo */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-32 h-auto bg-gray-900 p-2 rounded-lg"
            loading="eager"
            fetchpriority="high"
          />
          <p className="text-gray-400 text-sm text-center md:text-left">
            Building the future with quality and safety.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                Contact
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
              >
                Terms & Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              Address: 428-432, 4th Floor, Aristo Complex, Bhyali Canal Road,
              Vadodara
            </li>
            <li>Phone: +91 77790 27110</li>
            <li>Email: admin@nexgenbrothersconstruction.com</li>
          </ul>
        </div>

        {/* Follow Us + YouTube Embed */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-lg mb-6">
            <a
              href="https://www.instagram.com/nexgen_brothers_construction_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/7779027110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064051564663"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://in.linkedin.com/company/nexgen-for-all-your-industrial-service-needs-ba9a7026b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:admin@nexgenbrothersconstruction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://x.com/NexGenBrothers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtu.be/Fb8P4Nbl_sY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>

          {/* YouTube Video Embed */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-800">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Fb8P4Nbl_sY?rel=0&autoplay=0&mute=1"
              title="Nexgen Brothers Construction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Map + Copyright */}
      <div className="mt-10 max-w-7xl mx-auto text-center">
        <h3 className="text-white font-semibold mb-4">Company Location</h3>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.525066747908!2d73.11988567948043!3d22.295973627320908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc879b584036b%3A0x627fbea2c5c4312f!2sAristo%20Group!5e0!3m2!1sen!2sin!4v1761220317025!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NexGen Brothers Construction Pvt. Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
