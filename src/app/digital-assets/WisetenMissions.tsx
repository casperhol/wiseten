import React from "react";

const WisetenMissions = () => {
  const items = [
    {
      title: "Research & Development",
      description:
        "Drive responsible innovation by integrating blockchain technology into financial services solutions",
      color: "bg-[#FFBB01]",
    },
    {
      title: "Co-Innovation",
      description:
        "Collaborate with market leaders to break through traditional barriers and create new tokenized products",
      color: "bg-[#C4FAE7]",
    },
    {
      title: "Collective Resourcing",
      description:
        "Connect financiers, innovators, service providers, and evangelists to help propel the digital asset ecosystem forward",
      color: "bg-[#8F7EFF]",
    },
    {
      title: "Product Consulting",
      description:
        "Guide firms through the process of building tokenized product, from ideation to market launch",
      color: "bg-[#38A5BD]",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-900 p-8">
        <div className="bg-[#003220] text-white px-6 py-10 flex items-center justify-center md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Our Unique <br /> Mission <br /> Approach
            </h2>
        </div>
        <div className="relative flex flex-col gap-6 md:w-2/3 p-4 py-10">
            {items.map((item, idx) => (
            <div
                key={idx}
                className="-translate-x-[50px] md:-translate-x-[100px] flex items-start bg-[#F5F5F5] rounded-tr-[50px] rounded-br-[50px] shadow-sm"
            >
                <div className={`${item.color} w-30 h-30 rounded-tr-[50px] rounded-br-[50px] mr-6`}></div>

                <div className="py-6 justify-center p-5 text-[#000000]">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default WisetenMissions;
