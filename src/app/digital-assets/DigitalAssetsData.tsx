import React from "react";
import achieversImg from "../../../public/images/im 11 1.jpg";
import ImageComponent from "../components/formFields/ImageComponent";


const DigitalAssetsData: React.FC = () => {
  return (
    <>
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-4 text-black">
                INVESTING IN TODAY TO BUILD A BETTER TOMORROW
            </h2>
            <p className="text-center text-gray-600 max-w-6xl mx-auto mb-12">
                Our funds provide investors with the full spectrum of exposure to the blockchain 
                space, ranging from illiquid venture capital assets to more liquid assets like 
                bitcoin and other cryptocurrencies. We invest in thematic ideas and infrastructure 
                projects critical to the blockchain ecosystem.
            </p>
        </section>
        <section className="bg-white text-gray-800">
            <div className="flex flex-col md:flex-row h-full">
                {/* Text Section */}
                <div className="relative bg-white md:w-1/2 px-6 py-4 flex flex-col justify-center">
                    <div className="translate-x-[50px] md:translate-x-[150px] z-50 bg-[#F5F5F5] p-6 rounded-xl">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Building Financial Products for the Modern World
                            </h2>
                            <p className="text-sm md:text-base leading-relaxed py-2 text-start">
                                Wiseten Horizon, the innovation division of Wiseten, harnesses the 
                                transformative power of blockchain and digital assets in its efforts to 
                                help develop a more dynamic, democratized financial system.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed py-2 text-start">
                                We are one of the leaders in the effort to build financial 
                                infrastructures and networks that integrate innovative technology 
                                into traditional frameworks. In partnership with leading financial 
                                institutions, we strive to create market efficiencies and products that 
                                advance the ecosystem.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 h-auto md:h-auto">
                    <ImageComponent
                        src={achieversImg}
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

export default DigitalAssetsData;