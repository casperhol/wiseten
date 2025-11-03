import TitleHeader from "../components/TitleHeader";
import bgImg from "../../../public/images/Image 17 1.jpg";
import DigitalAssetsData from "./DigitalAssetsData";
import DigitalAssetsAdvantage from "./DigitalAssetsAdvantage";
import WisetenMissions from "./WisetenMissions";
import PhilosophyTimeline from "./PhilosophyTimelines";
import GuestLayout from "../components/layouts/guest-layouts";

const DigitalAssets = () => {
    return (
        <GuestLayout>
            <TitleHeader 
                paragraph=""
                backgroundImage={bgImg}
                title="DIGITAL ASSETS"
            />
            <DigitalAssetsData />
            <WisetenMissions />
            <PhilosophyTimeline />
            <DigitalAssetsAdvantage />
        </GuestLayout>
    );
}

export default DigitalAssets;