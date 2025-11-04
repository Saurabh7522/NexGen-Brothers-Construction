import React from "react";
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
    <section className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-12">
          Our Recent <span className="text-red-600">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate(p.link)}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
            >
              
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/projects")}
            className="relative px-8 py-3 text-base md:text-lg font-semibold text-white rounded-lg overflow-hidden group 
                       bg-linear-to-r from-red-600 to-amber-500 shadow-md transition-all duration-300"
          >
            <span className="relative z-10 group-hover:tracking-wider transition-all duration-300 cursor-pointer">
              Explore More Projects
            </span>

            <span
              className="absolute inset-0 bg-linear-to-r from-amber-500 to-red-600 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-500"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
}
