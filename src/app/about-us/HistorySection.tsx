import ImageComponent from "../components/formFields/ImageComponent";
import buildingImg from "@/app/assets/img/Image-16-1.jpg";
import mapImg from "@/app/assets/img/image 49 1.jpg";
import buildingImg2 from "@/app/assets/img/Image 17 1.jpg";
import buildingImg3 from "@/app/assets/img/Image-8-1.jpg";
import infoImg from "@/app/assets/img/Info Graphics.jpg";
import { StaticImageData } from "next/image";


interface Grid {
  image: string | StaticImageData;
  alt: string;
}

const grids: Grid[] = [
  {
    image: buildingImg,
    alt: "Building 1",
  },  
  {
    image: buildingImg2,
    alt: "Building 2",
  },
  {
    image: mapImg,
    alt: " Global Map",
  },
  {
    image: buildingImg3,
    alt: "Building 3",
  },
];

const HistorySection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-center text-3xl font-bold mb-8 text-black">HISTORY</h2>

      <div className="md:flex md:items-start md:justify-between gap-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 py-10 pt-30">
          <h3 className="text-xl font-semibold mb-4 text-black">A STORY OF GROWTH & MOMENTUM</h3>
          <p className="text-black mb-6">
            For over 8 years, Wiseten Horizon Trust has strategically developed its footprint across key North
            American, Australia, New Zealand and across Europe commercial and residential real estate markets,
            replicating its trademark approach to financing with discipline, speed, innovation and integrity.
          </p>
          <p className="text-black">
            Today, thousands of investors rely on the Firm&apos;s opportunistic debt and equity strategies to provide
            consistently strong risk-adjusted returns and portfolio diversification.
          </p>
        </div>

        {/* Right Images Section */}

        <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-5 grid-rows-2 gap-2">
            {/* Image 1: smaller, top-left */}
            <div className="col-span-2 row-span-1">
                <ImageComponent
                    src={grids[0].image}
                    alt={grids[0].alt}
                    height={224}
                    width={350}
                    className="w-full h-full lg:h-full object-cover shadow-md"
                />
            </div>

            {/* Image 2: wider, top-right */}
            <div className="col-span-3 row-span-1">
                <ImageComponent
                    src={grids[1].image}
                    alt={grids[1].alt}
                    height={224}
                    width={450}
                    className="w-full h-full lg:h-full object-cover shadow-md"
                />
            </div>

            {/* Image 3: wider, bottom-left */}
            <div className="col-span-3 row-span-1">
                <ImageComponent
                    src={grids[2].image}
                    alt={grids[2].alt}
                    height={224}
                    width={436}
                    className="w-full h-full lg:h-full object-cover shadow-md"
                />
            </div>

            {/* Image 4: smaller, bottom-right */}
            <div className="col-span-2 row-span-1">
                <ImageComponent
                    src={grids[3].image}
                    alt={grids[3].alt}
                    height={224}
                    width={360}
                    className="w-full h-full lg:h-full object-cover shadow-md"
                />
            </div>

            {/* Values Row with Background */}
            <div className="col-span-5 row-span-1 mt-4">
                <ImageComponent
                    src={infoImg}
                    alt="Values Graphic"
                    width={1600}
                    height={400}
                    className="w-full h-auto object-contain mx-auto"
                />
            </div>


        </div>
      </div>
      
    </section>
  );
};

export default HistorySection;