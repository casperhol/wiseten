import RealEstateSlider from "./components/RealEstateSlider";
import RealEstateSection from "./components/RealEstateSection";
import Affiliates from "./components/Affiliates";
import AboutConorp from "./components/AboutConorp";
import Footer from "./components/Footer";
import PropertyJourneyPage from "./components/PropertyJourneyPage";

const Home = () => {
  return (
    <div className="w-full">
      <RealEstateSlider />
      <RealEstateSection />
      <Affiliates />
      <AboutConorp />
      <PropertyJourneyPage />
      <Footer />
    </div>
  );
}

export default Home;
