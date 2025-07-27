import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT US</p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[300px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to our Doctor Appointment System – your one-stop platform
            for easy, fast, and secure medical bookings. We believe healthcare
            should be accessible and convenient for everyone. With our system,
            patients can easily book appointments with their preferred doctors,
            while doctors can manage, approve, or reject appointments based on
            their availability. Our platform bridges the gap between patients
            and healthcare professionals, ensuring better communication, reduced
            waiting times, and improved overall healthcare experiences.
          </p>
          <p className="text-gray-800 text-xl">Our Vision</p>
          <p>
            To revolutionize the healthcare appointment system by making it
            digital, reliable, and user-friendly. We aim to empower patients
            with easy access to care while providing doctors with smart tools to
            manage their schedules efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
