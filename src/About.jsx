import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import all images
import aboutImage from "./assets/images/civil_construction.jpg";
import civil2 from "./assets/images/civil2.jpg";
import fire2 from "./assets/images/fire2.png";
import design from "./assets/images/Design.jpg";
import owner from "./assets/images/logo.jpg"; // 👈 Add your owner's image here

const About = () => {
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    workers: 0,
  });

  // ✅ Animated counter for stats
  useEffect(() => {
    const target = { experience: 10, projects: 120, clients: 75, workers: 50 };
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;

    const increment = {
      experience: target.experience / steps,
      projects: target.projects / steps,
      clients: target.clients / steps,
      workers: target.workers / steps,
    };

    const timer = setInterval(() => {
      setStats((prev) => ({
        experience: Math.min(prev.experience + increment.experience, target.experience),
        projects: Math.min(prev.projects + increment.projects, target.projects),
        clients: Math.min(prev.clients + increment.clients, target.clients),
        workers: Math.min(prev.workers + increment.workers, target.workers),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // ✅ One reusable animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6 md:px-16 bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" variants={fadeIn}>
            <img
              src={aboutImage}
              alt="About NCB"
              loading="lazy"
              className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div className="md:w-1/2 space-y-6" variants={fadeIn}>
            <h2 className="text-5xl font-extrabold leading-tight">
              Building <span className="text-red-600">Excellence</span>
              <br /> Since Our Foundation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>NCB (Nexgen Brothers Constructions)</strong> is an engineering and
              infrastructure firm combining innovation, integrity, and craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We deliver iconic structures with cutting-edge design and sustainable impact.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* OUR CORE VALUES */}
      <section className="bg-linear-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold mb-8">
            Our <span className="text-red-500">Core Values</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            The foundation of our company stands on values that shape every project — integrity, innovation, and excellence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Integrity", desc: "Honest, ethical practices that build long-term trust." },
              { title: "Innovation", desc: "We adopt advanced techniques for modern results." },
              { title: "Quality", desc: "Unmatched craftsmanship and attention to every detail." },
              { title: "Commitment", desc: "We deliver excellence — always, on time." },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all"
              >
                <h4 className="text-2xl font-semibold mb-3 text-red-400">{val.title}</h4>
                <p className="text-gray-300">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-white py-24 px-6 md:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-20"
        >
          <h3 className="text-center text-4xl font-bold text-gray-800">
            Our <span className="text-red-600">Services</span>
          </h3>

          {[
            {
              title: "Civil Construction",
              desc: "From residential to commercial projects, we execute every phase — from foundation to finishing — with precision and perfection.",
              image: civil2,
            },
            {
              title: "Fire Safety & Fabrication",
              desc: "Specialized in fire system installation, fabrication, and safety management — ensuring protection and compliance.",
              image: fire2,
            },
            {
              title: "Design & Consultancy",
              desc: "We provide innovative design and expert consultancy tailored to meet client-specific project requirements.",
              image: design,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className={`flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} items-center gap-10`}
            >
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h4 className="text-3xl font-semibold text-gray-800">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-gray-100 py-24 px-6 md:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h3 className="text-4xl font-bold mb-10 text-gray-800">
            Our <span className="text-red-600">Process</span>
          </h3>
          <div className="relative flex flex-col md:flex-row justify-between items-center md:space-x-10">
            {[
              { step: "Consultation", desc: "We understand your goals and vision." },
              { step: "Planning", desc: "Detailed layouts, cost estimation, and scheduling." },
              { step: "Execution", desc: "Precise construction with expert supervision." },
              { step: "Delivery", desc: "Final inspection and handover with satisfaction." },
            ].map((stage, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative z-10 bg-white rounded-2xl p-8 shadow-lg border-b-4 border-red-600 md:w-1/4 mt-10 md:mt-0"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">{i + 1}</div>
                <h5 className="text-xl font-semibold mb-2 text-gray-800">{stage.step}</h5>
                <p className="text-gray-600">{stage.desc}</p>
              </motion.div>
            ))}
            <div className="absolute md:block hidden top-1/2 w-full h-1 bg-red-300 -z-10" />
          </div>
        </motion.div>
      </section>

      {/* ✅ FOUNDER SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/3 flex justify-center">
            <img
              src={owner}
              alt="Abhishek Yadav - Founder of Nexgen Brothers Construction Pvt. Ltd."
              loading="lazy"
              className="rounded-full shadow-2xl w-64 h-64 object-cover border-4 border-red-600"
            />
          </div>

          <div className="md:w-2/3 space-y-5">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our <span className="text-red-600">Founder</span>
            </h3>
            <h4 className="text-2xl font-semibold text-gray-700">Mr. Abhishek Yadav</h4>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              As the visionary Founder and Managing Director of{" "}
              <strong>Nexgen Brothers Construction Pvt. Ltd.</strong>, Abhishek
              Yadav has led the company with dedication, innovation, and an
              unwavering commitment to excellence in engineering and infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              With a deep belief in quality, safety, and sustainability, he
              ensures that every project under Nexgen Brothers Construction
              reflects world-class standards and client satisfaction. Under his
              leadership, the firm continues to redefine construction excellence
              across India.
            </p>
            <p className="italic text-gray-500 border-l-4 border-red-500 pl-4">
              “We don’t just build structures, we build trust and legacy.”
            </p>
            <div className="pt-4">
              <h5 className="text-sm uppercase tracking-widest text-gray-500">
                Founder & Managing Director
              </h5>
              <p className="text-lg font-semibold text-gray-800">
                Nexgen Brothers Construction Pvt. Ltd.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
