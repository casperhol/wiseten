import React from "react";
import achieversImg from "../../../public/images/Rectangle 134.jpg";
import innovatorsImg from "../../../public/images/Rectangle 136.jpg";
import visionariesImg from "../../../public/images/Rectangle 138.jpg";
import ImageComponent from "../components/formFields/ImageComponent";


const tiers = [
  {
    title: "Achievers",
    description:
      "Achievers receive a 2% commission on direct referrals, 1% on second level referrals, and a monthly bonus of $200 if the total investments exceed $60,000.",
    image: achieversImg,
  },
  {
    title: "Innovators",
    description:
      "Innovators earn a 4% commission on direct referrals, 1.5% on second level referrals, and a $400 monthly bonus if investments exceed $150,000.",
    image: innovatorsImg,
  },
  {
    title: "Visionaries",
    description:
      "Visionaries enjoy a 5% commission on direct referrals, 2% on second level referrals, and a $600 monthly bonus for total investments exceed $300,000.",
    image: visionariesImg,
  },
];

const ReferralProgram: React.FC = () => {
  return (
    <section className="pb-16 px-6 md:px-12 lg:px-15 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-4 text-black">
        Wiseten Horizon Referral Program
      </h2>
      <p className="text-center text-gray-600 max-w-6xl mx-auto mb-12">
        Wiseten Horizon offers referrals and incentives programs, rewarding
        investors who refer others to their service. You will receive a referral
        link that you can share with your friends, family, business partners and
        colleagues. Every time the referees invest, the referrer receives
        bonuses based on any of these levels:
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-md overflow-hidden h-[300px]"
          >
            {/* Background Border Image */}
            <div className="absolute inset-0 z-0">
              <ImageComponent
                src={tier.image}
                alt={tier.title}
                height={300}
                width={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay to simulate top, left, and bottom border */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-3 bg-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-3 bg-transparent" />
                <div className="absolute top-0 left-0 w-3 h-full bg-transparent" />
                <div className="absolute top-3 left-3 right-0 bottom-3 bg-white z-10 rounded-3xl" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-center items-center">
              <p className="text-sm text-gray-700">{tier.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ReferralProgram;