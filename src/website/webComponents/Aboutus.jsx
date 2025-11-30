import React from "react";
import {about} from "@/assets/images/HomeHero/";

const AboutUs = () => {
  return (
    <section className="w-full pt-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE PLACEHOLDER */}
        <div className="w-full h-[500px] bg-gray-200 rounded-xl shadow-md flex items-center justify-center" data-aos="fade-right">
          <img src={about} alt="About Us" className="w-full h-full object-cover" />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-bg">UI Bridge</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            UI Bridge is a cutting-edge engineering company founded in 2020, 
            providing comprehensive end-to-end solutions across Product Engineering, 
            Process Engineering, and Sourcing services. Leveraging digital engineering 
            practices, we enhance efficiency, innovation, and sustainability.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Expertise</h3>

          <ul className="space-y-2 text-gray-700 mb-6 text-sm">
            <li>• Embedded Systems</li>
            <li>• Software Development</li>
            <li>• Mechanical Engineering</li>
            <li>• Simulation</li>
            <li>• Digital Solutions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Approach</h3>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Faster, more accurate solutions</li>
            <li>• Smarter, sustainable problem-solving</li>
            <li>• Embedded systems and model-based engineering expertise</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
