import React from "react";
import HeroBG from "../assets/contact-hero.svg";
import { IoArrowForwardCircle, IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Hero Section */}
      <div
        className="w-full h-[200px] md:h-[500px] bg-cover bg-center relative flex items-center justify-center px-10 2xl:px-20"
        style={{ backgroundImage: `url(${HeroBG})` }}
      >
        <p
          className="text-white text-3xl md:text-5xl font-bold z-[3] font-nexa uppercase"
          style={{ textShadow: "2px 2px 4px #FAB548" }}
        >
          Contact Us
        </p>
      </div>
      <div className="relative w-full max-w-3xl p-4 -top-20">
        {/* Header */}
        <div className="w-full h-[150px] rounded-t-[30px] bg-[#FFF1DC]/99 text-center flex items-center justify-center font-cocon text-xl md:text-3xl text-[#1E1E1E]/50">
          Let's get your details in order for us
          <br /> to help you
        </div>
        {/* Form Section */}
        <form className="bg-[#FFFCF8] border-l-[1.09px] border-r-[1.09px] border-dashed border-[#3C91BA] p-4 md:p-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="text"
              placeholder="First name"
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
          </div>
          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="email"
              placeholder="Email address"
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
          </div>
          {/* Question Field */}
          <div className="">
            <textarea
              rows="4"
              placeholder="Question"
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {/* Send Button */}
          <div className="mt-6">
            <button className="flex items-center bg-[#FAB548] text-white font-semibold uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#f8a933] transition duration-300 font-cocon">
              Send
              <span>
                <IoArrowForwardCircle className="mx-2" />
              </span>
            </button>
          </div>
        </form>
        <div className="bg-[#FFF1DC]/99 p-4 md:p-6 space-y-6">
          <p className="text-[#1E1E1E]/50 text-2xl md:text-4xl font-cocon">
            Contact Information
          </p>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <a href="#">
              <IoLocationSharp size={20} color="#1E1E1E" />
            </a>
            <span className=" md:text-xl font-regular">
              Norsken House 1 KN 78st, Kigali, RW
            </span>
          </div>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <a href="#" target="_blank">
              <AiOutlineMail size={20} color="#1E1E1E" />
            </a>
            <span className="md:text-xl font-regular">
              skillseedrw@gmail.com.com
            </span>
          </div>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <a href="#">
              <FaPhone size={20} color="#1E1E1E" />
            </a>
            <span className="md:text-xl font-regular">
              +250931089/+2508161453
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
