import React from "react";
import { Link } from "react-router-dom";

const CareersPreview = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Build Your Career with{" "}
          <span className="text-bg">UI Bridge</span>
        </h2>

             <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>

        {/* Description */}
        <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
          Be part of a passionate team building innovative technology solutions.
          We value creativity, ownership, and a strong growth mindset that shapes the future.
        </p>

        {/* Button */}
        <Link
          to="/careers"
          className="inline-block mt-6 sm:mt-8 px-5 sm:px-7 py-2.5 sm:py-3 
                     bg-bg text-white rounded-lg shadow-md 
                     hover:bg-blue-800 transition-all duration-200 text-sm sm:text-base"
        >
          Explore Careers
        </Link>

      </div>
    </section>
  );
};

export default CareersPreview;
