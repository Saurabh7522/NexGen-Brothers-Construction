import React from "react";
import civilImage from "./assets/images/civil2.jpg";

export default function Civil() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1E3A8A] mb-5 tracking-tight">
            Civil Construction
          </h1>
          <p className="text-lg md:text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            NexGen Brothers Construction delivers high-performance infrastructure 
            with uncompromised quality, innovation, and trust — building projects 
            that define durability and design excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-lg mb-16">
          <img
            src={civilImage}
            alt="Civil Construction"
            className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-7 mb-20">
          <p className="text-[#1F2937] text-lg md:text-xl leading-relaxed">
            Our Civil Division specializes in delivering modern, efficient, and 
            sustainable building solutions. We focus on attention to detail, superior 
            materials, and adherence to deadlines — ensuring that every structure we 
            create is a testament to craftsmanship and excellence.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li>🏗️ Structural and Architectural Design</li>
            <li>🏠 Residential and Commercial Projects</li>
            <li>🔧 Foundation and Reinforcement Work</li>
            <li>🧱 Complete Turnkey Project Management</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-10 shadow-lg mb-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6">
            Why Choose NexGen Brothers
          </h3>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            Our mission is to blend modern construction technology with traditional 
            values of integrity, safety, and precision. Each project is executed 
            under strict quality standards and with full transparency.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-[#1F2937] text-base md:text-lg">
            <div>✅ Certified Engineers & Skilled Labor</div>
            <div>✅ Modern Tools & Safety Practices</div>
            <div>✅ Transparent Costing & Timely Delivery</div>
            <div>✅ Long-Term Maintenance Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl 
                       text-white bg-linear-to-r from-[#1E3A8A] to-[#FBBF24] 
                       shadow-md hover:shadow-lg hover:scale-105 
                       transition-all duration-300 cursor-pointer"
          >
            Contact Us for Civil Construction
          </button> 
        </div>
      </div>   
    </section>
  );
}
