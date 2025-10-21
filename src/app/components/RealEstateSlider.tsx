"use client";
import { FC, useState } from "react";
import ImageComponent from "./formFields/ImageComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "@/app/assets/img/Image-36-1.png";
import Image2 from "@/app/assets/img/Image-36-2.jpg";
import Link from "next/link";

const slides = [
  {
    image: Image1,
    title: "",
    heading:
      "Invest in real estate online,\n without the hassle or \n expense of managing \n property",
    description: `Wiseten Horizon Trust simplifies residential real estate \n investing through the use of cutting-edge technology \n giving Members access to residential real estate \n opportunities with the potential to generate income.`,
  },
  {
    image: Image2,
    title: "",
    heading: "On-Ramps And  Up- \n Ramps To Wealth \n Building",
    description: `Add flexibility, diversification, and growth to your \n investment portfolio. Check out residential real estate \n investment offerings with returns up to 13%.\n Consider diversifying your portfolio with real estate \n investments that match your risk profile.`,
  },
];

const RealEstateSlider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative bg-[#013220] text-white px-5 py-16 md:px-10 lg:py-28 overflow-hidden transition-all duration-500 ease-in-out">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 opacity-10 z-0 transition-opacity duration-500">
        <ImageComponent
          src={currentSlide.image}
          alt="Real Estate Background"
          className="w-full h-full object-cover"
          height={2000}
          width={1500}
        />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line mb-6">
          {currentSlide.heading}
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line mb-8">
          {currentSlide.description}
        </p>

        <Link href="/about-us" className="bg-white text-[#013220] px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
          Learn More
        </Link>
      </div>

      {/* Arrow Buttons */}
      
      {/* Left Arrow Button */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrevSlide}
          className="absolute left-8 bottom-8 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </button>
      )}

      {/* Right Arrow Button */}
      {currentIndex < slides.length - 1 && (
        <button
          onClick={handleNextSlide}
          className="absolute right-8 bottom-8 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      )}

    </section>
  );
};

export default RealEstateSlider;