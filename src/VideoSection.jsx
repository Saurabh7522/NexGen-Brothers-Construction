import React from "react";
import { motion } from "framer-motion";
import companyVideo from "./assets/videos/company2video.mp4";

const VideoSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[85vh] sm:h-[90vh] md:h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Background Video */}
      <video
        src={companyVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
      />

      {/* ✅ Softer Overlay (for readability) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.3),transparent)]"></div>

      {/* ✅ Main Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-8 md:px-16 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Building a Safer Future
        </motion.h1>

        {/* Subheadline Divider */}
        <motion.div
          className="w-24 h-0.5 bg-yellow-500 mx-auto mb-5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Services Line */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-5 text-gray-200 tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          Civil Construction • Fire & Safety • Fabrication & Pre-Engineering
        </motion.p>

        {/* Company Name */}
        <motion.p
          className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 tracking-wider"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          With Nexgen Brothers Construction
        </motion.p>
      </div>

      {/* ✅ Bottom Fade (gentle transition) */}
      <div className="absolute bottom-0 w-full h-40 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent)]"></div>
    </section>
  );
};

export default VideoSection;
