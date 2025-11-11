import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// ✅ Import images from assets/images
import civil1 from "./assets/images/civilConstruction1.png";  
import civil2 from "./assets/images/civilConstruction3.jpeg";
import civil3 from "./assets/images/civilConstruction2.webp";

import fire1 from "./assets/images/fireSafety1.webp";
import fire2 from "./assets/images/fireSafety2.jpg";
import fire3 from "./assets/images/fireSafety3.jpeg";

import fab1 from "./assets/images/fabrication1.jpg";
import fab2 from "./assets/images/fabrication2.jpg";
import fab3 from "./assets/images/fabrication3.webp";

// ✅ All Projects Data
const projectsData = [
  // Civil Construction
  {
    id: 1,
    title: "Residential Building Construction",
    category: "Civil Construction",
    description:
      "Completed a 4-storey RCC residential building with modern architecture, sustainable materials, and high-quality finishing.",
    image: civil1,
    location: "Vadodara, Gujrat ",
    year: "2022",
  },
  {
    id: 2,
    title: "Commercial Complex Development",
    category: "Civil Construction",
    description:
      "Constructed a premium commercial complex featuring glass façade, RCC frame structure, and energy-efficient design.",
    image: civil2,
    location: "Nagpur, Maharashtra",
    year: "2025",
  },
  {
    id: 3,
    title: "Road & Drainage Infrastructure",
    category: "Civil Construction",
    description:
      "Executed durable concrete roadways and integrated drainage systems for smart township development.",
    image: civil3,
    location: "Ahamdabad ,Maharashtra",
    year: "2020",
  },

  // Fire & Safety
  {
    id: 4,
    title: "Fire Hydrant System Installation",
    category: "Fire & Safety",
    description:
      "Installed an advanced fire hydrant system with pumps, sprinklers, and emergency signage as per NBC standards.",
    image: fire1,
    location: "Mumbai, Maharashtra",
    year: "2023",
  },
  {
    id: 5,
    title: "Fire Alarm & Detection Network",
    category: "Fire & Safety",
    description:
      "Deployed an IoT-based fire alarm and detection network ensuring 24/7 monitoring and instant alert response.",
    image: fire2,
    location: "Gujrat",
    year: "2024",
  },
  {
    id: 6,
    title: "Emergency Exit & Safety Audit",
    category: "Fire & Safety",
    description:
      "Conducted comprehensive safety audits and installed emergency exit systems ensuring compliance with local fire norms.",
    image: fire3,
    location: "Uttar Pradesh ",
    year: "2024",
  },

  // Fabrication
  {
    id: 7,
    title: "Industrial Shed Fabrication",
    category: "Fabrication",
    description:
      "Fabricated and installed a large-scale industrial shed using high-strength steel and precision welding techniques.",
    image: fab1,
    location: "Kolhapur, Maharashtra",
    year: "2025",
  },
  {
    id: 8,
    title: "Steel Structure Assembly",
    category: "Fabrication",
    description:
      "Assembled custom-built steel structures for a multi-level commercial facility ensuring structural integrity.",
    image: fab2,
    location: "Patna, Bihar",
    year: "2024",
  },
  {
    id: 9,
    title: "Warehouse Roofing & Mezzanine",
    category: "Fabrication",
    description:
      "Delivered warehouse roofing and mezzanine floors with corrosion-resistant coatings and high load capacity.",
    image: fab3,
    location: "Rajsthan",
    year: "2025",
  },
];

function NavProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false); // ✅ For Testimonial Popup
  const categories = ["All", "Civil Construction", "Fire & Safety", "Fabrication"];
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
  navigate("/contact");
}
  const [testimonials, setTestimonials] = useState([
    {
      name: "Rajesh Patel",
      role: "Factory Owner – Pune",
      feedback:
        "NexGen completed our industrial shed fabrication ahead of schedule. The precision and professionalism were outstanding!",
      avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Neha Sharma",
      role: "Architect – Mumbai",
      feedback:
        "The fire detection and alarm system installation was flawless. Their team followed every safety protocol perfectly.",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
    {
      name: "Vikas Deshmukh",
      role: "Builder – Nagpur",
      feedback:
        "Excellent project coordination and reliable execution. I’ll continue to partner with them for future civil projects.",
      avatar: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    feedback: "",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // default avatar
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.feedback) return;

    setTestimonials([newTestimonial, ...testimonials]);
    setNewTestimonial({ name: "", role: "", feedback: "", avatar: newTestimonial.avatar });
    setShowForm(false);
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 py-16 px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Our <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our successful projects across Civil Construction, Fire & Safety, and Fabrication — 
          combining engineering precision, innovation, and commitment to quality.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.category}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>📍 {project.location}</span>
                <span>📅 {project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-24 bg-blue-50 py-16 px-6 md:px-12 rounded-3xl shadow-inner"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Why <span className="text-blue-600">Choose NexGen Brothers?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "🏗 Quality & Precision",
              desc: "Each project undergoes a rigorous quality process — from design to execution — ensuring durability and accuracy.",
            },
            {
              title: "👷 Experienced Workforce",
              desc: "Our engineers, safety experts, and fabricators bring years of expertise across multiple industrial domains.",
            },
            {
              title: "⚙️ Advanced Technology",
              desc: "We use modern equipment, smart tools, and sustainable materials for all civil and fabrication works.",
            },
            {
              title: "⏱ On-Time Delivery",
              desc: "Every project is executed under a strict timeline, ensuring prompt handover without compromising quality.",
            },
            {
              title: "🧯 Safety First Approach",
              desc: "All fire safety and construction activities adhere to industry-standard protocols for maximum site safety.",
            },
            {
              title: "💬 Transparent Communication",
              desc: "We keep our clients informed at every stage — from planning to delivery — with full transparency.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real experiences from our partners and clients who trusted NexGen Brothers
          for their Construction, Fabrication, and Fire Safety projects.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-5">“{client.feedback}”</p>
              <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-blue-600 text-xl">★</span> {client.name}
              </h4>
              <p className="text-sm text-gray-500">{client.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <div className="mt-16">
          <p className="text-gray-600 mb-4">
            Want to share your experience with NexGen Brothers?
          </p>
          <button
            onClick={handleNavigateToContact}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Add Your Testimonial
          </button>
        </div>

        {/* Testimonial Modal */}
        
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 bg-blue-700 text-center text-white py-16 rounded-3xl shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your <span className="text-yellow-300">Next Project?</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Partner with NexGen Brothers — your trusted experts in Civil Construction, Fire Safety,
          and Industrial Fabrication.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          Contact Us Today
        </Link>
      </motion.div>
    </section>
  );
}

export default NavProjects;
