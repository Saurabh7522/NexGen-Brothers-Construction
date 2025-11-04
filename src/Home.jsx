import React, { useEffect } from "react";
import VideoSection from "./VideoSection";
import Hero from "./hero";
import ServicesCards from "./Services";
import Projects from "./Projects";
import ClientCompany from "./ClientCompany";

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <VideoSection />
      <Hero />
      <ServicesCards />
      <Projects />
      <ClientCompany />
    </div>
  );
}
