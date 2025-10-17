import TitleHeader from "../components/TitleHeader";
import bgImg from "@/app/assets/img/Image 17 1.jpg";
import DigitalAssetsData from "./DigitalAssetsData";
import DigitalAssetsAdvantage from "./DigitalAssetsAdvantage";
import ConorpMissions from "./ConorpMissions";
import PhilosophyTimeline from "./PhilosophyTimelines";

const DigitalAssets = () => {
    return (
        <>
            <div className="w-full">
                <TitleHeader 
                    paragraph=""
                    backgroundImage={bgImg}
                    title="DIGITAL ASSETS"
                />
                <DigitalAssetsData />
                <ConorpMissions />
                <PhilosophyTimeline />
                <DigitalAssetsAdvantage />
                
            </div>  
        </>
    );
}

export default DigitalAssets;