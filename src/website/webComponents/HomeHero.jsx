import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { source1, source2, source3, source4 } from "@/assets/images/HomeHero";

const slides = [
  {
    image: source1,
    title: "Engineering Digital Transformation",
    text: "We build scalable, modern and robust digital solutions.",
  },
  {
    image: source2,
    title: "Innovation. Strategy. Technology.",
    text: "Empowering businesses to create the future.",
  },
  {
    image: source3,
    title: "Your Vision. Engineered.",
    text: "Transforming ideas into powerful digital products.",
  },
  {
    image: source4,
    title: "Calibration Services",
    text: "Precise calibration ensuring optimal device performance.",
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleExploreMore = () => {
    // Check if current slide is Calibration Service (using index or title)
    if (slides[current].title === "Calibration Services") {
      navigate("/calibration-service");
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* FADE + ZOOM BACKGROUND SLIDES */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all  duration-[1200ms]
              ${index === current ? "bg-black/70" : "bg-black/60 opacity-0"}
            `}
          />
        ))}
      </div>
      {/* DARK OVERLAY for readability */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />
      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 pt-40 z-[10]">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-5xl font-semibold text-white mb-4 transition-opacity duration-700">
            {slides[current].title}
          </h1>
          <p className="text-white/90 text-lg text-sm mb-6 transition-opacity duration-700">
            {slides[current].text}
          </p>
          <button
            className="px-8 py-3 bg-bg text-white rounded-lg text-lg shadow-lg hover:bg-sky-600 transition-all"
            onClick={handleExploreMore}
          >
            Explore More
          </button>
        </div>
      </div>
      {/* NAV DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[20]">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all
              ${current === index ? "bg-white scale-125" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
