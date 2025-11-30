import React from "react";
import { Cpu, Settings, Code, Layers, ClipboardCheck, Database } from "lucide-react";
import { MdEngineering } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { LiaDigitalTachographSolid } from "react-icons/lia";


const Capabilities = () => {
  return (
    <section className="w-full bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 
          className="text-4xl font-bold text-gray-900 mb-4 text-center"
          data-aos="fade-up"
        >
          Capabilities
        </h2>

         <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>

        <p 
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Broad expertise, client-centric solutions, and deep industry knowledge to accelerate your roadmap.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200 
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg 
                       transition-all duration-300 cursor-pointer"
          >
            <MdEngineering className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Engineering</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• New Product Development</li>
              <li>• CAD, Value Engineering</li>
              <li>• Embedded Hardware & Software</li>
              <li>• Prototype & Compliance Testing</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg
                       transition-all duration-300 cursor-pointer"
          >
            <GiMechanicalArm className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Engineering</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• 3D Modeling & Detailing</li>
              <li>• CAE / CFD / BIFMA Analysis</li>
              <li>• Reverse Engineering</li>
              <li>• Industrial Design & Fixtures</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg
                       transition-all duration-300 cursor-pointer"
          >
            <Cpu className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Embedded Systems</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Firmware & Hardware</li>
              <li>• Sensors & Power Design</li>
              <li>• High-Speed PCB Design</li>
              <li>• Manufacturing Validation</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg
                       transition-all duration-300 cursor-pointer"
          >
            <ClipboardCheck className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & Certification</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Automated Testing</li>
              <li>• EMI/EMC, SI/PI Testing</li>
              <li>• Pre-Compliance</li>
              <li>• CE, UL, FCC, IP65</li>
            </ul>
          </div>

          {/* CARD 5 */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg
                       transition-all duration-300 cursor-pointer"
          >
            <LiaDigitalTachographSolid className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Engineering</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Cloud & Platform Engineering</li>
              <li>• Data Engineering & AI/ML</li>
              <li>• XR & Digital Ops</li>
              <li>• Visualization Solutions</li>
            </ul>
          </div>

          {/* CARD 6 */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 hover:border-bg
                       transition-all duration-300 cursor-pointer"
          >
            <FaLaptopCode className="text-bg mb-4" size={36} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Development</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Custom Software</li>
              <li>• Web & Mobile Apps</li>
              <li>• Cloud Digital Solutions</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
