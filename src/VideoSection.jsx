import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import companyVideo from "./assets/videos/company2video.mp4";
import videoPoster from "./assets/images/logo.jpg";

const VideoSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Lazy load video after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 500); // small delay for smoother load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black"
    >

      <img
    src={videoPoster}
    alt="Video poster"
    className={`absolute inset-0 w-full h-full object-fill object-center transition-opacity duration-900 ${
      videoLoaded ? "opacity-0" : "opacity-100"
    }`}
  />

      {/* Background Video */}
      {showVideo && (
        <video
    src={companyVideo}
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    onLoadedData={() => setVideoLoaded(true)}
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      videoLoaded ? "opacity-100" : "opacity-0"
    }`}
    style={{ minHeight: "100%", minWidth: "100%", willChange: "opacity" }}
  />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent sm:from-black/60" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-16 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Building a Safer Future
        </motion.h1>

        <motion.div
          className="w-16 sm:w-20 h-0.5 bg-yellow-500 mx-auto mb-5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-sm sm:text-base md:text-xl lg:text-2xl font-light mb-5 text-gray-200 tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Civil Construction • Fire & Safety • Fabrication & Pre-Engineering
        </motion.p>

        <motion.p
          className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl text-yellow-400 tracking-wider"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          With Nexgen Brothers Construction
        </motion.p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 sm:h-40 bg-linear-to-t from-black/70 to-transparent" />
    </section>
  );
};

export default VideoSection;
