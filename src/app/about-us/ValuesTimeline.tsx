import { FC } from "react";

const values = [
  {
    title: "Trust",
    description:
      "We build Trust through the integrity of our people, our reputation for transparency, and by doing what we say with a focus on rigour, results and risk management.",
  },
  {
    title: "Respect",
    description:
      "We gain Respect through the impact we create inside and outside the Firm, delivering exemplary stakeholder experiences. We build respect through a collaborative and diverse environment in which our employees can excel.",
  },
  {
    title: "Excellence",
    description:
      "We pursue Excellence for our employees, investors, partners and borrowers. Everyone who works with us is accountable for our clients’ success.",
  },
  {
    title: "Boldness",
    description:
      "Our bold goals and winning outcomes result from our ability to create unique offerings based on our unwavering Zest, discipline and innovative entrepreneurialism.",
  },
];

const ValuesTimeline: FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-xl font-semibold mb-8 text-center text-gray-900">
        Our culture drives our success. Our values are the shared beliefs we bring to our professional and personal conduct every day. They are foundational to the strength of our business.
      </h2>

      <div className="relative border-l-3 border-gray-400 pl-10 space-y-10">
        {values.map((value, index) => (
          <div key={index} className="relative">
            <div className="bg-[#FFC116] w-6 h-6 rounded-full translate-y-3 -translate-x-[53px] justify-center"></div>

            <div>
              <p className="text-sm text-gray-800 leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesTimeline;