import React from "react";
import { Link } from "react-router-dom";

const CalibrationPreview = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-14 sm:py-20 bg-gray-50 mt-10">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
          <span className="text-bg">EIT2.0 Calibration</span> Services
        </h2>
             <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>

        {/* Description */}
        <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-sm leading-relaxed max-w-2xl mx-auto px-2">
          We are an authorized EIT2.0 Calibration Centre in India.  
          Our UV radiometer calibration ensures accuracy, quality,  
          and consistent UV curing performance.
        </p>

        {/* Button */}
        <Link
          to="/calibration-service"
          className="inline-block mt-6 sm:mt-8 px-5 sm:px-7 py-2.5 sm:py-3 
                     bg-bg text-white rounded-lg shadow-md 
                     hover:bg-blue-800 transition-all duration-200 
                     text-sm sm:text-sm"
        >
          Learn More
        </Link>

      </div>
    </section>
  );
};

export default CalibrationPreview;
