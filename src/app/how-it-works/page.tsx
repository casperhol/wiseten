import TitleHeader from "../components/TitleHeader";
import bgImg from "../../../public/images/image 56 1.jpg";
import WisetenFAQ from "./WisetenFAQ";
import WisetenFinancialProducts from "./WisetenFinancialProduct";
import ReferralProgram from "./ReferralProgram";
import HowitWorks from "./HowitWorks";
import GuestLayout from "../components/layouts/guest-layouts";


const Home = () => {
  return (
    <GuestLayout>
        <TitleHeader 
          paragraph="INVESTING IN TODAY TO BUILD A BETTER TOMORROW"
          backgroundImage={bgImg}
          title="HOW IT WORKS"
        />
        <WisetenFAQ />
        <WisetenFinancialProducts />
        <ReferralProgram />
        <HowitWorks />
    </GuestLayout>
  );
}

export default Home;