import React from "react";
import { motion } from "framer-motion";
import companyimg2 from "./assets/images/companyimg2.webp";
import companyimg3 from "./assets/images/companyimg3.webp";
import companyimg1 from "./assets/images/companyimg1.webp";
import companyimg4 from "./assets/images/companyimg4.webp";
import companyimg5 from "./assets/images/companyimg5.webp";
import companyimg6 from "./assets/images/companyimg6.webp";
import clientVideo from "./assets/videos/companyvideoo.mp4";

export default function ClientCompany() {
  const companies = [
    companyimg1,
    companyimg2,
    companyimg3,
    companyimg4,
    companyimg5,
    companyimg6,
  ];

  return (
    <section className="relative w-full  from-white to-gray-50 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Content */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base text-gray-600 mb-2 uppercase tracking-widest font-semibold">
            We have established our credentials with quality and transparency
          </p>
          <div className="w-32 h-[3px] bg-amber-700 mb-6"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-10 uppercase tracking-wide">
            Our Esteemed Clients
          </h2>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {companies.map((img, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  boxShadow:
                    "0 12px 24px rgba(0,0,0,0.1), 0 0 15px rgba(234,179,8,0.3)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                <img
                  src={img}
                  alt={`Client ${index + 1}`}
                  className="max-h-16 sm:max-h-20 object-contain transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Video */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <video
              src={clientVideo}
              controls
              muted
              autoPlay
              loop
              className="relative w-full h-auto rounded-2xl shadow-lg object-cover border border-gray-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
