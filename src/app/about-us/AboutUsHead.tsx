import ImageComponent from "@/app/components/formFields/ImageComponent"; 
import bgImg from "../../../public/images/BG 2 1 (1).jpg"

const AboutUsHead = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white px-4 overflow-hidden py-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageComponent
          src={bgImg}
          alt="About Us Background"
          className="w-full h-[476px] object-cover fill"
          height={476}
          width={600}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 p-8 rounded-2xl max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
      </div>
    </section>
  );
}

export default AboutUsHead;
