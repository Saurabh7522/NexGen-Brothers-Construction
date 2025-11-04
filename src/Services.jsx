import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 👈 icon import

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
  },
  {
    id: "fabrication",
    title: "Fabrication & Pre-Engineering",
    caption: "Steel structures and custom metal fabrication.",
    images: fabricationImg,
  },
  {
    id: "fire",
    title: "Fire Safety & Services",
    caption: "Fire detection, suppression, and maintenance systems.",
    images: fireSafety,
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    caption: "Proactive care for buildings and industrial systems.",
    images: maintenanceImg,
  },
];

export default function ServicesCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = carousel.offsetWidth;
      carousel.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + services.length) % services.length;
    scrollToIndex(prev);
    setActiveIndex(prev);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % services.length;
    scrollToIndex(next);
    setActiveIndex(next);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="services-section" className="px-6 py-20 bg-gray-50 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-600 mt-2">Explore our expertise across key domains.</p>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md z-10 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden snap-x snap-mandatory transition-all duration-700"
      >
        {services.map((s, i) => (
          <div key={s.id} className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 snap-center">
            <div
              className="group relative bg-white rounded-2xl shadow-lg p-5 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(`/services/${s.id}`)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={s.images}
                  alt={s.title}
                  className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <p className="text-white text-center text-sm px-4 py-3 backdrop-blur-sm">
                    {s.caption}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{s.title}</h3>
              <p className="text-indigo-600 mt-1 hover:text-indigo-500">Read More →</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
