"use client";
import { useState } from 'react';
import ImageComponent from '../components/formFields/ImageComponent';
import mainImg from "../../../public/images/Image-11-1.jpg";
import topviewImg from "../../../public/images/Image-8-1.jpg";
import interiorviewImg from "../../../public/images/Image-13-1.jpg";
import housepoolImg from "../../../public/images/Image-5-1.jpg";



const faqs = [
  {
    question: 'Who is Wiseten Horizon?',
    answer: 'At Wiseten Horizon Trust, our goal is to inspire and empower our members to reach their financial ambitions. Alternative investments, especially in commercial and residential real estate, have historically been an effective way to grow wealth. Digital assets management and consulting firm that offers wide range of financial services.'
  },
  {
    question: 'Why Should I invest in Wiseten Horizon?',
    answer: 'Investing in Wiseten Horizon gives you access to diversified portfolios in alternative investments, which are historically resilient and profitable.'
  },
  {
    question: 'How does Wiseten Horizon manage its investors funds?',
    answer: 'Funds are professionally managed by financial experts using a mix of real estate, digital assets, and other alternative investments.'
  },
  {
    question: 'Is Wiseten Horizon registered firm?',
    answer: 'Yes, Wiseten Horizon is a registered and regulated financial institution adhering to all legal and compliance standards.'
  },
  {
    question: 'What kind of financial advisory services does Wiseten Horizon provide?',
    answer: 'We provide personalized financial planning, wealth management, and retirement planning solutions.'
  },
  {
    question: 'Does Wiseten Horizon offer investment planning?',
    answer: 'Yes, we offer custom-tailored investment plans to help meet your financial goals.'
  },
  {
    question: 'How does Wiseten Horizon approach risk management?',
    answer: 'Risk is mitigated through diversification, regular reviews, and proactive strategies aligned with market trends.'
  },
  {
    question: 'Does Wiseten Horizon offer investors education?',
    answer: 'Absolutely. We provide workshops, webinars, and resource materials to help you become a more informed investor.'
  }
];

const WisetenFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-black px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3">
            <ImageComponent
              src={mainImg}
              alt="Main Property"
              width={800}
              height={600}
              className="w-full h-auto "
            />
          </div>
          <ImageComponent
            src={topviewImg}
            alt="Top View"
            width={400}
            height={300}
            className="w-full h-auto "
          />
          <ImageComponent
            src={interiorviewImg}
            alt="Interior View"
            width={400}
            height={300}
            className="w-full h-auto "
          />
          <ImageComponent
            src={housepoolImg}
            alt="Pool View"
            width={400}
            height={300}
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default WisetenFAQ;
