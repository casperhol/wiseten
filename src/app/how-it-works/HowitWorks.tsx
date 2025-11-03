import React from 'react';
import riskReturnImg from "../../../public/images/image 46 1.jpg";
import groupImg from "../../../public/images/Image 24 1.jpg";
import ImageComponent from '../components/formFields/ImageComponent';

const HowitWorks: React.FC = () => {
  return (
    <>
        {/* Capital that Drives Growth with Stability */}
        <section className="bg-white text-gray-800 py-6">
            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={riskReturnImg}
                        alt="Commercial Financing ROI"
                        className="w-full h-full object-cover"
                        height={600}
                        width={800}  
                    />
                </div>

                {/* Text Section with yellow background */}
                <div className="md:w-1/2 bg-white px-6 py-6 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        How does Wiseten Horizon handle market down turns?
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        Although real estate portfolios don’t have down turns easily, 
                        during such times, we focuses on risk management strategies, 
                        including diversifying assets and adjusting portfolios to protect 
                        investors investment assets.  
                    </p>
                </div>                
            </div>
        </section>

        {/* Perspective at the Ground Level */}
        <section className="bg-white text-gray-800 py-6">
            <div className="flex flex-col md:flex-row h-full">
                {/* Text Section with yellow background */}
                <div className="md:w-1/2 px-6 py-6 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        What is the difference between Wiseten Horizon and other traditional investment companies?
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed">
                        Unlike other traditional investment companies, Wiseten Horizon specializes in  
                        real estate and digital assets (Blockchain ) investments, focusing on the 
                        unique opportunities and risk of digital economy.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={groupImg}
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

export default HowitWorks;
