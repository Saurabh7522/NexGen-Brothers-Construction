import React from "react";
import maintenanceImage from "./assets/images/maintenance.jpg";

export default function Maintenance() {
  return (
    <section className="font-[Inter] bg-[#F9FAFB] text-[#111827] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0C4A6E] mb-5 tracking-tight">
            Maintenance & Repair Services
          </h1>
          <p className="text-lg md:text-xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            NexGen Brothers Construction provides comprehensive maintenance 
            solutions that ensure your buildings, safety systems, and infrastructure 
            remain efficient, secure, and long-lasting.
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-lg mb-16">
          <img
            src={maintenanceImage}
            alt="Maintenance Services"
            className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-7 mb-20">
          <p className="text-[#1F2937] text-lg md:text-xl leading-relaxed">
            We understand that continuous performance requires continuous care. 
            Our preventive and corrective maintenance programs help clients 
            avoid costly downtime while improving overall safety and efficiency.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-[#374151] text-base md:text-lg">
            <li>🔧 Building & Structural Repairs</li>
            <li>⚡ Electrical & Plumbing Maintenance</li>
            <li>🔥 Fire Safety Equipment Servicing</li>
            <li>🏗️ AMC & Preventive Maintenance Plans</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-10 shadow-lg mb-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0C4A6E] mb-6">
            Dependable. Responsive. Expert.
          </h3>
          <p className="text-[#374151] text-lg leading-relaxed mb-8">
            Our maintenance team works round the clock to ensure that your systems 
            perform at peak efficiency. We value reliability, transparency, and client satisfaction.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-[#1F2937] text-base md:text-lg">
            <div>✅ 24/7 On-Site Support</div>
            <div>✅ Regular Performance Inspections</div>
            <div>✅ Long-Term Service Contracts</div>
            <div>✅ Safety & Compliance Audits</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-10 py-4 text-lg md:text-xl font-semibold rounded-xl 
                       text-white bg-linear-to-r from-[#0C4A6E] to-[#FBBF24] 
                       shadow-md hover:shadow-lg hover:scale-105 
                       transition-all duration-300 cursor-pointer"
          >
            Contact Us for Maintenance Services
          </button>
        </div>
      </div>
    </section>
  );
}
