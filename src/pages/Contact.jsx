import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>Contact US</p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[300px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Kumari party, Lalitpur
            <br />
            Near Vedas College
          </p>
          <p className="text-gray-500">
            Tel: 9810088449 <br />
            Email: roshan.bazgain@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            {" "}
            Careers at PRESCRIPTION
          </p>
          <p className="text-gray-500">Learn more about our team</p>
          <button className="bg-gray-400 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
