'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTelegram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../../public/images/gold_white.png"
import sendIcon from "../../../../public/images/send.svg"
import ImageComponent from "@/app/components/formFields/ImageComponent";
import Link from "next/link";
import { SetStateAction, useState } from "react";


const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-green-950 text-white py-10 px-6 md:px-20">
      <div className="flex justify-between gap-10 mb-10">
        
        <div className="grow space-x-5">
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
            wiseten horizon assists investors in developing <br/> long-term investment plans,
            aligning with their <br/> financial goals and minimum risk tolerance
          </p>

          {/* Social Banner */}
          <div className="bg-white w-fit px-4 py-2 rounded-md mt-5 flex gap-4 items-center shadow-md">
            <Link href="https://www.facebook.com/share/18cyy7YGuy/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 hover:text-blue-800" />
            </Link>
            <Link href="https://www.instagram.com/wiseten_horizon?igsh=MWZxam9hMGlyYTVyMQ%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-black hover:text-gray-700" />
            </Link>
            <Link href="#" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegram} className="text-blue-400 hover:text-blue-600" />
            </Link>
          </div>
        </div>

        <div className="grow">
          <div className="md:flex gap-6 text-sm">
            <div className="pb-5">
              <h2 className="font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-5 text-gray-300">
                <li><a href="/digital-assets">Digital Assets</a></li>
                <li><a href="/our-strategies">Our Strategies</a></li>
                <li><a href="/how-it-works">How It Works</a></li>
              </ul>
            </div>

            <div className="grow"></div>

            <div className="grow">
              <form action="">
                      <div className="form-group">
                          <div className="py-2 text-[12px] md:text-[13px]">
                              <h2 className="font-semibold mb-3"> Subscribe to our newsletter.</h2>
                          </div>
                          <div className="py-2 flex">
                              <div className="grow">
                                  <input 
                                      type="text" 
                                      name="email" 
                                      value={email}
                                      className="w-full border py-2"
                                      onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                                  />
                              </div>
                              <div className="bg-green-900 flex-none px-4 pt-2">
                                <button>
                                  <ImageComponent src={sendIcon} className="w-[27px]" alt="send icon" width={200} height={140}/>
                                </button>
                              </div>
                          </div>
                      </div>
              </form>
            </div>
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