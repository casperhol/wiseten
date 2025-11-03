import React from 'react';
import graphImage from "../../../public/images/image 47 1.jpg";
import graphImg from "../../../public/images/image 53 1.jpg";
import buildingImg from "../../../public/images/Image 29 1.jpg";
import ImageComponent from '../components/formFields/ImageComponent';

const OurGoals: React.FC = () => {
  return (
    <>
        <section className="bg-white text-gray-800 py-12">
            <div className="flex flex-col md:flex-row h-full">
                {/* Text Section with yellow background */}
                <div className="md:w-1/2 bg-yellow-50 px-6 py-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Innovation in Commercial Financing Solutions
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        Wiseten Horizon Trust has built a reputation for providing innovative financing 
                        for commercial and residential properties in major high-growth centres across North 
                        America, Australia, New Zealand and Europe. We have earned the trust of investors, 
                        including some of Canada&apos;s largest pension funds, by applying prudent risk management 
                        and rigorous institutional-grade underwriting to generate attractive yields and stable 
                        sources of income.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={graphImage}
                        alt="Commercial Financing ROI"
                        className="w-full h-full object-cover"
                        height={600}
                        width={800}  
                    />
                </div>
            </div>
        </section>

        {/* Capital that Drives Growth with Stability */}
        <section className="bg-white text-gray-800 py-12">
            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={graphImg}
                        alt="Commercial Financing ROI"
                        className="w-full h-full object-cover"
                        height={600}
                        width={800}  
                    />
                </div>

                {/* Text Section with yellow background */}
                <div className="md:w-1/2 bg-yellow-50 px-6 py-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Capital that Drives Growth with Stability
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        We offer private and institutional investors strategies to invest in a variety of opportunistic, 
                        fully-secured mortgage investment funds, syndications and joint ventures. 
                        With a large and stable balance sheet, we provide property developers, 
                        investors and owners with certainty of capital, quick approvals, 
                        and flexibility and creativity in short- to mid-term financing to bring a diverse range of real estate projects to
                    </p>
                </div>                
            </div>
        </section>

        {/* Perspective at the Ground Level */}
        <section className="bg-white text-gray-800 py-12">
            <div className="flex flex-col md:flex-row h-full">
                {/* Text Section with yellow background */}
                <div className="md:w-1/2 bg-yellow-50 px-6 py-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Perspective at the Ground Level
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        Our team prides itself on deep real estate industry expertise and on-the-ground perspective. 
                        Wiseten Horizon Trust has multiple offices across Canada and the United States.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={buildingImg}
                        alt="Commercial Financing ROI"
                        className="w-full h-full object-cover"
                        height={600}
                        width={800}  
                    />
                </div>
            </div>
        </section>
    </>
  );
};

export default OurGoals;
