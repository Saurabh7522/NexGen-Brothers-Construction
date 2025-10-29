import React, { useState } from "react";
import civilConstruction from "./assets/images/civil_construction.jpg";
import fireSafety from "./assets/images/fire_safety.jpg";
import fabrication from "./assets/images/fabrication.jpg";

const services = [
    {
        id: "civil",
        title: "Civil Construction",
        caption:
            "Design, build and deliver commercial & residential projects — from foundations to finishing.",
        images: civilConstruction,
        details:
            "We handle site surveys, structural works, finishing, and project management with safety-first execution.",
    },
    {
        id: "fire",
        title: "Fire Safety & Services",
        caption:
            "Comprehensive fire protection systems — detection, suppression and maintenance.",
        images: fireSafety,
        details:
            "Supply & install fire alarms, sprinklers, hydrants, and perform periodic testing and certification.",
    },
    {
        id: "fabrication",
        title: "Fabrication & Pre-Engineering",
        caption:
            "Pre-engineered buildings and custom metal fabrication for rapid, precise construction.",
        images: fabrication,
        details:
            "Steel structures, shop drawings, CNC cutting, and on-site erection with QA/QC processes.",
    },
];

export default function ServicesCards() {
    const [active, setActive] = useState(0);

    const onReadMore = (service) => {
        alert(`${service.title}\n\n${service.details}`);
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 font-barlow">
                        Our Services
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                        Trusted expertise across construction, safety, and fabrication.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {services.map((s, i) => (
                        <article
                            key={s.id}
                            className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full border 
    transform transition-transform duration-500 hover:scale-105 hover:shadow-xl ${i === active ? "ring-2 ring-indigo-300" : "ring-0"
                                }`}
                            onMouseEnter={() => setActive(i)}
                        >
                            <img
                                src={s.images}
                                alt={s.title}
                                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-500 hover:scale-105"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{s.title}</h3>
                                <p className="mt-3 text-gray-600 text-sm">{s.caption}</p>
                            </div>

                            <div className="mt-6 flex items-center justify-between ">
                                <button
                                    onClick={() => onReadMore(s)}
                                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                                >
                                    <span>Read more</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 flex items-center justify-center gap-3">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${i === active ? "scale-125 bg-indigo-600" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <div className="mt-8">
                    <div className="bg-gray-100 rounded-lg p-5 shadow-inner">
                        <h4 className="text-lg font-semibold">{services[active].title}</h4>
                        <p className="mt-2 text-sm text-gray-700">
                            {services[active].details}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export { services };

