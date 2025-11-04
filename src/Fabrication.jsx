import React from "react";
import fabricationImage from "./assets/images/fabrication.jpg";

export default function Fabrication() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#065F46] mb-5 tracking-tight">
            Fabrication & Design
          </h1>
          <p className="text-lg md:text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            NexGen Brothers Construction provides high-quality fabrication 
            services that blend structural integrity with design innovation. 
            Every piece we craft reflects precision, durability, and aesthetic excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-lg mb-16">
          <img
            src={fabricationImage}
            alt="Fabrication and Design"
            className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-7 mb-20">
          <p className="text-[#1F2937] text-lg md:text-xl leading-relaxed">
            Our fabrication unit specializes in the production of steel structures, 
            equipment frames, canopies, industrial sheds, and customized design components 
            to meet project-specific requirements.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li>⚙️ Structural & Sheet Metal Fabrication</li>
            <li>🏗️ Industrial Sheds & Frames</li>
            <li>🧰 Welding, Cutting & Finishing</li>
            <li>🪛 Custom Design & Prototyping</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-10 shadow-lg mb-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[#065F46] mb-6">
            Precision Meets Strength
          </h3>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            We combine advanced machinery, skilled craftsmanship, and quality 
            materials to produce reliable and efficient fabrication solutions 
            that meet global standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-[#1F2937] text-base md:text-lg">
            <div>✅ Experienced Fabrication Team</div>
            <div>✅ High-Grade Raw Materials</div>
            <div>✅ Accurate Engineering Drawings</div>
            <div>✅ Custom Designs per Client Needs</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl 
                       text-white bg-linear-to-r from-[#065F46] to-[#FBBF24] 
                       shadow-md hover:shadow-lg hover:scale-105 
                       transition-all duration-300 cursor-pointer"
          >
            Contact Us for Fabrication Services
          </button>
        </div>
      </div>
    </section>
  );
}
