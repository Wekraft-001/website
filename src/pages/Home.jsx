import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import WhoWeAreBG from "../assets/whoWeAreBg.svg";
import WhoWeAreHome from "../assets/whoWeAreHome.svg";
import WhatWeOffer from "../assets/whatWeOfferBg.svg";
import WekraftBg from "../assets/wekraftBG.svg";
import WekraftImage from "../assets/WekraftImage.svg";
import UniqueApproach from "../assets/uniqueApproach.svg";
import Icon1 from "../assets/calendar.svg";
import Icon2 from "../assets/expand.svg";
import Icon3 from "../assets/partners.svg";
import Icon4 from "../assets/time.svg";
import Icon5 from "../assets/children.svg";
import Arrow from "../assets/arrow.svg";
import Star from "../assets/shooting-star.svg";
import Star2 from "../assets/rising-star.svg";
import Testimonials from "../components/Testimonial";
import Jasiri from "../assets/partners/Jasiri-logo.svg";
import Hindsight from "../assets/partners/hindsight-Ventures.svg";
import Norsken from "../assets/partners/norsken-logo.svg";
import Linklater from "../assets/partners/Linklaters-logo.svg";
import Concordia from "../assets/partners/concordia.svg";
import Grow from "../assets/partners/Grow-Movement-logo.svg";
import Startups from "../assets/partners/250-startups-logo.svg";
import CMU from "../assets/partners/cmu-africa-logo.svg";
import AA from "../assets/partners/Accelerate-Africa-logo.svg";
import BPN from "../assets/partners/BPN-logo.svg";

