import ImageComponent from "./formFields/ImageComponent";
import sectionImg from "@/app/assets/img/Image-11-0.jpg";

const RealEstateSection = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-4 py-10 md:px-5 lg:px-20">
        <div className="flex flex-col justify-center w-full px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 py-4">
            Invest in real estate online, without the hassle or expense of managing property
          </h2>
          <p className="text-gray-700 text-sm sm:text-base pb-4">
            Conorp Horizon Trust simplifies residential real estate investing through the use of
            cutting-edge technology giving Members access to residential real estate opportunities
            with the potential to generate income.
          </p>
        </div>
        <div className="flex justify-center items-center w-full px-4 md:px-6">
          <ImageComponent 
            src={sectionImg} 
            alt="Real estate investing"
            width={500} 
            height={300} 
            className="rounded-md shadow-lg w-full max-w-md h-auto"
          />
        </div>
      </div>

      <div className="bg-green-900 py-12 px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        <div className="bg-white text-green-900 py-6 rounded-2xl shadow-md">
          <p className="text-3xl font-bold">397.</p>
          <p className="mt-1 text-sm sm:text-base">Project.</p>
        </div>
        <div className="bg-white text-green-900 py-6 rounded-2xl shadow-md">
          <p className="text-3xl font-bold">2899</p>
          <p className="mt-1 text-sm sm:text-base">Project done.</p>
        </div>
        <div className="bg-white text-green-900 py-6 rounded-2xl shadow-md">
          <p className="text-3xl font-bold">
            780+ <span className="text-base font-normal">Billion.</span>
          </p>
          <p className="mt-1 text-sm sm:text-base">Projects done.</p>
        </div>
        <div className="bg-white text-green-900 py-6 rounded-2xl shadow-md">
          <p className="text-3xl font-bold">8+</p>
          <p className="mt-1 text-sm sm:text-base">Experience.</p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;