
import React from 'react';
import Image from "next/image"
import affiliateImg from "../../../public/images/affiliates/affiliate.png";

const Affiliates: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-8 text-black">Our Affiliates</h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-auto">
          <Image
            src={affiliateImg}
            alt="Our Affiliates"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Affiliates;