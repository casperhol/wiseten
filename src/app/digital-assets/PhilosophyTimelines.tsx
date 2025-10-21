import { FC } from "react";

const values = [
  {
    title: "Trust",
    description:
      "We believe that over the next two decades, blockchain technology will massively impact all sectors of our global economy.",
  },
  {
    title: "Respect",
    description:
      "This technological revolution is creating new opportunities for alpha generation.",
  },
  {
    title: "Excellence",
    description:
      "We apply the same strategies that we have been using for 20+ years across credit & equities to this new asset class, offering true alpha, not simply market beta.",
  },
  {
    title: "Boldness",
    description:
      "We seek to foster lasting partnerships with our clients by prioritizing a culture of transparency and by adding value beyond economic returns.",
  },
];

const PhilosophyTimeline: FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-xl font-semibold mb-8 text-center text-white">
        Wiseten Horizon Investments Philosophy
      </h2>

      <div className="relative border-l-2 border-gray-400 pl-10 space-y-8">
        {values.map((value, index) => (
          <div key={index} className="relative">
            {/* Bullet Dot */}
            <div className="bg-[#FFC116] w-6 h-6 rounded-full translate-y-3 -translate-x-[53px] space-y-5"></div>

            <div>
              <p className="text-sm text-[#FFF] leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyTimeline;
