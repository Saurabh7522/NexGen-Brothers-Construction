import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import civilConstruction1 from "./assets/images/civill.jpg";
import fireSafety1 from "./assets/images/fireSafety1.webp";
import fabrication1 from "./assets/images/fabrication.jpg";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Civil Projects",
      image: civilConstruction1,
      desc: "Delivering durable residential and commercial projects with excellence.",
      link: "/services/civil",
    },
    {
      title: "Fire Safety Systems",
      image: fireSafety1,
      desc: "Providing advanced and reliable fire protection systems.",
      link: "/services/fire",
    },
    {
      title: "Fabrication & Design",
      image: fabrication1,
      desc: "Expert in industrial metal fabrication and structural design.",
      link: "/services/fabrication",
    },
  ];

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center font-[Poppins]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, #6366f1, #ec4899, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
          }}
          className="text-4xl sm:text-5xl md:text-6xl mb-14"
        >
          Our Recent Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => navigate(p.link)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl bg-white border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                ></div>
                <h3 className="absolute bottom-4 left-5 text-white text-xl sm:text-2xl font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <div className="p-6 text-left">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>

              {/* Accent line */}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #6366f1, #ec4899, #fb923c)",
                }}
                className="absolute bottom-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={() => navigate("/projects")}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)",
            }}
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #ec4899, #fb923c)",
              color: "white",
              borderRadius: "9999px",
              padding: "12px 40px",
              fontSize: "18px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
