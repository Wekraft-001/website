import React from "react";
import { motion } from "framer-motion";
import { IoArrowForwardCircle } from "react-icons/io5";
import SkillseedHeroIm from "../assets/skillseed-hero.svg";
import Arrow from "../assets/arrow.svg";
import Core1 from "../assets/journey.svg";
import Core2 from "../assets/exposure.svg";
import Core3 from "../assets/engagement.svg";
import Core4 from "../assets/parents.svg";
import { BsPinFill } from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";
import WhoWeAreBG from "../assets/whoWeAreBg.svg";
import Gifted from "../assets/gifted.svg";
import IconPerson from "../assets/price-icon-person.svg";
import IconSchool from "../assets/price-icon-school.svg";

const Skillseed = () => {
  const journeys = [
    {
      id: 1,
      message:
        "Kids interact with gamified questions to assess interests, passions, and career aspirations.",
    },
    {
      id: 2,
      message:
        "Curated reading materials and videos aligned with children’s interests are recommended on their dashboards.",
    },
    {
      id: 3,
      message:
        "Practical, hands-on activities to build skills are made available on their platforms.",
    },
    {
      id: 4,
      message:
        " Mentorship programs and workplace visits with professionals in diverse industries. Parents and children can book sessions on the platform.",
    },
  ];
  const exposure = [
    {
      id: 1,
      message: "Mentorship programs with professionals in diverse industries.",
    },
    {
      id: 2,
      message:
        "Workplace visits or virtual tours to experience career environments.",
    },
    {
      id: 3,
      message:
        "Collaborative projects simulating real-world challenges in specific fields.",
    },
  ];
  const engagement = [
    {
      id: 1,
      message:
        "Themed challenges (e.g.,“Invent a Gadget” week, “Storytelling Camp”)",
    },
    {
      id: 2,
      message: "Group activities that encourage teamwork and creativity.",
    },
    {
      id: 3,
      message:
        "Skill-building exercises in problem-solving, critical thinking, and communication.",
    },
  ];
  const parents = [
    {
      id: 1,
      message: "Weekly parenting guides with actionable advice.",
    },
    {
      id: 2,
      message:
        "Regular updates on their child’s progress and areas for improvement.",
    },
  ];
  const tracks = [
    {
      id: 1,
      message:
        "Advanced Reading & Problem-Solving: Engaging activities that challenge critical thinking and comprehension skills.",
    },
    {
      id: 2,
      message:
        "Self-Paced Learning Modules: Tailored for children eager to explore materials beyond their grade level, fostering independent learning.",
    },
    {
      id: 3,
      message:
        "Specialized Topics: Opportunities to dive into complex and exciting fields like robotics, advanced coding, and more. Sparking creativity and innovation.",
    },
    {
      id: 4,
      message:
        "Perfect for children who thrive on challenges and aim to expand their horizons!",
    },
  ];

  const scrollToMore = () => {
    const section = document.querySelector("#more");
    section?.scrollIntoView({ behavior: "smooth" });
  };
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
          <p className="text-[#FFFFFF]/70 text-xl md:text-4xl font-cocon text-center md:text-left">
            Welcome to Skillseed
          </p>
          <h1
            className="text-white font-primaryBold text-2xl md:text-5xl md:leading-[70px] text-center md:text-left uppercase font-nexa"
            style={{ textShadow: "2px 2px 2px #FAB548" }}
          >
            We believe every child carries a seed of greatness
          </h1>
          <a
            href="https://quiz.wekraft.co/"
            target="_blank"
            className="flex items-center justify-center md:justify-start"
          >
            {/* <motion.button
            onClick={scrollToMore}
            className="w-[171px] h-[50px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] rounded-full my-4 uppercase flex items-center justify-center text-sm md:text-base font-cocon cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            See More
            <span>
              <IoArrowForwardCircle className="mx-2" />
            </span>
          </motion.button> */}
            <motion.button
              onClick={scrollToMore}
              className="w-[171px] h-[50px] text-white font-primarySemibold md:font-primaryMedium bg-[#FAB548] rounded-full my-4 uppercase flex items-center justify-center text-sm md:text-base font-cocon cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Take Quiz
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
          <img src={SkillseedHeroIm} alt="Toolkit Hero" />
        </motion.div>
      </div>
      {/* Core Offerings */}
      <div id="more" className="w-full bg-[#FFFBF7] p-4 md:p-10 ">
        <div className="my-6 text-[#1E1E1E]/50 font-nexa text-xl md:text-5xl text-center">
          Our Core Offerings
        </div>
        {/* Core Offering 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between 2xl:justify-around gap-4 2xl:gap-10">
          <div className="md:w-[500px] 2xl:w-[700px] space-y-4 font-cocon">
            <p className="text-[#3C91BA] text-2xl md:text-4xl text-center md:text-left">
              Personalized Learning Journeys
            </p>
            <img src={Core1} />
            <p className="text-[#1E1E1E]/60 md:text-xl">
              AI-powered paths that adapt to each child’s interests, strengths,
              and dreams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-10 md:w-[50%]">
            {journeys.map((journey, index) => (
              <div key={journey.id} className="flex flex-col items-center">
                {/* Card */}
                <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full max-w-[400px] max-h-[400px] h-full rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                  <BsPinFill size={30} color="#FAB548" />
                  <p className="font-cocon text-[#3C91BA] text-center">
                    {journey.message}
                  </p>
                </div>

                {/* Arrow – only show if not the last item */}
                <div className="block md:hidden">
                  {index < journeys.length - 1 && (
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-8 h-8 mt-4 rotate-90"
                    />
                  )}
                </div>
                <div className="hidden md:block">
                  {index < journeys.length - 2 && (
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-10 h-10 mt-4 rotate-90"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Core Offering 2 */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 2xl:justify-around 2xl:gap-10 my-5 md:my-10">
          <div className="w-full flex flex-col items-center gap-5 md:gap-10 py-5 md:py-10 md:w-[60%]">
            {/* Top Center Card */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full md:w-[350px] 2xl:w-[500px] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                  <BsPinFill size={30} color="#FAB548" />
                  <p className="font-cocon text-[#3C91BA] text-center">
                    {exposure[0].message}
                  </p>
                </div>

                {/* Arrow pointing down to bottom row */}
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="w-10 h-10 mt-4 rotate-90"
                />
              </div>
            </div>

            {/* Bottom Row - Two Cards Side by Side */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
              {exposure.slice(1).map((journey, index) => (
                <div key={journey.id} className="flex flex-col items-center">
                  <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full md:w-[350px] 2xl:w-[500px] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                    <BsPinFill size={30} color="#FAB548" />
                    <p className="font-cocon text-[#3C91BA] text-center">
                      {journey.message}
                    </p>
                  </div>

                  {/* Optional arrows between bottom cards if you want them connected */}
                  {index === 0 && (
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-10 h-10 mt-4 rotate-90 md:hidden"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" md:w-[400px] 2xl:w-[700px] space-y-4 font-cocon py-6 md:py-0">
            <p className="text-[#3C91BA] text-2xl md:text-4xl text-center md:text-left">
              Real World Career Exposure
            </p>
            <img src={Core2} />
            <p className="text-[#1E1E1E]/60 md:text-xl">
              Direct interactions with professionals, workplaces, and mentors to
              inspire future-ready choices.
            </p>
          </div>
        </div>
        {/* Core Offering 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 2xl:justify-around 2xl:gap-10 my-10">
          <div className="md:w-[500px] 2xl:w-[700px] space-y-4 font-cocon">
            <p className="text-[#3C91BA] text-2xl md:text-4xl text-center md:text-left">
              Weekly Engagement Activities
            </p>
            <img src={Core3} />
            <p className="text-[#1E1E1E]/60 md:text-xl">
              Fun, skill-building challenges that spark creativity, teamwork,
              and resilience.
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:gap-10 py-5 md:py-10">
            {/* Top Center Card */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full md:w-[350px] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                  <BsPinFill size={30} color="#FAB548" />
                  <p className="font-cocon text-[#3C91BA] text-center">
                    {engagement[0].message}
                  </p>
                </div>

                {/* Arrow pointing down to bottom row */}
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="w-10 h-10 mt-4 rotate-90"
                />
              </div>
            </div>

            {/* Bottom Row - Two Cards Side by Side */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
              {engagement.slice(1).map((journey, index) => (
                <div key={journey.id} className="flex flex-col items-center">
                  <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full md:w-[350px] rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                    <BsPinFill size={30} color="#FAB548" />
                    <p className="font-cocon text-[#3C91BA] text-center">
                      {journey.message}
                    </p>
                  </div>

                  {/* Optional arrows between bottom cards if you want them connected */}
                  {index === 0 && (
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-10 h-10 mt-4 rotate-90 md:hidden"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Core Offering 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 my-10 py-4 2xl:justify-around 2xl:gap-10">
          <div className="grid gap-4 md:gap-10 md:w-[50%] mt-6 md:mt-0">
            {parents.map((journey, index) => (
              <div key={journey.id} className="flex flex-col items-center">
                {/* Card */}
                <div className="bg-[#FFFCF8] border-[1.09px] border-dashed border-[#3C91BA] p-6 w-full max-w-[400px] max-h-[400px] h-full rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                  <BsPinFill size={30} color="#FAB548" />
                  <p className="font-cocon text-[#3C91BA] text-center">
                    {journey.message}
                  </p>
                </div>

                {/* Arrow – only show if not the last item */}
                <div>
                  {index < parents.length - 1 && (
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-10 h-10 mt-4 rotate-90"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[500px] 2xl:w-[700px] space-y-4 font-cocon">
            <p className="text-[#3C91BA] text-2xl md:text-4xl text-center md:text-left">
              Parents Support
            </p>
            <img src={Core4} />
            <p className="text-[#1E1E1E]/60 md:text-xl">
              Guidance and resources to help parents nurture growth and connect
              learning at home.
            </p>
          </div>
        </div>
      </div>
      {/* Gifted Kids Offerings */}
      <div
        className="w-full h-full relative bg-cover md:flex items-center"
        style={{
          backgroundImage: `url(${WhoWeAreBG})`,
        }}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-[3] gap-4 md:gap-10 px-5 pt-20 pb-10 md:p-20 md:m-20">
          <div className="my-4 text-white font-nexa text-xl block md:hidden">
            Offerings for Highly Gifted Children
          </div>
          <div>
            <img src={Gifted} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start gap-4">
            <div className="my-4 text-white font-nexa md:text-4xl hidden md:block">
              Offerings for Highly Gifted Children
            </div>
            <div className="w-full md:w-[600px] bg-[#FFFFFF]/[85%] rounded-4xl p-6 font-cocon text-[#1E1E1E]/[60%] text-sm md:text-xl my-4">
              <p className="text-[#1E1E1E]/80 text-xl md:text-3xl">
                Accelerated Learning Tracks
              </p>
              <p className="text-xs md:text-sm text-center pb-4">
                Empowering advanced learners to excel beyond the standard
                curriculum, these tracks offer:
              </p>
              <div className="grid gap-5">
                {tracks.map((track, index) => (
                  <div key={track.id} className="flex items-center gap-4">
                    <div>
                      <BsPinFill size={20} color="#FAB548" />
                    </div>
                    <p className="text-sm md:text-lg">{track.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="w-full bg-[#FFFBF7] p-4 md:p-10 flex flex-col items-center justify-center gap-5 md:gap-10">
        <div className=" text-[#1E1E1E]/50 font-nexa text-xl md:text-5xl">
          Our Pricing
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-5 md:gap-10 py-5 md:py-10">
          <div className="w-full md:w-[400px] rounded-4xl flex flex-col items-center justify-center gap-3 md:gap-5 bg-[#3C91BA] p-4">
            <img src={IconPerson} className="w-10 md:w-20 h-10 md:h-20" />
            <p className="text-center font-nexa text-white text-xl md:text-3xl">
              Individual
            </p>
            <p className="text-white font-cocon text-lg md:text-2xl">
              $25/Monthly
            </p>
          </div>
          <div className="w-full md:w-[400px] rounded-4xl flex flex-col items-center justify-center gap-3 md:gap-5 bg-white border-2 border-dashed border-[#3C91BA] p-4">
            <img src={IconSchool} className="w-10 md:w-20 h-10 md:h-20" />
            <div className="text-center font-nexa text-[#FAB548] text-xl md:text-3xl">
              School Package
              <br /> Tier 1
            </div>
            <p className="text-[#3C91BA] font-cocon text-lg md:text-2xl">
              $5/Child/Month
            </p>
          </div>
          <div className="w-full md:w-[400px] rounded-4xl flex flex-col items-center justify-center gap-3 md:gap-5 bg-white border-2 border-dashed border-[#3C91BA] p-4">
            <img src={IconSchool} className="w-10 md:w-20 h-10 md:h-20" />
            <div className="text-center font-nexa text-[#FAB548] text-xl md:text-3xl">
              School Package
              <br /> Tier 2
            </div>
            <p className="text-[#3C91BA] font-cocon text-lg md:text-2xl">
              $10/Child/Month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillseed;
