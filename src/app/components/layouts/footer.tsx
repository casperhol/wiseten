import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faXTwitter, faTelegram} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../../public/images/gold_white.png"
import ImageComponent from "@/app/components/formFields/ImageComponent";


const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Logo & Description */}
        <div className="max-w-xs space-x-5">
          <div className="flex items-center gap-2 mb-4">
            <ImageComponent
              src={logo}
              alt="Wiseten Horizon Logo"
              width={200}
              height={140}
              className=""
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            wiseten horizon assists investors in developing long-term investment plans,
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
            <h2 className="font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-10 text-gray-300">
              <li><a href="/digital-assets">Digital Assets</a></li>
              <li><a href="/our-strategies">Our Strategies</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
             
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
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="#">Location</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-6" />
      <p className="text-center text-xs text-gray-400">
        Copyright © 2023 Wiseten Horizon Trust. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;