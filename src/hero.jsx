import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "./assets/images/WORK image.png";
import "./Hero.css"; // <-- we'll add styles below

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateToProjects = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight stylish-heading"
            whileHover={{ scale: 1.03 }}
          >
            Transforming Ideas Into
            <br />
            <span className="highlight"> Timeless Structures</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-700 font-roboto leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At <strong>Nexgen Brothers</strong>, we craft excellence across Civil Construction,
            Fire Safety, and Fabrication — driven by precision, integrity, and innovation.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button
              onClick={handleNavigateToProjects}
              className="btn-primary cursor-pointer"
            >
              🚀 View Projects
            </button>
            <button
              onClick={handleNavigateToContact}
              className="btn-secondary cursor-pointer"
            >
              📩 Request Quote
            </button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="mt-12 flex gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="stat-card"
            >
              <h3 className="stat-number">10+</h3>
              <p className="stat-text">Years Experience</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
              className="stat-card"
            >
              <h3 className="stat-number">200+</h3>
              <p className="stat-text">Projects Delivered</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Construction Work"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover hero-image"
            />
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-indigo-400/20 via-transparent to-blue-400/20 blur-3xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
