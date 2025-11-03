
import React from 'react';
import ImageComponent from "./formFields/ImageComponent";
import affiliateImg from "../../../public/images/image-39-1.jpg";

const Affiliates: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-8 text-black">Our Affiliates</h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-auto">
          <ImageComponent
            src={affiliateImg}
            alt="Our Affiliates"
            width={800} 
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Affiliates;