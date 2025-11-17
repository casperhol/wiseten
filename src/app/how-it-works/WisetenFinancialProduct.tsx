import ImageComponent from "../components/formFields/ImageComponent";
import apartmentImg from "../../../public/images/Image 29 1.jpg";
import bottomImg from "../../../public/images/Image 17 1.jpg";
import piechartImg from "../../../public/images/pie chart 2 1.jpg";


const WisetenFinancialProducts = () => {
  return (
    <section className="bg-white py-2 px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-5 items-start">
        {/* Left Text Content */}
        <div className="justify-center pt-20">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Financial Products offered by Wiseten Horizon
          </h2>
          <p className="text-gray-600 mb-6">
            We offer investors four different financial products to choose from in
            which each of this products shows certain minimum amounts of capital which
            includes:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-black">
              <span className="w-4 h-4 bg-cyan-700 rounded-full mr-3"></span>
              <span>Public Traded (Retail/Institutional Asset)</span>
            </li>
            <li className="flex items-center text-black">
              <span className="w-4 h-4 bg-pink-600 rounded-full mr-3"></span>
              <span>ETF Mutual Funds (Stock Brokerage Assets)</span>
            </li>
            <li className="flex items-center text-black">
              <span className="w-4 h-4 bg-blue-400 rounded-full mr-3"></span>
              <span>Private Traded (Private Placement Assets)</span>
            </li>
            <li className="flex items-center text-black">
              <span className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></span>
              <span>Derivatives Funds (Sophisticated/Institutional Assets)</span>
            </li>
          </ul>
        </div>

        {/* Right Images Section with Overlapping Pie Chart */}
        <div className="relative">
            <div className="grid grid-rows-2 gap-2">          
                <ImageComponent
                    src={apartmentImg}
                    alt="Apartment buildings"
                    height={300}
                    width={600}
                    className="w-full h-80"
                />
                <ImageComponent
                    src={bottomImg}
                    alt="Warehouse building"
                    height={300}
                    width={600}
                    className="w-full h-46"
                />
            </div>
            <div className="absolute -left-25 top-65 z-10">
                <ImageComponent
                    src={piechartImg}
                    alt="Pie chart"
                    width={160}
                    height={160}
                    className="object-cover rounded-tr-3xl w-full"
                />
            </div>
        </div>
    
      </div>
    </section>
  );
};

export default WisetenFinancialProducts;