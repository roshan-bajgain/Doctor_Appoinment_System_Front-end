import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left side */}
      <div className="md:w-1/2 flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appoinement <br /> With Trusted Doctor
        </p>
        <div>
          <img src={assets.group_profiles} alt="Group profile" />
          <p>
            Simply browse through our extensiive list of trusted doctor,
            <br /> schedule your appoinment hassle-free.
          </p>
        </div>
        <a href="">
          Book appoinment <img src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>
      {/* right side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="Header image" />
      </div>
    </div>
  );
};

export default Header;
