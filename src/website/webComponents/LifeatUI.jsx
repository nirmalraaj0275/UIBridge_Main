import React, { useEffect, useRef } from "react";
import {
  team1, team2, team3, team4,
  team5, team6, team7, team8
} from "@/assets/images/HomeHero";

const LifeatUI = () => {
  const images = [
    team1, team2, team3, team4,
    team5, team6, team7, team8
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const speed = 1.5;

    const smoothScroll = () => {
      if (slider) {
        slider.scrollLeft += speed;

        // Reset to beginning for infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="px-6 pt-20 flex justify-center">
      <div className="w-full max-w-7xl">

        <h2 className="text-3xl font-bold text-center mb-4">Life at UIB</h2>

        <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>

        {/* Continuous Scrolling Slider */}
        <div
          ref={sliderRef}
          className="overflow-x-hidden no-scrollbar"
        >
          <div className="flex gap-6">
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="shrink-0 w-[260px] sm:w-[320px] h-56 sm:h-60 rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`life-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LifeatUI;
