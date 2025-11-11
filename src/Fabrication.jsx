import React from "react";
import fabricationImage from "./assets/images/fabrication.jpg";

export default function Fabrication() {
  return (
    <section
      className="font-roboto bg-[#F9FAFB] text-[#111827] pt-24 pb-24"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(90deg, #065F46, #10B981, #FBBF24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            Fabrication & Design
          </h1>
          <p className="text-md md:text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
            NexGen Brothers Construction provides high-quality fabrication 
            services that blend structural integrity with design innovation. 
            Every piece we craft reflects precision, durability, and aesthetic excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <img
            src={fabricationImage}
            alt="Fabrication and Design"
            className="w-full h-[400px] sm:h-[480px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Key Services */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#065F46] mb-6 text-center">
            Our Expertise
          </h2>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our fabrication unit specializes in producing steel structures, equipment frames, industrial sheds, and customized design components with precision, durability, and aesthetic excellence.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li className="flex items-center gap-3">
              <span className="bg-green-500 text-white p-1 rounded-full">⚙️</span>
              Structural & Sheet Metal Fabrication
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-500 text-white p-1 rounded-full">🏗️</span>
              Industrial Sheds & Frames
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white p-1 rounded-full">🧰</span>
              Welding, Cutting & Finishing
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-red-500 text-white p-1 rounded-full">🪛</span>
              Custom Design & Prototyping
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#F3F4F6] rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-[#065F46] mb-6 text-center">
            Precision Meets Strength
          </h3>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-8 text-center">
            We combine advanced machinery, skilled craftsmanship, and quality materials to produce reliable and efficient fabrication solutions that meet global standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-[#1F2937] text-base md:text-lg">
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white p-1 rounded-full">✅</span>
              Experienced Fabrication Team
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white p-1 rounded-full">✅</span>
              High-Grade Raw Materials
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-500 text-white p-1 rounded-full">✅</span>
              Accurate Engineering Drawings
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white p-1 rounded-full">✅</span>
              Custom Designs per Client Needs
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #065F46, #10B981, #FBBF24)",
            }}
          >
            Contact Us for Fabrication Services
          </button>
        </div>
      </div>
    </section>
  );
}
