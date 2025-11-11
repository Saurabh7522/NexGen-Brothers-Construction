import React from "react";
import fireImage from "./assets/images/firee.jpg";

export default function FireSafety() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-20 pb-20 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight relative text-center"
  style={{
    background: "linear-gradient(90deg, #B91C1C, #EF4444, #FBBF24)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 8px rgba(0,0,0,0.25)", // subtle shadow for contrast
  }}
>
  Fire Safety Systems
</h1>
          <p className="text-md md:text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed font-roboto">
            At NexGen Brothers Construction, we design and implement advanced fire safety systems that protect lives, property, and business continuity. Every installation meets international safety standards.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700">
          <img
            src={fireImage}
            alt="Fire Safety System"
            className="w-full h-[400px] sm:h-[480px] md:h-[520px] object-cover"
          />
        </div>

        {/* Key Services */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 font-roboto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#B91C1C] mb-6 text-center">
            Our Fire Safety Expertise
          </h2>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
            We offer complete fire safety design, installation, and maintenance services. From alarms to suppression systems, we create strategies that save lives and assets.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li className="flex items-center gap-3">
              <span className="bg-red-500 text-white p-2 rounded-full">🚨</span>
              Fire Alarm & Detection Systems
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-500 text-white p-2 rounded-full">💧</span>
              Sprinkler & Hydrant Networks
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-orange-500 text-white p-2 rounded-full">🔥</span>
              Fire Suppression & Extinguishing Systems
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-yellow-500 text-white p-2 rounded-full">🧯</span>
              Safety Signage & Evacuation Plans
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#F3F4F6] rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200 font-roboto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#B91C1C] mb-6 text-center">
            Your Safety, Our Priority
          </h3>
          <p className="text-[#374151] text-base md:text-lg leading-relaxed mb-8 text-center">
            Every project is executed with strict adherence to safety regulations. Our certified engineers ensure reliability, quality, and peace of mind.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-[#1F2937] text-base md:text-lg">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white p-1 rounded-full">✅</span>
              ISI & NFPA Compliant Designs
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white p-1 rounded-full">✅</span>
              24/7 Emergency Support
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-500 text-white p-1 rounded-full">✅</span>
              Regular Maintenance & Testing
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-500 text-white p-1 rounded-full">✅</span>
              Expert Risk Assessment
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ background: "linear-gradient(90deg, #B91C1C, #FBBF24)" }}
          >
            Contact Us for Fire Safety Solutions
          </button>
        </div>

      </div>
    </section>
  );
}
