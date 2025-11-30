import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  industries,
  consumer,
  model,
  aero,
  automotive,
} from "@/assets/images/HomeHero/";

const Industries = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 60,
    });
  }, []);

  return (
    <section className="w-full pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-4xl font-bold text-gray-900 text-center mb-4"
          data-aos="fade-up"
        >
          Industries
        </h2>

        <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>

        <p
          className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-sm "
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We help our customers accelerate product development and optimize the cost of
          sustaining existing products through proven delivery models, engineering expertise,
          and deep industry partnerships.
        </p>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={industries} alt="Industrial & Energy" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Industrial & Energy</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Engineering solutions enhancing industrial performance, reliability, and automation efficiency.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={consumer} alt="Consumer Electronics" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Consumer Electronics</h3>
              <p className="text-gray-600 mt-2 text-sm">
                End-to-end engineering for innovative, high-performance consumer electronic products.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={model} alt="Furniture" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Furniture</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Smart engineering for ergonomic, durable, and tech-enabled furniture solutions.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={aero} alt="Aerospace & Defence" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Aerospace & Defence</h3>
              <p className="text-gray-600 mt-2 text-sm">
                High-precision engineering enabling reliable, mission-ready aerospace and defence systems.
              </p>
            </div>
          </div>

          {/* CARD 5 (Semiconductor if needed later) */}

          {/* CARD 6 */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={automotive} alt="Automotive" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Automotive</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Comprehensive engineering powering efficient, safe, and next-gen smart automotive systems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;
