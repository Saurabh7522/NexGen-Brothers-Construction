import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const NavProjects = lazy(() => import("./NavProjects"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const ServicesList = lazy(() => import("./ServicesPage"));
const ServiceDetail = lazy(() => import("./ServiceDetail"));
const NotFound = lazy(() => import("./NotFound"));
const TermsPolicy = lazy(() => import("./TermsPolicy"));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries[0]?.type === "reload";

    // ✅ Only redirect to home on full page reload **if not already on home**
    if (isReload && window.location.pathname !== "/") {
      window.location.href = "/"; // Hard reload to Home
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />

      <main className="flex-1 mt-20">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsPolicy />} />

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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}


export default App;
