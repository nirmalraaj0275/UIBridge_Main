import React, { useEffect } from "react";

// Import your actual images
import {
  calibratebanner,
  whyweshouldcalibrate,
  calibrate,
  instrument1,
  instrument2,
  instrument4,
} from "@/assets/images/HomeHero";

const instrumentData = [
  { img: instrument1, name: "Power Puck II / Power Puck II Profiler – High & Mid-Range" },
  { img: instrument2, name: "UviCure Plus II / UviCure Profiler – High & Mid-Range" },
  { img: instrument4, name: "PowerMAP II – High & Mid-Range Units" },
];

const Calibration = () => {

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen mt-20">

      {/* ================= HERO BANNER ================= */}
      <section
        className="w-full h-[400px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${calibrate})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl space-y-4">
            <h1 className="font-bold drop-shadow-2xl text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight animate-fade-in">
              Calibration of EIT2.0 Instruments
            </h1>
            <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
            <p className="text-sm sm:text-lg md:text-xl opacity-95 leading-relaxed font-light">
              Certified EIT2.0 calibration services in India — precise, reliable & authorized.
            </p>
          </div>
        </div>
      </section>

      {/* ========= CENTER HEADING ========= */}
      <section className="max-w-4xl mx-auto px-6 pt-16 text-center">
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 bg-black bg-clip-text text-transparent">
            Authorized <span className="bg-bg bg-clip-text text-transparent"> EIT2.0 Calibration Centre</span> in India
          </h2>
          <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
          UI Bridge is the authorized calibration centre for EIT2.0 instruments in India and is certified to perform calibrations in accordance with EIT2.0 standards.
        </p>
      </section>

      {/* ================= WHY CALIBRATION IS NEEDED ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={whyweshouldcalibrate}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              alt="Why Calibration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Calibration is Needed
            </h2>
            <div className="h-1 w-20 bg-bg rounded-full"></div>
            <p className="text-gray-700 text-sm leading-relaxed">
              For accurate and reliable UV curing results, it's essential to regularly adjust and calibrate instruments. Calibration ensures precision and consistent product quality.
            </p>
          </div>

        </div>
      </section>

      {/* ================= INSTRUMENT CARDS ================= */}
      <section className="w-full px-6 pt-20 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            We Calibrate the Following <span className="text-bg">EIT2.0 Instruments</span>
          </h2>
          <div className="h-1 mt-2 w-32 bg-bg mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {instrumentData.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-[340px] object-contain transition-all duration-700 group-hover:scale-110"
                  alt={item.name}
                />
              </div>
              <div className="py-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 px-6">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CALIBRATION AT UI BRIDGE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-3 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Calibration at UI Bridge
            </h2>
            <div className="h-1 w-20 bg-bg rounded-full"></div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Calibrations for broadband instruments are always performed using an arc lamp. We provide calibration services for standard high-power & mid-power instruments.
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start space-x-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <span><b>High-Power UVA, UVB, UVV:</b> 100 mW/cm² – 10 W/cm² / <b>UVC:</b> 10 mW/cm² – 1 W/cm²</span>
              </li>

              <li className="flex items-start space-x-3">
                <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
                <span><b>Mid-Power UVA, UVB, UVV:</b> 10 mW/cm² – 1 W/cm² / <b>UVC:</b> 1 mW/cm² – 100 mW/cm²</span>
              </li>
            </ul>

          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl order-1 md:order-2 group">
            <img
              src={calibratebanner}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Calibration Range"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl shadow-xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-2">
            Email: <a href="mailto:support@uibridgesolutions.com" className="font-bold text-bg hover:text-blue-900">support@uibridgesolutions.com</a>
          </p>
          <p className="text-gray-700">
            Contact: <a href="tel:+919342398922" className="font-bold text-bg hover:text-blue-900">+91 93423 98922</a>
          </p>
        </div>
      </section>

    </main>
  );
};

export default Calibration;
