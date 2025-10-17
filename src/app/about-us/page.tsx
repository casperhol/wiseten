import AboutUsHead from "./AboutUsHead";
import GoalsSection from "./GoalSection";
import HistorySection from "./HistorySection";
import MissionVisionValues from "./MissionVisionValues";
import OurGoals from "./OurGoals";
import ValuesTimeline from "./ValuesTimeline";

const AboutUs = () => {
  return (
    <div className="w-full">
      <AboutUsHead />
      <HistorySection />
      <GoalsSection />
      <OurGoals />
      <MissionVisionValues />
      <ValuesTimeline />
    </div>
  );
}

export default AboutUs;
