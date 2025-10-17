import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

import ImageComponent from "./formFields/ImageComponent";
import brandlogo from "@/app/assets/img/conorp_logo.png";

const Footer: FC = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Logo & Description */}
        <div className="max-w-xs space-x-5">
          <div className="flex items-center gap-2 mb-4">
            <ImageComponent
              src={brandlogo}
              alt="Conorp Horizon Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            conorp horizon assists investors in developing long-term investment plans,
            aligning with their financial goals and minimum risk tolerance
          </p>

          {/* Social Banner */}
          <div className="bg-white w-fit px-4 py-2 rounded-md mt-5 flex gap-4 items-center shadow-md">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700" />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} className="text-black hover:text-gray-700" />
            </a>
            <a href="#" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegram} className="text-blue-400 hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div className="pb-5">
            <h2 className="font-semibold mb-3">Contact Us</h2>
            <ul className="space-y-10 text-gray-300">
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Our Financial Investment</a></li>
              <li><a href="#">Available Properties</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Investor Library</h2>
            <ul className="space-y-10 text-gray-300">
              <li><a href="#">Private wealth</a></li>
              <li><a href="#">Institutional Investors</a></li>
              <li><a href="#">Investment Advisers</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Our Team.</h2>
            <ul className="space-y-10 text-gray-300">
              <li><a href="#">Board of Directors</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Location</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-6" />
      <p className="text-center text-xs text-gray-400">
        Copyright © 2023 Conorp Horizon Trust. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;