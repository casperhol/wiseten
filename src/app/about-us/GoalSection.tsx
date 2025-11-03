import ImageComponent from "../components/formFields/ImageComponent";
import teamImg from "../../../public/images/Image 28 Edited 1.jpg";
import buildingImg2 from "../../../public/images/image 56 1.jpg";
import buildingImg3 from "../../../public/images/image 57 1.jpg";
import buildingImg from "../../../public/images/image 58 1.jpg";
import { StaticImageData } from "next/image";

interface Grid {
  image: string | StaticImageData;
  alt: string;
}

const grids: Grid[] = [
  {
    image: teamImg,
    alt: "Team Meeting",
  },
  {
    image: buildingImg2,
    alt: "Office Side View",
  },
  {
    image: buildingImg3,
    alt: "Corporate Building Front",
  },
  {
    image: buildingImg,
    alt: "Global Presence Map",
  },
];

const GoalsSection: React.FC = () => {
  return (
    <div className="bg-[#003220] text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Text Section */}
      <div className="py-10 px-5 md:px-20">
        <h2 className="text-3xl font-bold mb-6">OUR GOALS</h2>
        <p className="mb-6">
          At Wiseten Horizon Trust, our goal is to inspire and empower our members to reach their financial ambitions. Alternative investments, especially in commercial and residential real estate, have historically been an effective way to grow wealth, but they were often reserved for a small group of people.
        </p>
        <p className="font-semibold mb-4">
          We&apos;re here to change that.
        </p>
        <p className="mb-6">
          Our platform gives you access to a carefully selected marketplace of private market investment opportunities in commercial real estate. Since 2012, we&apos;ve helped tens of thousands of investors discover opportunities that align with their financial goals, with billions invested in over 3100+ projects.
        </p>
        <p>
          But we don&apos;t stop at offering access. We provide advanced tools, research, and insights to help investors confidently explore these exclusive opportunities. We&apos;re dedicated to delivering an exceptional experience for our members every step of the way.
        </p>
      </div>

      {/* Right Images Section */}
      <div className="flex flex-col gap-2 bg-white px-2 h-full">
        {/* Top Full Width Image */}
        <div className="w-full">
          <ImageComponent
            src={grids[0].image}
            alt={grids[0].alt}
            width={1200}
            height={300}
            className="w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Bottom Row of Three Images */}
        <div className="grid grid-cols-3 gap-2 h-full">
          {grids.slice(1).map((grid, index) => (
            <ImageComponent
              key={index}
              src={grid.image}
              alt={grid.alt}
              width={400}
              height={200}
              className="w-full h-full object-cover shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
