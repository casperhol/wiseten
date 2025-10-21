"use client";
import { StaticImageData } from "next/image";
import ImageComponent from "./formFields/ImageComponent";
import Image1 from "@/app/assets/img/Image-11-1.jpg";
import Image2 from "@/app/assets/img/Image-1-10.jpg";
import Image3 from "@/app/assets/img/Image-21-1.jpg";
import Image4 from "@/app/assets/img/Image-31-1.jpg";

interface Feature {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
}

const features: Feature[] = [
  {
    title: "Wealth preservation and growth",
    description:
      "Alternative assets like private real estate have historically offered a unique combination of lower volatility than stocks and higher potential returns than bonds. This mixture can anchor your portfolio, smoothing out the wild ups and downs of the public markets.",
    image: Image1,
    alt: "Luxury real estate property",
  },
  {
    title: "Income generation",
    description:
      "For many investors, the ability to create consistent income—via equity ownership in apartment buildings or single-family rentals that earn income through rental payments, for instance—is one of the most attractive aspects of real estate investing.",
    image: Image2,
    alt: "Modern apartment building",
  },
  {
    title: "Superior diversification",
    description:
      "Private market assets are less likely to be affected by market fluctuations, helping reduce risk and improving your long-term financial stability—even during sustained periods of economic uncertainty.",
    image: Image3,
    alt: "Business meeting with diverse team",
  },
  {
    title: "Built for the future",
    description:
      "Our portfolio aims to harness the most powerful long-term macroeconomic drivers of the U.S. economy. These include increased demand for well-located residential assets across the Sunbelt to the explosion of e-commerce–driven industrial spaces.",
    image: Image4,
    alt: "Modern residential development",
  },
];

const AboutWiseten = () => {
  return (
    <section className="bg-teal-100 py-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Why Wiseten Horizon Trust ?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-center px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 px-12 rounded-2xl shadow-md flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 text-start">{feature.description}</p>
            </div>
            <div className="w-full px-10 h-48 relative rounded-md overflow-hidden">
              <ImageComponent
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover rounded-md"
                height={300}
                width={320}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutWiseten;