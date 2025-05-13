import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/wekraft-logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoArrowForwardCircle } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#3C91BA" : "#455A64",
    };
  };

  return (
    <div className="w-full h-[70px] sm:h-[70px] md:h-20 lg:h-[70px] xl:h-[75px] 2xl:h-[100px] fixed top-0 left-0 flex items-center justify-between gap-0 md:gap-10 mx-auto p-4 md:px-10 z-20 bg-white shadow-lg font-cocon">
      <Link to="/">
        <img src={Logo} alt="Wekraft" className="w-20" />
      </Link>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfvNPv7b8PHXlDfL1yX4sKqAP71XAEGzssEwOSv7esMAycscA/viewform"
        target="_blank"
        className=" rounded-full bg-[#FAB548] text-white font-primarySemibold flex items-center justify-center text-sm hover:bg-[#FAB548]/[30%] transition duration-200 uppercase md:hidden p-2"
      >
        Sign up
        <span>
          <IoArrowForwardCircle className="mx-2" />
        </span>
      </a>
      <nav className="text-[#1E1E1E]/[65%] font-primaryRegular hidden md:flex bg-[#3C91BA]/[5%] rounded-full md:p-2 2xl:p-4">
        <NavLink
          to="/"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-20"
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          About Us
        </NavLink>
        <NavLink
          to="/our-toolkit"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          Toolkit
        </NavLink>
        <NavLink
          to="/skillseed"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          Skillseed
        </NavLink>
        <NavLink
          to="/contact-us"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          Contact Us
        </NavLink>
      </nav>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfvNPv7b8PHXlDfL1yX4sKqAP71XAEGzssEwOSv7esMAycscA/viewform"
        target="_blank"
        className="hidden md:w-[130px] 2xl:w-[140px] md:h-10 2xl:h-[55px] rounded-full bg-[#FAB548] text-white font-primarySemibold md:flex items-center justify-center text-lg hover:bg-[#FAB548]/[30%] transition duration-200 uppercase"
      >
        Sign Up
        <span>
          <IoArrowForwardCircle className="mx-2" />
        </span>
      </a>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} color="#FAB548" />
        ) : (
          <AiOutlineMenu size={30} color="#FAB548" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed right-0 top-20 w-[251px] ease-in-out duration-500 bg-[#FFFBF7] z-20"
            : "fixed right-[-100%]"
        }
      >
        <div className="grid grid-cols-1 gap-3 px-4 font-primarySemibold py-6">
          <NavLink
            to="/"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/our-toolkit"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Toolkit
          </NavLink>
          <NavLink
            to="/skillseed"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Skillseed
          </NavLink>

          <NavLink
            to="/contact-us"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            Contact Us
          </NavLink>
          {/* <div className="border-b border-[#565656] w-full"></div> */}
          {/* <NavLink
            to="/contact-us"
            style={activeStyleMobile}
            className="p-2 font-primaryBold text-[#455A64] text-xl"
            onClick={() => setNav(false)}
          >
            Contact
          </NavLink>
          <div className="flex items-center font-primaryMedium">
            <MdOutlineLocalPhone size={20} />
            <span>+250 795 047 509</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
