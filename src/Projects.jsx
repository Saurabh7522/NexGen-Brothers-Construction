import React from "react";
import { motion } from "framer-motion";
import building1 from "./assets/images/commercial.webp";
import building2 from "./assets/images/residential.jpg";
import building3 from "./assets/images/office.webp";
import building4 from "./assets/images/industrial.jpg";

const projects = [
  { id: 1, image: building1, caption: "Commercial Building" },
  { id: 2, image: building2, caption: "Residential Complex" },
  { id: 3, image: building3, caption: "Office Tower" },
  { id: 4, image: building4, caption: "Industrial Facility" },
];

export default function Projects() {
  return (
    <section className="relative py-16 px-4 sm:px-8  from-gray-50 via-white to-gray-100">
      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-amber-700 uppercase tracking-wide">
          Our Projects
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Showcasing our commitment to quality, precision, and innovation across
          diverse construction and fabrication domains.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Overlay + Caption */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-medium tracking-wide">
                {project.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Caption */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-sm sm:text-base font-light tracking-wide">
          Each project stands as a testament to our dedication, expertise, and
          trustworthiness in construction excellence.
        </p>
      </motion.div>
    </section>
  );
}
