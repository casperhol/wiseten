"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactUsData = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row px-12 py-12">
      {/* Left Side - Contact Info */}
      <div className="bg-[#003220] text-white w-full md:w-2/3 p-10">
        <h2 className="text-xl font-semibold mb-6">Our Contact Information</h2>
        <p className="mb-6 text-sm">
          Need to talk to someone? Kindly reach out to us via any of our communication channels with the details below:
        </p> 

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-[#FFC116] text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-sm">090 765 585 75</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#FFC116] text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">E-mail Address</p>
              <p className="text-sm">conorpenhorizon@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#FFC116] text-white p-4 rounded-full">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm">No 4 sample Street Lagos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-2/2 bg-[#F5F5F5] p-10">
        <h2 className="text-lg font-semibold mb-6">We want to hear from you </h2>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="E-mail Address"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-40 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-green-950 text-white px-6 py-3 rounded shadow hover:bg-green-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsData;
