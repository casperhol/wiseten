"use client";
import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import bgImg from "@/app/assets/img/Rectangle 98.jpg";



interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backgroundImage?: string | StaticImageData;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, backgroundImage }) => {
  const bgUrl =
    typeof backgroundImage === "string | StaticImageData"
      ? backgroundImage
      : backgroundImage?.src;

  return (
    <div
      className="relative bg-cover bg-center py-8 px-4 text-white"
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-[#013220] bg-opacity-75"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <nav className="text-sm">
          <ol className="flex space-x-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index !== 0 && <span className="mx-2 text-gray-300 py-1"> {' > '} </span>}
                <Link
                  href={item.href}
                  className={`hover:underline ${
                    index === items.length - 1
                      ? "font-semibold"
                      : "text-gray-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="py-5 text-xl text-center">How it Works</div>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;