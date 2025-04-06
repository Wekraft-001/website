import React from "react";
import { motion } from "framer-motion";
import { IoArrowForwardCircle } from "react-icons/io5";
import ToolkitHeroIm from "../assets/toolkit-hero.svg";
import Toolkit1 from "../assets/toolkit-1.svg";
import Toolkit2 from "../assets/toolkit-2.svg";

const Toolkit = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around bg-gradient-to-r from-[#3C91BA]/[100%] via-[#F7CA57]/75 to-[#2A6B8B]/[100%] p-4 md:p-10 gap-10">
        {/* Left Content */}
        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-white font-primaryBold text-2xl md:text-5xl md:leading-[70px] text-center md:text-left uppercase font-nexa"
            style={{ textShadow: "2px 2px 2px #FAB548" }}
          >
            Our Toolkit makes learning unforgettable
          </h1>
          <a
            href="#more"
            className="flex items-center justify-center md:justify-start"
          >
            <motion.button
              className="w-[171px] h-[50px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] rounded-full my-4 uppercase flex items-center justify-center text-sm md:text-base font-cocon cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              See More
              <span>
                <IoArrowForwardCircle className="mx-2" />
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <img src={ToolkitHeroIm} alt="Toolkit Hero" />
        </motion.div>
      </div>
      <div id="#more" className="w-full bg-[#FFFBF7] p-4 md:p-10 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-[600px]">
            <p className="font-medium font-cocon text-xl md:text-4xl text-[#3C91BA] text-center md:text-left">
              Science Toolkits – Turning Classrooms into Discovery Labs
            </p>
            <p className="font-regular font-cocon text-base md:text-xl text-[#1E1E1E]/60 text-justify my-3 md:my-6 leading-8">
              Imagine the thrill of a child mixing solutions and watching colors
              change, or assembling circuits that light up with a touch.
              Wekraft’s Science Toolkits transform learning into an adventure,
              bringing science to life through six hands-on experiments, each
              carefully aligned with the curriculum. With a physical manual for
              step-by-step guidance and a QR code leading to our interactive
              digital platform, students don’t just memorize science—they
              experience it. These toolkits ignite curiosity, deepen
              understanding, and make learning truly unforgettable.
            </p>
          </div>
          <div>
            <img src={Toolkit1} className="md:w-90" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 my-10 py-4">
          <div>
            <img src={Toolkit2} className="md:w-90" />
          </div>
          <div className="md:w-[600px]">
            <p className="font-medium font-cocon text-xl md:text-4xl text-[#3C91BA] text-center md:text-left">
              Career-Aligned Toolkits – Where Learning Meets the Future
            </p>
            <p className="font-regular font-cocon text-base md:text-xl text-[#1E1E1E]/60 text-justify my-3 md:my-6 leading-8">
              What if learning could be a glimpse into the future? Our
              Career-Aligned Toolkits don’t just teach—they inspire. Designed to
              bridge the gap between classroom learning and real-world
              professions, these kits immerse students in practical, hands-on
              experiences that spark career exploration and skill development.
              Whether it's building, designing, or problem-solving, each toolkit
              is a stepping stone toward a future filled with possibilities.
              We’re not just preparing students for exams—we’re preparing them
              for life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolkit;
