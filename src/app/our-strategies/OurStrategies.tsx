import ImageComponent from "@/app/components/formFields/ImageComponent";
import OurstrategiesImg from "../../../public/images/Image-19-1.jpg";

const OurStrategies = () => {
  return (
    <section className="px-6 md:px-20 py-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Designed to harness the market&apos;s potential</h3>
          <p className="text-[#FFF] mb-6 max-w-md">
            By employing a combination of strategies, we aim to build well-rounded, resilient portfolios targeted to
            deliver consistently strong results based on our clients&apos; goals and appetite for risk.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl font-bold">397.</p>
              <p className="text-sm text-gray-500">Project.</p>
            </div>
            <div>
              <p className="text-2xl font-bold">2899.</p>
              <p className="text-sm text-gray-500">Completed Project.</p>
            </div>
            <div>
              <p className="text-2xl font-bold">780+ <span className="text-base">Million.</span></p>
              <p className="text-sm text-gray-500">Total Portfolio Valued.</p>
            </div>
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-gray-500">Years Existence</p>
            </div>
          </div>
        </div>

        <div className="relative border-4 border-green-900 p-1 w-full max-w-xl">
          <ImageComponent
            src={OurstrategiesImg}
            alt="Strategy Presentation"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

    </section>
  );
}

export default OurStrategies;