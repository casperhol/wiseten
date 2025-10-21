import RealEstateSlider from "./components/RealEstateSlider";
import RealEstateSection from "./components/RealEstateSection";
import Affiliates from "./components/Affiliates";
import AboutWiseten from "./components/AboutWiseten";
import PropertyJourneyPage from "./components/PropertyJourneyPage";
import GuestLayout from "./components/layouts/guest-layouts";

const Home = () => {
  return (
    <GuestLayout>
      <RealEstateSlider />
      <RealEstateSection />
      <Affiliates />
      <AboutWiseten />
      <PropertyJourneyPage />
    </GuestLayout>
  );
}

export default Home;
