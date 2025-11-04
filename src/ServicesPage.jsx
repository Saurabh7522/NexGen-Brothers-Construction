import React from "react";
import { Link } from "react-router-dom";
import { services } from "./Services"; // reuse existing data from Services file

export default function ServicesList() {
  return (
    <section className="pt-24 pb-12 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-amber-700 text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="p-6 bg-white rounded-xl shadow">
            <img src={s.images} alt={s.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.caption}</p>
            <Link to={`/services/${s.id}`} className="inline-block mt-4 text-indigo-700 font-semibold">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
