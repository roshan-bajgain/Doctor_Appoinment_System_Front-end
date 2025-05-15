import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div>
      {/* left side */}
      <div>
        <div>
          <p>Book Appoinemnt</p>
          <p>With 100+ Truested doctor</p>
        </div>
        <button>Create Account</button>
      </div>
      {/* Right side */}
      <div>
        <img src={assets.appointment_img} alt="Appoinment Image" />
      </div>
    </div>
  );
};

export default Banner;
