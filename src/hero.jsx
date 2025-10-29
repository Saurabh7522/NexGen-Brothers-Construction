import React from 'react'
import heroImage from './assets/images/WORK image.png'

const Hero = () => {
  return (
    <section className="pt-12 pb-10 sm:px-4 max-w-7xl mx-auto mt-20 display-flex " 
       >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div className="m-12">
          <h1 className="text-2xl sm:text-3xl font-semibold   leading-tight text-gray-800 uppercase font-family: var(--qutiiz-font-two) tracking-wide">
            Trusted Construction, Fire Safety & Fabrication Solutions
          </h1>

          <p className="mt-4 text-lg text-gray-600 font-nunito ">
            We deliver end-to-end services across Civil Construction, Fire Safety Systems,
            and Precision Fabrication — with quality, safety and timely delivery.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#civil"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Our Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-100 transition"
            >
              Request Quote
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-500">
            <div>
              <strong className="block text-blue-800 text-xl">10+</strong>
              Years Experience
            </div>
            <div>
              <strong className="block text-blue-800 text-xl">200+</strong>
              Projects Delivered
            </div>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="order-first md:order-last">
          <div className="w-full h-auto  from-indigo-50 to-white rounded-xl flex items-center justify-center shadow-sm">
            <img src= {heroImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
