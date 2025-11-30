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
                    <p className="text-gray-600 text-sm">
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

                        <p className="text-gray-700 text-sm leading-relaxed mb-6 text-sm">
                            We help you bring products to market faster with end-to-end support, from concept design and prototyping to testing and validation. Our services streamline processes, improve product quality, and reduce time-to-market. Through our Core–Flex engagement models and dedicated Extended Design Center (EDC), we build agile teams that scale with your business needs. Leveraging India’s top engineering talent, we deliver operational cost savings without compromising global quality standards.
                        </p>

                        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

                        <ul className="space-y-2 text-gray-700 text-sm">
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

                        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                            Boost your engineering and technology capabilities with our Staff Augmentation services. Our adaptable, experienced engineers integrate seamlessly with your teams, bringing both technical expertise and practical industry insights. They help accelerate project delivery, optimize operations, and drive measurable business impact—without the long-term commitment or overhead of permanent hiring. Whether bridging skill gaps, meeting critical deadlines, or adding specialized expertise, our engineers become an integral part of your workflow from day one.
                        </p>

                        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

                        <ul className="space-y-2 text-gray-700 text-sm">
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

                        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                            Drive innovation, efficiency, and strategic growth with our Engineering Consulting Services. We provide expert guidance on engineering transformation, technology adoption, and process optimization, helping organizations reduce risk, make informed decisions, and accelerate business outcomes. Our consultants combine technical knowledge with commercial insight, bringing multi-domain experience across Automotive, Industrial, Electronics, Energy, and Aerospace sectors. We partner with your teams to analyze challenges, define roadmaps, and implement solutions that maximize value and operational performance.
                        </p>

                        <h4 className="text-xl font-semibold text-bg mb-3">Why Us:</h4>

                        <ul className="space-y-2 text-gray-700 text-sm mb-3">
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