const Home = () => {
  const stats = [
    {
      icon: Icon1,
      text: "Created 26 weeks of content for our immersive learning toolkit.",
    },
    {
      icon: Icon2,
      text: "Expanding operations to Kenya, scaling our impact beyond borders.",
    },
    {
      icon: Icon3,
      text: "Partnered with 8+ schools, women's groups, creating employment opportunities.",
    },
    {
      icon: Icon4,
      text: "5 hours of engagement time per week",
    },
    {
      icon: Icon5,
      text: "Impacted over 500 children",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[400px] md:h-[779px] relative bg-cover md:px-10 2xl:px-20 md:flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://wekraftdocs.blob.core.windows.net/videos/Wekraft.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/50 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-20 md:pt-0 md:my-4">
          <p
            className="text-3xl md:text-6xl font-primarySemibold text-gray-200 md:w-[777px] mb-2 text-center uppercase font-nexa"
            style={{ textShadow: "2px 2px 2px #FAB548" }}
          >
            we empower minds <br /> and inspire futures
          </p>
          <p className="md:text-2xl font-primaryRegular text-gray-100 text-center font-cocon">
            Every child deserves to discover who they are, what they love,
            <br /> and how they can thrive in tomorrow's world.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvNPv7b8PHXlDfL1yX4sKqAP71XAEGzssEwOSv7esMAycscA/viewform"
            target="_blank"
          >
            <button
              // onClick={() => handleBecomeMemberClick()}
              className="w-[202px] h-[48px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] rounded-full my-4 uppercase flex items-center justify-center text-sm md:text-base font-cocon cursor-pointer"
            >
              Sign up with us{" "}
              <span>
                <IoArrowForwardCircle className="mx-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
      {/* Mission & Vision */}
      <div className="w-full flex flex-col items-center justify-center py-10 bg-[#FFFBF7]">
        <div className="text-[#1E1E1E]/50 text-xl md:text-5xl font-nexa">
          Our Mission and Vision
        </div>
        <div className="relative flex flex-col md:flex-row items-center gap-4 my-10 md:my-20">
          {/* Mission Card */}
          <div className="relative p-6 md:p-8 rounded-2xl shadow-xl shadow-[#FAB548]/25 border border-dashed border-[#3C91BA] w-72 md:w-[300px] font-cocon text-[#1E1E1E]/65">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-xs md:text-sm">
              To spark confidence, creativity, and curiosity in every child by
              equipping them with tools, exposure, and mentorship that connect
              learning to life.
            </p>
            {/* Decorative Bubble */}
            <div className="absolute top-[160px] md:top-[210px] -left-10 md:-left-20 bg-[#3C91BA] rounded-full w-24 h-24"></div>
            {/* <div className="absolute -bottom-6 -left-2 bg-blue-400 rounded-full w-8 h-8"></div> */}
          </div>

          {/* Decorative Arrow */}
          {/* <div className="hidden md:block text-orange-400 text-4xl">➥</div> */}
          <div>
            <img src={Arrow} />
          </div>

          {/* Vision Card */}
          <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-[#FAB548]/25 border border-dashed border-[#3C91BA] w-72 md:w-[300px] font-cocon text-[#1E1E1E]/65 rotate-">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-xs md:text-sm">
              A future where every child across Africa is prepared to dream
              boldly, think critically, and grow into innovative, compassionate
              leaders with parents, schools, and communities walking alongside
              them.
            </p>
            {/* Decorative Bubble */}
            <div className="absolute -top-[110px] md:-top-[100px] -right-10 md:-right-20 bg-yellow-300 rounded-full w-24 h-24"></div>
            {/* <div className="absolute -top-6 -right-2 bg-yellow-400 rounded-full w-8 h-8"></div> */}
          </div>
        </div>
      </div>
      {/* Who We Are */}
      <div
        className="w-full h-full relative bg-cover md:flex items-center"
        style={{
          backgroundImage: `url(${WhoWeAreBG})`,
        }}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-[3] gap-4 md:gap-10 px-5 pt-20 pb-10 md:p-20 md:m-20">
          <div>
            <img src={WhoWeAreHome} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start gap-4">
            <div className="my-4 text-white font-nexa text-xl md:text-5xl">
              Who We Are
            </div>
            <div className="w-full md:w-[600px] bg-[#FFFFFF]/[85%] rounded-4xl p-6 font-cocon text-[#1E1E1E]/[60%] text-sm md:text-xl">
              WeKraft Limited is a pioneering EdTech company based in Rwanda,
              dedicated to bridging the gap between classroom learning and
              real-world opportunities.
              <br />
              <br />
              From hands-on toolkits to our AI-powered SkillSeed platform, we
              make learning relevant, practical, and life-shaping.
            </div>
            <Link
              to="/about-us"
              className="w-full flex items-center md:items-end justify-center md:justify-end"
            >
              <div className="w-[100px] md:w-[150px] h-10 md:h-[68px] text-center border border-white rounded-full text-white md:text-xl uppercase font-cocon flex items-center justify-center">
                {" "}
                See More
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* What We Offer */}
      <div
        className="w-full h-full relative bg-cover bg-repeat flex flex-col items-center justify-center px-4 pb-10 md:p-10"
        style={{
          backgroundImage: `url(${WhatWeOffer})`,
        }}
      >
        <div className="my-4 text-white font-nexa text-2xl md:text-5xl">
          What We Offer
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 py-5 md:py-10">
          <div className="w-full md:w-[400px] h-[148px] md:h-[250px] rounded-4xl flex flex-col items-center justify-center gap-5 bg-[#FAB548] border-2 border-dashed border-white">
            <FaLightbulb
              size={50}
              color="#E18C03"
              className="hidden md:block"
            />
            <FaLightbulb
              size={30}
              color="#E18C03"
              className="block md:hidden"
            />
            <div className="text-center font-cocon text-white text-xl md:text-4xl">
              Immersive
              <br />
              Learning
            </div>
          </div>
          <div className="w-full md:w-[400px] h-[148px] md:h-[250px] rounded-4xl flex flex-col items-center justify-center gap-5 bg-white border-2 border-dashed border-[#3C91BA]">
            <FaLightbulb
              size={50}
              color="#3C91BA"
              className="hidden md:block"
            />
            <FaLightbulb
              size={30}
              color="#3C91BA"
              className="block md:hidden"
            />
            <div className="text-center font-cocon text-[#FAB548] text-xl md:text-4xl">
              Tailored Learning <br />
              kit
            </div>
          </div>
          <div className="w-full md:w-[400px] h-[148px] md:h-[250px] rounded-4xl flex flex-col items-center justify-center gap-5 bg-white border-2 border-dashed border-[#3C91BA]">
            <FaLightbulb
              size={50}
              color="#FAB548"
              className="hidden md:block"
            />
            <FaLightbulb
              size={30}
              color="#FAB548"
              className="block md:hidden"
            />
            <div className="text-center font-cocon text-[#3C91BA] text-xl md:text-4xl">
              Ready Skills <br />
              Inspiration
            </div>
          </div>
        </div>
      </div>
      {/* How We Do It */}
      <div
        className="w-full h-full flex flex-col items-center justify-center p-4 md:p-10 bg-cover"
        style={{ backgroundImage: `url(${WekraftBg})` }}
      >
        {/* Main container with fixed dimensions matching Figma */}
        <div className="relative w-full max-w-[1035.87px] h-[718.71px] md:flex flex-col items-center justify-center hidden">
          {/* Central image container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 m-8">
            {/* Central image with text overlay */}
            <div className="relative w-full p-6">
              <img
                src={WekraftImage}
                alt="Wekraft Ltd"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center md:text-[26px] text-[#3C91BA] font-nexa">
                Wekraft Ltd
              </div>
            </div>
            {/* Surrounding stats - positioned closely around the central image */}
            {/* Top stat */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-full w-50 p-3 flex flex-col items-center">
              <img src={Icon1} alt="Content" className="w-[140px] mb-2" />
              <p className="text-sm text-center text-[#1E1E1E]/40 font-cocon">
                We turn classrooms and homes into hubs of discovery with
                hands-on learning experiences.
              </p>
            </div>
            {/* Right stat */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-50 p-3 flex flex-col items-center">
              <img src={Icon3} alt="Partners" className="w-[140px] mb-2" />
              <p className="text-sm text-center text-[#1E1E1E]/40 font-cocon">
                We bridge education with real-world careers, helping children
                see possibilities beyond exams.
              </p>
            </div>
            {/* Left stat */}
            <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-50 p-3 flex flex-col items-center">
              <img src={Icon2} alt="Expansion" className="w-[140px] mb-2" />
              <p className="text-sm text-center text-[#1E1E1E]/40 font-cocon">
                From creativity to critical thinking, we nurture competencies
                Africa needs for tomorrow.
              </p>
            </div>
            {/* Bottom stat right */}
            <div className="absolute -bottom-4 left-full right-10 transform -translate-x-1/2 translate-y-full w-50 p-3 flex flex-col items-center">
              <img src={Icon5} alt="Impact" className="w-[140px] mb-2" />
              <p className="text-sm text-center text-[#1E1E1E]/40 font-cocon">
                Through partnerships and CSR, we ensure underserved children
                aren’t left behind.
              </p>
            </div>{" "}
            {/* Bottom stat left */}
            <div className="absolute -bottom-0 left-10 right-1/2 transform translate-y-full -translate-x-full w-50 p-3 flex flex-col items-center">
              <img src={Icon4} alt="Engagement" className="w-[140px] mb-2" />
              <p className="text-sm text-center text-[#1E1E1E]/40 font-cocon">
                We equip adults with tools to nurture purpose-driven learners.
              </p>
            </div>
          </div>
        </div>
        {/* Mobile View For Stats */}
        <div className="my-4 text-[#3C91BA] font-nexa text-2xl block md:hidden">
          How We Do It
        </div>
        <div className="grid grid-cols-3 md:hidden">
          {stats.map((stat) => (
            <div className="w-full p-3 flex flex-col items-center">
              <img src={stat.icon} alt="Content" className="w-full mb-2" />
              <p className="text-xs text-center text-[#1E1E1E]/40 font-cocon">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfvNPv7b8PHXlDfL1yX4sKqAP71XAEGzssEwOSv7esMAycscA/viewform"
          target="_blank"
        >
          <button className="w-[202px] h-[48px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] hover:bg-[#f89f2e] rounded-full shadow-md my-6 uppercase flex items-center justify-center text-sm md:text-base duration-300 hover:scale-105 font-cocon">
            Sign up with us{" "}
            <span>
              <IoArrowForwardCircle className="mx-2" />
            </span>
          </button>
        </a>
      </div>
      {/* Unique Approach */}
      <div
        className="w-full h-full relative bg-cover md:flex items-center"
        style={{
          backgroundImage: `url(${WhoWeAreBG})`,
        }}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-[3] gap-4 md:gap-10 px-5 pt-20 pb-10 md:p-20 md:m-20">
          <div>
            <img src={UniqueApproach} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start gap-4">
            <div className="text-white font-nexa text-2xl md:text-5xl text-center md:text-left">
              Our Unique Educational <br />
              Approach
            </div>
            <p className="font-medium font-cocon text-[#FFFFFF]/75 text-center md:text-left">
              Central to WeKraft’s educational approach is nurturing, measuring,
              and tracking seven types of intelligence in children
            </p>
            <div className="w-full grid items-center justify-center gap-4 md:gap-20 p-4">
              <div className="grid grid-cols-4 gap-4 md:gap-20">
                <div className="w-full md:w-[140px] h-[70px]"></div>
                <div className="w-full md:w-[140px] h-[70px] rounded-[30px] md:rounded-[60px] shadow-2xl bg-[#FAB548] shadow-[#FAB548] text-white flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm p-1">
                  logical-
                  <br className="hidden md:block" /> mathematics
                </div>
                <div className="w-full md:w-[140px] h-[70px] rounded-[30px] md:rounded-[60px] shadow-2xl bg-[#FFFCFB] shadow-[#FAB548]/25 text-[#3C91BA] flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Linguistic
                </div>
                <div className="w-full md:w-[140px] h-[70px]"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full md:w-[150px] h-[70px] rounded-[60px] shadow-2xl bg-[#3C91BA] shadow-[#FAB548]/25 text-white flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Spatial
                </div>
                <div className="w-full md:w-[150px] h-[70px] rounded-[60px] shadow-2xl bg-[#FFFCFB] shadow-[#FAB548]/25 text-[#3C91BA] flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Naturalistic
                </div>
                <div className="w-full md:w-[150px] h-[70px] rounded-[30px] md:rounded-[60px] shadow-2xl bg-[#F7CA57] shadow-[#F7CA57] text-white flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Inter-
                  <br />
                  personal
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 md:gap-20">
                <div className="w-full md:w-[140px] h-[70px]"></div>
                <div className="w-full md:w-[140px] h-[70px] rounded-[30px] md:rounded-[60px] shadow-2xl bg-[#C85415] shadow-[#C85415] text-white flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Intra-
                  <br />
                  personal
                </div>
                <div className="w-full md:w-[140px] h-[70px] rounded-[35px] md:rounded-[60px] shadow-2xl bg-[#5BC4F6] shadow-[#5BC4F6] text-white flex items-center justify-center text-center font-cocon text-[9.5px] md:text-sm">
                  Bodily-
                  <br />
                  kinesthetic
                </div>
                <div className="w-full md:w-[140px] h-[70px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4 md:p-10 2xl:p-20 bg-[#FAB548]/5">
        <div className="md:w-[30%]">
          <div className="w-full flex md:flex-col-reverse items-center gap-5 md:gap-10">
            <img src={Star2} className="w-[60px] md:w-[125px]" />
            <div className="text-[#1E1E1E]/50 font-nexa text-2xl md:text-4xl md:leading-10">
              See What Our Clients Are Saying
            </div>
          </div>
        </div>

        {/* <div>Testimonial Container</div> */}
        <Testimonials />
      </div>
      {/* Partners */}
      <div
        className="w-full h-full flex flex-col items-center justify-center p-4 bg-cover"
        style={{ backgroundImage: `url(${WekraftBg})` }}
      >
        <div className="w-full flex items-center justify-center gap-5 md:gap-10">
          <img src={Star} className="w-20 md:w-[150px]" />
          <div className="text-[#1E1E1E]/50 font-nexa text-2xl md:text-5xl">
            We Are Not Alone
          </div>
        </div>
        <div className="flex flex-col gap-10 md:p-10 my-4">
          <div className="w-full grid grid-cols-4 items-center justify-center gap-5 md:gap-10 2xl:gap-20">
            <img src={Jasiri} />
            <img src={Hindsight} />
            <img src={Norsken} />
            <img src={Linklater} />
          </div>
          <div className="w-full grid grid-cols-5 items-center justify-center gap-3 md:gap-12 2xl:gap-20">
            <div></div>
            <img src={Concordia} />
            <img src={Grow} />
            <img src={Startups} />
            <div></div>
          </div>
          <div className="w-full grid grid-cols-5 items-center justify-center gap-3 md:gap-10 2xl:gap-20">
            <div></div>
            <img src={CMU} />
            <img src={AA} />
            <img src={BPN} />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
