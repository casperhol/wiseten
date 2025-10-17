import TitleHeader from "../components/TitleHeader";
import bgImg from "@/app/assets/img/image 56 1.jpg";
import ConorpFAQ from "./ConorpFAQ";
import ConorpFinancialProducts from "./ConorpFinancialProduct";
import ReferralProgram from "./ReferralProgram";
import HowitWorks from "./HowitWorks";


const Home = () => {
  return (
    <div className="w-full">
        <TitleHeader 
          paragraph="INVESTING IN TODAY TO BUILD A BETTER TOMORROW"
          backgroundImage={bgImg}
          title="HOW IT WORKS"
        />
        <ConorpFAQ />
        <ConorpFinancialProducts />
        <ReferralProgram />
        <HowitWorks />
    </div>
  );
}

export default Home;