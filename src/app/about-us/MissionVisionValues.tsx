import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faGem } from "@fortawesome/free-solid-svg-icons";

const MissionVisionValues = () => {
  return (
    <section className="bg-yellow-50 py-10 px-20 text-center mx-auto">
      <h2 className="text-2xl font-bold uppercase text-black">Mission, Vision & Values</h2>
      <p className="text-sm text-gray-600 mt-1 mb-10 uppercase">
            Investing in today to build a better tomorrow
      </p>

      <div className="flex flex-col relative space-y-6 px-20">
            {/* Mission Card */}
            <div className="relative flex items-start w-full max-w-md bg-white shadow-md p-6 ml-12">
                <div className="absolute -left-18 top-15 w-30 h-30 rounded-full bg-white ring-4 ring-yellow-400 flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faBullseye} className="text-black text-xl p-5" />
                </div>
                <div className="text-center px-10 py-10 space-y-4">
                    <h3 className="text-lg font-bold mb-2 text-black">Our Mission</h3>
                    <p className="text-gray-700 text-sm text-start space-y-5">
                        Our business is to contribute to our investors&apos; financial success by
                        providing a source of consistent and repeatable returns through
                        opportunistic real estate investing.
                    </p>
                </div>
            </div>

            {/* Vision Card */}
            <div className="relative flex items-start self-end w-full max-w-md bg-white shadow-md p-6 mr-30">
                <div className="absolute -left-18 top-15 w-30 h-30 rounded-full bg-white ring-5 ring-purple-400 flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faEye} className="text-black text-xl p-5" />
                </div>
                <div className="text-center px-10 py-10 space-y-4">
                    <h3 className="text-lg font-bold mb-2 text-black">Our Vision</h3>
                    <p className="text-gray-700 text-sm text-start space-y-5">
                        Our vision is to be a leader in North American, Australia, New Zealand
                        and across Europe commercial real estate investment solutions and to
                        continue to innovate for the benefit of our valued global investors.
                    </p>
                </div>
            </div>

            {/* Core Values Card */}
            <div className="relative flex items-start w-full max-w-md bg-white shadow-md p-4 ml-12">
                <div className="absolute -left-18 top-25 w-30 h-30 rounded-full bg-white ring-4 ring-green-400 flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faGem} className="text-black text-xl p-5" />
                </div>
                <div className="text-center px-10 py-10 space-y-4">
                    <h3 className="text-lg font-bold mb-2 text-black">Core Values</h3>
                    <p className="text-gray-700 text-sm text-start space-y-5">
                        Our mission is to build a better future - with every relationship and
                        through our entrepreneurial approach and innovative mindset, helping
                        our investors and development partners achieve their financial goals.
                        We foster a dynamic and collaborative work environment to create
                        opportunities for our employees, partners, and the communities we
                        invest in to prosper.
                    </p>
                </div>
            </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;