import { StaticImageData } from "next/image";
import ImageComponent from "./formFields/ImageComponent";

interface TitleHeaderProps {
  backgroundImage: string | StaticImageData;
  title: string;
  paragraph: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ backgroundImage, title, paragraph }) => {
  return (
    <div className="relative w-full h-35 md:h-50 lg:h-70 overflow-hidden">
      <ImageComponent
        src={backgroundImage}
        alt="Header Background"
        height={300}
        width={1200}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-opacity-70 flex flex-col items-center justify-center z-10 gap-3">
        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-semibold">{title}</h1>
        <p className="text-sm text-white font-semibold">{paragraph}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
