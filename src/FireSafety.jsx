import React from "react";
import fireImage from "./assets/images/firee.jpg";

export default function FireSafety() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#B91C1C] mb-5 tracking-tight">
            Fire Safety Systems
          </h1>
          <p className="text-lg md:text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            At NexGen Brothers Construction, we design and implement advanced 
            fire safety systems that protect lives, property, and business continuity.  
            We ensure every installation meets international standards of safety and compliance.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-lg mb-16">
          <img
            src={fireImage}
            alt="Fire Safety System"
            className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-7 mb-20">
          <p className="text-[#1F2937] text-lg md:text-xl leading-relaxed">
            Our team offers complete fire safety design, installation, and 
            maintenance services. From alarm systems to suppression equipment, 
            we create fire protection strategies that save lives and assets.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li>🚨 Fire Alarm & Detection Systems</li>
            <li>💧 Sprinkler & Hydrant Networks</li>
            <li>🔥 Fire Suppression & Extinguishing Systems</li>
            <li>🧯 Safety Signage & Evacuation Plans</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-10 shadow-lg mb-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[#B91C1C] mb-6">
            Your Safety, Our Priority
          </h3>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            We ensure every project is executed with strict adherence to 
            safety regulations. Our certified technicians and engineers 
            bring reliability, quality, and peace of mind.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-[#1F2937] text-base md:text-lg">
            <div>✅ ISI & NFPA Compliant Designs</div>
            <div>✅ 24/7 Emergency Support</div>
            <div>✅ Regular Maintenance & Testing</div>
            <div>✅ Expert Risk Assessment</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl 
                       text-white bg-linear-to-r from-[#B91C1C] to-[#FBBF24] 
                       shadow-md hover:shadow-lg hover:scale-105 
                       transition-all duration-300 cursor-pointer"
          >
            Contact Us for Fire Safety Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
