import RealEstateGrid from "./BuildforRent";
import MultifamApartment from "./MultifamApartment";
import OurStrategies from "./OurStrategies";
import TitleHeader from "../components/TitleHeader";
import bgImg from "@/app/assets/img/Image 31 2.jpg";

const Strategies = () => {
    return (
        <>
            <div className="w-full">
                <TitleHeader 
                    paragraph=""
                    backgroundImage={bgImg}
                    title="Our Strategies"
                />
                <OurStrategies />
                <RealEstateGrid />                
                <MultifamApartment />
            </div>  
        </>
    );
}

export default Strategies;