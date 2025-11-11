import React from "react";
import civilImage from "./assets/images/civil2.jpg";
import { motion } from "framer-motion";

export default function Civil() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-20 md:pt-24 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full  from-blue-200 to-indigo-300 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full  from-yellow-200 to-orange-300 opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight relative inline-block"
            style={{
              background: "linear-gradient(90deg, #1E3A8A, #6366F1, #FBBF24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Civil Construction
            <span
              className="absolute inset-0"
              style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.2)" }}
            />
          </h1>
          <p className="text-md md:text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
            NexGen Brothers Construction delivers high-performance infrastructure with uncompromised quality, innovation, and trust — building projects that define durability and design excellence.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          className="overflow-hidden rounded-3xl shadow-2xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={civilImage}
            alt="Civil Construction"
            className="w-full h-[400px] sm:h-[480px] md:h-[520px] object-cover transition-transform duration-700"
          />
        </motion.div>

        {/* Key Services */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6 text-center">
            Our Expertise
          </h2>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our Civil Division specializes in delivering modern, efficient, and sustainable building solutions. Attention to detail, superior materials, and adherence to deadlines ensure excellence in every structure.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            {[
              { icon: "🏗️", text: "Structural & Architectural Design", color: "bg-blue-500" },
              { icon: "🏠", text: "Residential & Commercial Projects", color: "bg-green-500" },
              { icon: "🔧", text: "Foundation & Reinforcement Work", color: "bg-yellow-500" },
              { icon: "🧱", text: "Complete Turnkey Project Management", color: "bg-red-500" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className={`${item.color} text-white p-2 rounded-full text-sm`}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-[#F3F4F6] rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6 text-center">
            Why Choose NexGen Brothers
          </h3>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-8 text-center">
            We blend modern construction technology with traditional values of integrity, safety, and precision. Every project is executed under strict quality standards with full transparency.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-[#1F2937] text-base md:text-lg">
            {[
              { text: "Certified Engineers & Skilled Labor", color: "bg-blue-500" },
              { text: "Modern Tools & Safety Practices", color: "bg-green-500" },
              { text: "Transparent Costing & Timely Delivery", color: "bg-yellow-500" },
              { text: "Long-Term Maintenance Support", color: "bg-red-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={`${item.color} text-white p-1 rounded-full text-sm`}>✅</span>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{ background: "linear-gradient(90deg, #1E3A8A, #FBBF24)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us for Civil Construction
          </motion.button>
        </div>
      </div>
    </section>
  );
}
