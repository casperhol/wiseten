import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SubFooter: FC = () => {
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-sm">
        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-4 text-md">Quick Links</h2>
          <ul className="space-y-5 text-gray-700">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Property</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="font-semibold mb-4 text-md">Contact Us</h2>
          <p className="text-gray-700 font-medium mb-1 pb-5">Email</p>
          <p className="text-gray-600">info@wiseten.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold mb-4 text-md">Newsletter</h2>
          <form className="flex items-center border border-gray-300 rounded shadow-sm overflow-hidden w-full">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-blue-800 text-white px-4 py-2">
              <span className="font-bold text-lg"><FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" /></span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-6">
        <p className="mb-4 md:mb-0">Copyright © 2023 Wiseten Horizon. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms and Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;