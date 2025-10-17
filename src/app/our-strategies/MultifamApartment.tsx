import { StaticImageData } from "next/image";
import ImageComponent from "@/app/components/formFields/ImageComponent";
import Image1 from "@/app/assets/img/Image-30-1.jpg"; 
import Image2 from "@/app/assets/img/Image-13-1.jpg"; 
import Image3 from "@/app/assets/img/Image-9-1.jpg";  
import Image4 from "@/app/assets/img/Image-11-1.jpg";
import Image5 from "@/app/assets/img/Image-14-1.jpg"; 
import Image6 from "@/app/assets/img/Image-15-1.jpg"; 

interface RealEstateImage {
  src: string | StaticImageData;
  alt: string;
  colSpan: string;
  rowSpan: string;
}

const MultifamApartment: React.FC = () => {
  const images: RealEstateImage[] = [
    { src: Image1, alt: "Aerial neighborhood view", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: Image2, alt: "Luxury bedroom with city view", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: Image3, alt: "Modern villa with pool at sunset", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: Image4, alt: "Palm-lined luxury mansion", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: Image5, alt: "Sunlit modern bedroom", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: Image6, alt: "Lakefront house with balconies", colSpan: "col-span-2", rowSpan: "row-span-1" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mt-20 text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Multifamily Apartment.</h3>
        <p className="text-lg font-medium mb-4">7311 Residential Units</p>
        <p className="text-sm text-gray-600 max-w-4xl mx-auto">
          A variety of trends have now led to a good share of the population in need of more living space which they can
          rent for some time. Currently, this demand for single-family rentals (SFRs) has helped drive a level of asset
          price appreciation uncommon in the world of real estate. By purchasing these homes in volume directly from
          homebuilders and leasing them up ourselves as stabilized communities, we believe we can get better prices—and
          returns—than buying the &quot;finished product.&quot;
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 auto-rows-[minmax(150px,_auto)]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.colSpan} ${image.rowSpan} relative w-full h-60 md:h-80 lg:h-96 overflow-hidden shadow-lg`}
          >
            <ImageComponent
              src={image.src}
              alt={image.alt}
              height={300}
              width={400}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultifamApartment;