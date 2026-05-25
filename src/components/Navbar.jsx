import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/wekraft-logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoArrowForwardCircle, IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleNav = () => {
    setNav(!nav);
  };

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#3C91BA" : "#455A64",
    };
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangDropdown(false);
  };

  const languageNames = {
    en: "EN",
    fr: "FR",
    rw: "RW"
  };

  return (
    <div className="w-full h-[70px] sm:h-[70px] md:h-20 lg:h-[70px] xl:h-[75px] 2xl:h-[100px] fixed top-0 left-0 flex items-center justify-between gap-0 md:gap-10 mx-auto p-4 md:px-10 z-20 bg-white shadow-lg font-cocon">
      <Link to="/">
        <img src={Logo} alt="Wekraft" className="w-20" />
      </Link>

      <div className="flex items-center md:hidden gap-2">
        <a
          href="https://parents.wekraft.co/signup"
          target="_blank"
          className="rounded-full bg-[#FAB548] text-white font-primarySemibold flex items-center justify-center text-sm hover:bg-[#FAB548]/[30%] transition duration-200 uppercase p-2"
        >
          {t("nav.signup")}
          <span>
            <IoArrowForwardCircle className="mx-2" />
          </span>
        </a>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} color="#FAB548" />
          ) : (
            <AiOutlineMenu size={30} color="#FAB548" />
          )}
        </div>
      </div>
      
      <nav className="text-[#1E1E1E]/[65%] font-primaryRegular hidden md:flex bg-[#3C91BA]/[5%] rounded-full md:p-2 2xl:p-4">
        <NavLink
          to="/"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-20"
        >
          {t("nav.home")}
        </NavLink>
        <NavLink
          to="/about-us"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          {t("nav.about")}
        </NavLink>
        <NavLink
          to="/our-toolkit"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          {t("nav.toolkit")}
        </NavLink>
        <NavLink
          to="/skillseed"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          {t("nav.skillseed")}
        </NavLink>
        <NavLink
          to="/contact-us"
          style={activeStyle}
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          {t("nav.contact")}
        </NavLink>
        <a
          href="https://outreach.wekraft.co/"
          target="_blank"
          className="p-2 hover:font-primaryBold hover:bg-[#3C91BA]/[50%] transition duration-200"
        >
          {t("nav.outreach")}
        </a>
      </nav>
      
      <div className="hidden md:flex items-center gap-4">
        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center justify-center gap-1 w-10 h-10 rounded-full border border-[#3C91BA]/50 text-[#3C91BA] hover:bg-[#3C91BA]/10 transition duration-200"
          >
            <IoLanguageOutline size={18} />
            <span className="text-xs font-bold">{languageNames[language]}</span>
          </button>
          
          {langDropdown && (
            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-32 flex flex-col z-50">
              <button onClick={() => changeLanguage('en')} className={`px-4 py-2 text-left hover:bg-gray-50 text-sm ${language === 'en' ? 'font-bold text-[#3C91BA]' : 'text-gray-700'}`}>English</button>
              <button onClick={() => changeLanguage('fr')} className={`px-4 py-2 text-left hover:bg-gray-50 text-sm ${language === 'fr' ? 'font-bold text-[#3C91BA]' : 'text-gray-700'}`}>Français</button>
              <button onClick={() => changeLanguage('rw')} className={`px-4 py-2 text-left hover:bg-gray-50 text-sm ${language === 'rw' ? 'font-bold text-[#3C91BA]' : 'text-gray-700'}`}>Kinyarwanda</button>
            </div>
          )}
        </div>

        <a
          href="https://parents.wekraft.co/signup"
          target="_blank"
          className="w-[130px] 2xl:w-[140px] h-10 2xl:h-[55px] rounded-full bg-[#FAB548] text-white font-primarySemibold flex items-center justify-center text-lg hover:bg-[#FAB548]/[30%] transition duration-200 uppercase"
        >
          {t("nav.signup")}
          <span>
            <IoArrowForwardCircle className="mx-2" />
          </span>
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed right-0 top-20 w-[251px] ease-in-out duration-500 bg-[#FFFBF7] z-20 shadow-xl border-l border-gray-200"
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
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/about-us"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/our-toolkit"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            {t("nav.toolkit")}
          </NavLink>
          <NavLink
            to="/skillseed"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            {t("nav.skillseed")}
          </NavLink>

          <NavLink
            to="/contact-us"
            style={activeStyle}
            className="p-2"
            onClick={() => setNav(false)}
          >
            {t("nav.contact")}
          </NavLink>
          <a
            href="https://outreach.wekraft.co/"
            target="_blank"
            className="p-2 hover:font-primaryBold text-[#455A64] hover:bg-[#3C91BA]/[50%] transition duration-200"
          >
            {t("nav.outreach")}
          </a>
          
          {/* Mobile Language Selector */}
          <div className="mt-4 border-t border-gray-200 pt-4 px-2">
            <p className="text-sm text-gray-500 mb-2 font-normal">Language</p>
            <div className="flex gap-2">
              <button onClick={() => { changeLanguage('en'); setNav(false); }} className={`flex-1 py-2 text-center rounded-lg border ${language === 'en' ? 'bg-[#3C91BA]/10 border-[#3C91BA] text-[#3C91BA] font-bold' : 'border-gray-200 text-gray-600'}`}>EN</button>
              <button onClick={() => { changeLanguage('fr'); setNav(false); }} className={`flex-1 py-2 text-center rounded-lg border ${language === 'fr' ? 'bg-[#3C91BA]/10 border-[#3C91BA] text-[#3C91BA] font-bold' : 'border-gray-200 text-gray-600'}`}>FR</button>
              <button onClick={() => { changeLanguage('rw'); setNav(false); }} className={`flex-1 py-2 text-center rounded-lg border ${language === 'rw' ? 'bg-[#3C91BA]/10 border-[#3C91BA] text-[#3C91BA] font-bold' : 'border-gray-200 text-gray-600'}`}>RW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
