import React from "react";

const features =[
    {
        title: 'Experienced Risk Managers',
        description:
          'Our seasoned portfolio team has experience managing money across several different asset classes in volatile markets. Our fundamental risk management philosophy is to look at how low a security can go, and mitigate downside risk.',
      },
      {
        title: 'Bottom Up Security Analysis',
        description:
          'We believe that tokens are both securities and tech products. Therefore, our thesis-driven security-by-security analysis includes a thorough technical vetting that evaluates the strength of a protocol and underlying infrastructure.',
      },
      {
        title: 'Global Macro Strategy',
        description:
          'Our funds analyze global economic events and asset classes in combination with crypto-specific events. We also look at emerging markets and trends in the technology sector to identify areas of growth.',
      },
      {
        title: 'Institutional Caliber Operations',
        description:
          'We partner with leading service providers to ensure that we have the procedures in place to protect and secure investors’ cryptocurrency assets. We adhere to the strictest security, custodial, and regulatory standards.',
      },
];

const DigitalAssetsAdvantage = () =>{
    return (
        <section className="bg-white py-10 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
                    Wiseten Horizon Digital Asset Advantage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <div
                    key={index}
                    className="bg-[#F5F5F5] rounded-2xl p-6 shadow-sm text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-base">
                            {feature.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default DigitalAssetsAdvantage;