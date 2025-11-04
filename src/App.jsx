import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NavProjects from "./NavProjects"; 
import Projects from "./Projects";
import Contact from "./Contact";
import ServicesList from "./ServicesPage";
import ServiceDetail from "./ServiceDetail";
import NotFound from "./NotFound";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();

  // ✅ Redirect to home if page is reloaded (optional — you may remove this if not needed)
  useEffect(() => {
    if (window.performance && window.performance.navigation.type === 1) {
      window.location.replace("/"); // redirect to home
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1 mt-20">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Projects Section */}
          <Route path="/projects" element={<NavProjects />} />
          <Route path="/projects/overview" element={<Projects />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
