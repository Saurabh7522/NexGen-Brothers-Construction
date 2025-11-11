import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import civilConstruction from "./assets/images/civil2.jpg";
import fireSafety from "./assets/images/firee.jpg";
import fabricationImg from "./assets/images/fabricationn.png";
import maintenanceImg from "./assets/images/maintenance.jpg";

export const services = [
  {
    id: "civil",
    title: "Civil Construction",
    caption: "From design to completion — precision, safety, and quality.",
    images: civilConstruction,
    color: "#06b6d4",
  },
  {
    id: "fabrication",
    title: "Fabrication & Pre-Engineering",
    caption: "Steel structures and custom metal fabrication.",
    images: fabricationImg,
    color: "#f97316",
  },
  {
    id: "fire",
    title: "Fire Safety & Services",
    caption: "Fire detection, suppression, and maintenance systems.",
    images: fireSafety,
    color: "#ef4444",
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    caption: "Proactive care for buildings and industrial systems.",
    images: maintenanceImg,
    color: "#6366f1",
  },
];

export default function ServicesCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const containerWidth = carousel.clientWidth;
    carousel.scrollTo({ left: index * containerWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + services.length) % services.length;
    scrollToIndex(prev);
  };
  const handleNext = () => {
    const next = (activeIndex + 1) % services.length;
    scrollToIndex(next);
  };

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => handleNext(), 6500);
    return () => clearInterval(id);
  }, [activeIndex, reduceMotion]);

  useEffect(() => {
    const onResize = () => scrollToIndex(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  return (
    <section
      id="services-section"
      className="relative px-6 py-20 overflow-hidden"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      {/* Hide Scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* subtle moving ambient shapes */}
      <motion.div
        aria-hidden
        className="absolute -left-24 -top-24 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg,#fee2e2,#fff1f2)", opacity: 0.6 }}
        animate={reduceMotion ? {} : { x: [0, 40, 0], y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 -bottom-24 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg,#eff6ff,#eef2ff)", opacity: 0.7 }}
        animate={reduceMotion ? {} : { x: [0, -50, 0], y: [0, -30, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
        <h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3"
          style={{
            background: "linear-gradient(90deg,#0ea5a4,#8b5cf6,#f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide end-to-end services with a focus on quality, safety and on-time delivery.
        </p>
      </div>

      {/* Carousel container */}
      <div className="max-w-7xl mx-auto mt-12 relative z-10 ">
        {/* Prev / Next buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow hover:shadow-lg p-2 rounded-full z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow hover:shadow-lg p-2 rounded-full z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* horizontal carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 py-6 px-2 hide-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              className="shrink-0 w-full sm:w-[48%] lg:w-[32%] snap-center px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
            >
              <motion.div
                onClick={() => navigate(`/services/${s.id}`)}
                role="button"
                tabIndex={0}
                whileHover={reduceMotion ? {} : { y: -6, rotateX: 1.5, rotateY: 1.5, scale: 1.01 }}
                whileTap={reduceMotion ? {} : { scale: 0.995 }}
                className="relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                style={{ minHeight: 380 }}
              >
                {/* image */}
                <div className="h-56 w-full overflow-hidden rounded-t-2xl bg-gray-50">
                  <img
                    src={s.images}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{s.title}</h3>
                    <span
                      aria-hidden
                      style={{ background: s.color }}
                      className="ml-auto w-3 h-3 rounded-full shadow-sm"
                    />
                  </div>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.caption}</p>

                  <div className="mt-5 flex items-center justify-between " >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services/${s.id}`);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer"
                      style={{
                        background: "linear-gradient(90deg,#0ea5a4,#6366f1)",
                        color: "white",
                        boxShadow: "0 8px 20px rgba(99,102,241,0.12)",
                        border: "none",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      Learn More →
                    </button>

                    <div className="text-sm text-gray-400">Trusted · 5+ yrs</div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "0 30px 80px rgba(99,102,241,0.05), inset 0 -20px 40px rgba(14,165,164,0.02)",
                  }}
                  aria-hidden
                />
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Indicators (dots) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {services.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              style={{ transform: i === activeIndex ? "scale(1.2)" : "scale(1)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
