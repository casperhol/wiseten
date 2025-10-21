import GuestLayout from "../components/layouts/guest-layouts";
import AboutUsHead from "./AboutUsHead";
import GoalsSection from "./GoalSection";
import HistorySection from "./HistorySection";
import MissionVisionValues from "./MissionVisionValues";
import OurGoals from "./OurGoals";
import ValuesTimeline from "./ValuesTimeline";

const AboutUs = () => {
  return (
    <GuestLayout>
      <AboutUsHead />
      <HistorySection />
      <GoalsSection />
      <OurGoals />
      <MissionVisionValues />
      <ValuesTimeline />
    </GuestLayout>
  );
}

export default AboutUs;
