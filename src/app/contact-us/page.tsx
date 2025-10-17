import bgImg from "@/app/assets/img/Image 31 22.jpg";
import TitleHeader from "../components/TitleHeader";
import ContactUsData from "./ContactUsData";

const ContactUs = () => {
  return (
    <div className="w-full">
      <TitleHeader 
        paragraph=""
        backgroundImage={bgImg}
        title="Contact Us"
      />
      <ContactUsData />
    </div>
  );
}

export default ContactUs;
