import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageComponentProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unoptimized?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height, className, unoptimized=false }) => {
  return (
    <div className={`relative ${className || ''}`}>
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized={unoptimized}
      />
    </div>
  );
};

export default ImageComponent;