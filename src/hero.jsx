import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "./assets/images/WORK image.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateToProjects = () => {
    // Navigate to the /projects route
    navigate("/projects");

    // Optional: smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative pt-20 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10 overflow-hidden scroll-mt-20"
      id="hero"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0  from-indigo-50 via-white to-gray-50 -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          className="m-6 md:m-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-wide uppercase">
            Trusted Construction, Fire Safety & Fabrication Solutions
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed font-nunito max-w-xl">
            We deliver end-to-end services across Civil Construction, Fire Safety Systems,
            and Precision Fabrication — ensuring top-tier quality, safety, and timely
            delivery for every project.
          </p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={handleNavigateToProjects}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg cursor-pointer hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
            >
              Our Projects
            </button>
            <button
              onClick={handleNavigateToContact}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50 transition-all duration-300 cursor-pointer"
            >
              Request Quote
            </button>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-6 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <strong className="block text-indigo-700 text-3xl font-bold">10+</strong>
              <span className="text-gray-600 font-medium">Years Experience</span>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <strong className="block text-indigo-700 text-3xl font-bold">200+</strong>
              <span className="text-gray-600 font-medium">Projects Delivered</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="order-first md:order-last flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md sm:max-w-lg">
            <motion.img
              src={heroImage}
              alt="Construction Work"
              className="rounded-2xl shadow-xl w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0  from-indigo-200/20 via-transparent to-transparent rounded-2xl blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
