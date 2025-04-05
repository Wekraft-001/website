import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import WhoWeAreBG from "../assets/whoWeAreBg.svg";
import AboutTeam from "../assets/aboutTeam.svg";
import OurStory from "../assets/our-story.svg";
import WekraftBg from "../assets/wekraftBG.svg";
import Arrow from "../assets/arrow.svg";
import Star from "../assets/shooting-star.svg";
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
import Staphord from "../assets/teams/staphord.svg";
import Agnes from "../assets/teams/agnes.svg";
import Juliet from "../assets/teams/juliet.svg";
import John from "../assets/teams/john.svg";
import Ben from "../assets/teams/ben.svg";
import Florence from "../assets/teams/florence.svg";
import Blue_Star from "../assets/shooting-star_blue.svg";

const About = () => {
  const teams = [
    {
      image: Staphord,
      name: "Staphord Nkumbuye",
      title: "CEO & Co-founder",
    },
    {
      image: Agnes,
      name: "Agnes Wambui",
      title: "COO & Co-founder",
    },
    {
      image: Juliet,
      name: "Juliet Kelechi",
      title: "CTO",
    },
    {
      image: John,
      name: "John Bosco Kalisa",
      title: "Chairman of the Advisory Board",
    },
    {
      image: Ben,
      name: "Benjamin Matchet",
      title: "Legal Advisor",
    },

    {
      image: Florence,
      name: "Florence Wairimu",
      title: "Curriculum Development Advisor",
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
            src="https://wekraftdocs.blob.core.windows.net/videos/Highlight.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/50 z-[2]"></div>
        <div className="w-full flex flex-col items-center justify-center relative z-[3] p-4 pt-20 md:pt-0 md:my-4">
          <p className="text-3xl md:text-6xl font-primarySemibold text-gray-200 md:w-[900px] mb-2 text-center uppercase font-nexa">
            where little minds grow <br /> big dreams
          </p>
          <p className="md:text-2xl font-primaryRegular text-gray-100 text-center font-cocon">
            Our aim is to ensure that every child is empowered to thrive
            <br /> in their future endeavours
          </p>
          <a href="#more">
            <button
              // onClick={() => handleBecomeMemberClick()}
              className="w-[202px] h-[48px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] rounded-full my-4 uppercase flex items-center justify-center text-sm md:text-base font-cocon cursor-pointer"
            >
              See More
              <span>
                <IoArrowForwardCircle className="mx-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
      {/* Mission & Vision */}
      <div
        id="more"
        className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-10 px-4 py-8 bg-[#FFFBF7]"
      >
        <div className="flex flex-col items-center gap-2 my-5 md:my-10">
          {/* Mission Card */}
          <div className="relative p-4 md:p-6 rounded-2xl shadow-xl shadow-[#FAB548]/25 border border-dashed border-[#3C91BA] w-72 md:w-[300px] font-cocon text-[#1E1E1E]/65">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-xs md:text-sm leading-6">
              To spark confidence, creativity, and curiosity in every child by
              giving them the tools, exposure, and inspiration to dream boldly
              and learn with purpose.
            </p>
          </div>

          {/* Decorative Arrow */}
          <div>
            <img src={Arrow} />
          </div>

          {/* Vision Card */}
          <div className="relative bg-white p-4 md:p-6 rounded-2xl shadow-xl shadow-[#FAB548]/25 border border-dashed border-[#3C91BA] w-72 md:w-[300px] font-cocon text-[#1E1E1E]/65">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-xs md:text-sm leading-6">
              A future where every child grows up feeling seen, supported, and
              excited about who they are becoming and parents are right there
              beside them on the journey.
            </p>
          </div>
        </div>
        <div>
          <img src={AboutTeam} />
        </div>
      </div>
      {/* Team */}
      <div
        className="w-full h-full relative bg-cover md:flex items-center"
        style={{
          backgroundImage: `url(${WhoWeAreBG})`,
        }}
      >
        <div className="w-full flex flex-col items-center justify-center px-4 py-12 md:m-10">
          <div className="my-4 text-white font-nexa text-xl md:text-5xl">
            Meet Our Team
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 2xl:gap-20">
            {teams.map((team) => (
              <div className="flex flex-col items-center justify-center gap-2 font-cocon">
                <div className="w-full md:w-50 md:h-50">
                  <img src={team.image} className="w-full h-full" />
                </div>
                <div className="flex items-center">
                  <div className="w-2 md:w-5 h-6 md:h-10 bg-white"></div>
                  <div className="p-1 md:p-2 bg-white font-semibold mx-2 text-sm md:text-base">
                    {team.name}
                  </div>
                </div>
                <p className="text-white font-light text-center">
                  {team.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Story */}
      <div
        className="w-full h-full relative bg-cover flex flex-col items-center justify-center p-10"
        style={{
          backgroundImage: `url(${OurStory})`,
        }}
      >
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-5 md:gap-10 py-5 md:py-10">
          <div className="flex flex-col items-center justify-center md:items-start gap-4">
            <div className="my-4 text-white font-nexa text-xl md:text-5xl">
              Our Story
            </div>
            <div className="w-full md:w-[800px] bg-[#FFFFFF] rounded-4xl p-6 font-cocon text-[#1E1E1E]/[40%] text-sm md:text-xl border border-dashed border-[#3C91BA] leading-10">
              WeKraft serves a diverse clientele including parents, educators,
              schools, and non-profit organizations. These stakeholders are keen
              on integrating innovative educational tools into their teaching
              environments to improve engagement and learning outcomes.
              <br />
              Additionally, WeKraft partners with retailers to make its
              educational toolkits widely available, thereby reaching a broader
              market.
            </div>
          </div>
          <div>
            <img src={Blue_Star} />
          </div>
        </div>
        {/* Mobile View with Positioned Star */}
        <div className="relative md:hidden w-full py-5">
          <div className="mb-2 text-white font-nexa text-xl text-center">
            Our Story
          </div>
          <div className="bg-[#FFFFFF] rounded-4xl p-5 font-cocon text-[#1E1E1E]/[40%] text-sm border border-dashed border-[#3C91BA] leading-8 relative">
            WeKraft serves a diverse clientele including parents, educators,
            schools, and non-profit organizations. These stakeholders are keen
            on integrating innovative educational tools into their teaching
            environments to improve engagement and learning outcomes.
            <br />
            Additionally, WeKraft partners with retailers to make its
            educational toolkits widely available, thereby reaching a broader
            market.
          </div>

          {/* Star positioned on the top-right corner of the box */}
          <img
            src={Blue_Star}
            className="absolute -top-8 -right-10 w-[100px] h-[100px]"
          />
        </div>
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

export default About;
