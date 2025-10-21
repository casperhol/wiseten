import RealEstateGrid from "./BuildforRent";
import MultifamApartment from "./MultifamApartment";
import OurStrategies from "./OurStrategies";
import TitleHeader from "../components/TitleHeader";
import bgImg from "@/app/assets/img/Image 31 2.jpg";
import GuestLayout from "../components/layouts/guest-layouts";

const Strategies = () => {
    return (
        <GuestLayout>
            <TitleHeader 
                paragraph=""
                backgroundImage={bgImg}
                title="Our Strategies"
            />
            <OurStrategies />
            <RealEstateGrid />                
            <MultifamApartment />
        </GuestLayout>
    );
}

export default Strategies;