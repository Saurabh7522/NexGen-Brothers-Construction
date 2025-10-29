import React from "react";
import companyVideo from "./assets/videos/companyvideoo.mp4";

const VideoSection = () => {
  return (
    <section className="relative w-full h-96 sm:96 md:h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center top-20">
      {/* Background Video */}
      <video
        src={companyVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg font-barlow tracking-wider">
          Building a Safer Future
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-3 drop-shadow-md font-roboto font-semibold tracking-wide">
          Civil Construction • Fire & Safety • Fabrication & Pre-Engineering
        </p>
        <p className="font-semibold text-lg sm:text-xl md:text-3xl lg:text-4xl 
  text-yellow-300 tracking-wide animate-pulse drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] 
  transition-all duration-700">
  With Nexgen Brothers Construction
</p>

      </div>
    </section>
  );
};

export default VideoSection;