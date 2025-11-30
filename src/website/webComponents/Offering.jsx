import { staff, consulting, about1 } from "@/assets/images/HomeHero";
import React from "react";

const Offering = () => {
    return (
        <section className="w-full  bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 space-y-22">

                {/* TITLE */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Offerings</h2>
                    <div className="h-1 w-32 bg-bg mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600">
                        Our top-of-the-line engineering services are built on a foundation of proven successes
                        with specialized industry expertise combined with our matrix-based skills that power
                        our delivery frameworks for dependable engineering support across requirements.
                    </p>
                </div>

                {/* BLOCK 1 – IMAGE FIRST ON MOBILE */}
             <div className="flex flex-col lg:flex-row gap-14 items-center">

    {/* IMAGE */}
    <img
        src={about1}
        alt="Engineering Services"
        className="rounded-xl shadow-lg w-full h-80 sm:h-96 object-cover"
    />

    {/* CONTENT */}
    <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Engineering Services
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
            We help you bring products to market faster with end-to-end support...
        </p>

        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

        <ul className="space-y-2 text-gray-700">
            <li>• Flexible Delivery Models</li>
            <li>• Extended Design Center (EDC)</li>
            <li>• KPI-Driven Delivery & Governance</li>
            <li>• Seamless Collaboration</li>
            <li>• Scalable & Cost-Efficient Teams</li>
        </ul>
    </div>
</div>


                {/* BLOCK 2 – IMAGE FIRST ON MOBILE */}
               <div className="flex flex-col lg:flex-row-reverse gap-14 items-center">

                    {/* IMAGE */}
                    <img
                        src={staff}
                        alt="Staff Augmentation"
                        className="rounded-xl shadow-lg h-80 sm:h-96 w-full object-cover"
                    />

                    {/* CONTENT */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Staff Augmentation Services
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Boost your engineering and technology capabilities with our Staff Augmentation services...
                        </p>

                        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

                        <ul className="space-y-2 text-gray-700">
                            <li>• Domain Expertise with industry-standard tools</li>
                            <li>• Flexible short and long engagements</li>
                            <li>• Seamless Integration with your workflows & culture</li>
                            <li>• Rapid Scalability for urgent project needs</li>
                            <li>• Cost-Efficient compared to permanent hiring</li>
                        </ul>
                    </div>
                </div>

                {/* BLOCK 3 – IMAGE FIRST ON MOBILE */}
               <div className="flex flex-col lg:flex-row gap-14 items-center">

                    {/* IMAGE */}
                    <img
                        src={consulting}
                        alt="Consulting Solutions"
                        className="rounded-xl shadow-lg h-80 sm:h-96 w-full object-cover"
                    />

                    {/* CONTENT */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Consulting Solutions
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Drive innovation and strategic growth with our Engineering Consulting Services...
                        </p>

                        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

                        <ul className="space-y-2 text-gray-700">
                            <li>• Engineering Transformation for high productivity</li>
                            <li>• Technology Consulting for competitive advantage</li>
                            <li>• Multi-Domain Experts with global experience</li>
                            <li>• Strategic Insights and actionable roadmaps</li>
                            <li>• Seamless Collaboration to implement solutions</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Offering;
