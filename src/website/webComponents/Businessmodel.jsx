import React from "react";
import {b1 ,b2,b3} from "@/assets/images/HomeHero";

const models = [
  {
    img: b1,
    alt: "Industrial",
    lines: [
      "Turnkey Solutions - Engineering Solutions - From Concept to Launch",
    ],
  },
  {
    img: b2,
    alt: "Consumer",
    lines: [
      "Extended Design Center (EDC) - Your Vision - Our Extended Expertise.",
    ],
  },
  {
    img: b3,
    alt: "Consumer",
    lines: [
      "T&M / Staff Augmentation - Right Skills at Right Time",
    ],
  },
];

const Businessmodel = () => {
  return (
    <section
      id="businessmodels"
      className="w-full pt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Business Models
        </h2>

          <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-200 flex flex-col items-center text-center 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={model.img}
                alt={model.alt}
                className="mb-3 h-14 object-contain"
              />
              <h3 className="text-xl font-semibold text-bg mb-2">{model.title}</h3>
              {model.lines.map((line, li) => (
                <p key={li} className="text-gray-700 text-sm mt-3 leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businessmodel;
