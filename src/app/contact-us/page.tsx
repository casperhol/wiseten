import bgImg from "@/app/assets/img/Image 31 22.jpg";
import TitleHeader from "../components/TitleHeader";
import ContactUsData from "./ContactUsData";
import GuestLayout from "../components/layouts/guest-layouts";

const ContactUs = () => {
  return (
    <GuestLayout>
      <TitleHeader 
        paragraph=""
        backgroundImage={bgImg}
        title="Contact Us"
      />
      <ContactUsData />
    </GuestLayout>
  );
}

export default ContactUs;
