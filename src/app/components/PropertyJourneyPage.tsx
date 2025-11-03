import React from "react";
import { StaticImageData } from "next/image";
import ImageComponent from "./formFields/ImageComponent";
import Image1 from "../../../public/images/Image-1-10.jpg";
import Image2 from "../../../public/images/Image-5-1.jpg";
import Image3 from "../../../public/images/Image-11-3.jpg";
import Link from "next/link";


interface Property {
  title: string;
  image: string | StaticImageData;
  alt: string;
  main: string;
  description: string;
}

const properties: Property[] = [
  {
    title: "REAL \\n ESTATE",
    image: Image1,
    alt: "Real Estate",
    main: "Benefit of REIT?",
    description: "Real estate builds wealth through appreciation and rental income.",
  },
  {
    title: "INFRASTRUCTURE",
    image: Image2,
    alt: "Infrastructure",
    main: "Benefits of Infrastructure?",
    description: "Infrastructure provides stable, long-term returns from essential public assets.",
  },
  {
    title: "DIGITAL \\n ASSETS",
    image: Image3,
    alt: "Digital Assets",
    main: "Benefits of Digital Assets?",
    description: "Digital assets offer high growth potential in the emerging tech economy.",
  },
];

const PropertyCard: React.FC<Property> = ({ title, image, alt, main, description }) => (
  <div className="flex flex-col items-center text-center space-y-4 max-w-sm">
    <div className="relative w-full h-48">
      <ImageComponent
        src={image}
        alt={alt}
        height={500}
        width={400}
        className="rounded-lg object-cover w-full h-full"
      />
      <span className="absolute top-2 left-0 bg-gray-600 bg-opacity-75 text-white text-xs px-2 py-2 font-semibold">
        {title.split("\\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    </div>
    <h2 className="text-lg font-bold text-[#FFF]">{main}</h2>
    <p className="text-sm text-[#FFF]">{description}</p>
  </div>
);

const PropertyJourneyPage: React.FC = () => {
  return (
    <div className="px-4 py-12 md:px-12 lg:px-24">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-12 text-white">
        Start Your Journey with Wiseten Horizon
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 justify-items-center text-white">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/contact-us" className="bg-green-900 text-white px-6 py-2 rounded-md">Contact Us Now</Link>
      </div>
    </div>
  );
};

export default PropertyJourneyPage;