import React from "react";
import heroImage from "../assets/hero-children-learning.jpg";
import laptopRefurbishment from "../assets/laptop-refurbishment.jpg";
import familyLearning from "../assets/family-learning.jpg";
import corporateDonation from "../assets/corporate-donation.jpg";

const stats = [
  {
    number: "1",
    description: "donated laptop = 1 classroom connected",
    icon: "💻",
    color: "#3C91BA",
  },
  {
    number: "$100",
    description: "= 1 refurbished computer ready for learning",
    icon: "🔧",
    color: "#FAB548",
  },
  {
    number: "50+",
    description: "schools across Rwanda already participating",
    icon: "🏫",
    color: "#3C91BA",
  },
  {
    number: "500+",
    description: "children discovering their digital potential",
    icon: "✨",
    color: "#FAB548",
  },
];

const helpOptions = [
  {
    title: "Donate Old Computers & Laptops",
    description:
      "Your unused devices can find new life in the hands of eager learners. We work with partners to refurbish donated laptops and place them in schools that otherwise couldn't access SkillSeed.",
    image: laptopRefurbishment,
    buttonText: "Donate a Device",
    buttonStyle: "primary",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0RE_gtyaMpSrcW8RoYDfd5c2O0xNBAqKsYDZpvFSspoeHCw/viewform?usp=header",
    steps: [
      "Contact our team to arrange pickup",
      "We assess and refurbish your device",
      "Device gets placed in a partnered school",
      "Receive updates on its impact",
    ],
  },
  {
    title: "Support with Funds",
    description:
      "Refurbishing a laptop or subsidizing access for a child takes resources. Your financial gift helps cover refurbishment costs and provides scholarships to children whose families cannot afford the program.",
    image: familyLearning,
    buttonText: "Make a Donation",
    buttonStyle: "secondary",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0RE_gtyaMpSrcW8RoYDfd5c2O0xNBAqKsYDZpvFSspoeHCw/viewform?usp=header",
    steps: [
      "Choose your contribution amount",
      "Select specific programs to support",
      "Get matched with a child or school",
      "Receive progress reports and updates",
    ],
  },
  {
    title: "Parents, You're Already Helping",
    description:
      "When you subscribe to SkillSeed for your child, a small percentage of your payment directly supports access for children in need. Every subscription is not just an investment in your own child—it's a ripple of hope that reaches another.",
    image: corporateDonation,
    buttonText: "Corporate Partnership",
    buttonStyle: "outline",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSftyDcS_k4uVjUcJW7HhGOydJu2wI-FHxOh_Rl64B2414VdOw/viewform",
    steps: [
      "Partner with us as a corporate sponsor",
      "Organize employee device drives",
      "Sponsor entire classrooms or schools",
      "Build your CSR impact story",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SMALL REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const PrimaryBtn = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button
      className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#FAB548] text-white font-cocon font-semibold uppercase text-sm md:text-base shadow-md hover:bg-[#f89f2e] hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  </a>
);

const SecondaryBtn = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button
      className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#3C91BA] text-white font-cocon font-semibold uppercase text-sm md:text-base shadow-md hover:bg-[#2A6B8B] hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  </a>
);

const OutlineBtn = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <button
      className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-[#3C91BA] text-[#3C91BA] font-cocon font-semibold uppercase text-sm md:text-base hover:bg-[#3C91BA] hover:text-white hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image + overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt="African children learning with laptops in a bright classroom"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A6B8B]/85 via-[#3C91BA]/65 to-[#FAB548]/60" />
    </div>

    {/* Floating decorative circles */}
    <div className="absolute top-20 left-10 w-12 h-12 bg-white/20 rounded-full animate-bounce" />
    <div
      className="absolute bottom-32 right-16 w-8 h-8 bg-[#FAB548]/40 rounded-full animate-bounce"
      style={{ animationDelay: "0.5s" }}
    />
    <div
      className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/30 rounded-full animate-bounce"
      style={{ animationDelay: "1s" }}
    />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Badge */}
        {/* <div className="inline-block bg-white/15 border border-white/30 text-white text-xs md:text-sm font-cocon px-4 py-2 rounded-full uppercase tracking-widest">
          SkillSeed for All — Rwanda
        </div> */}

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-nexa font-bold text-white">
          Every Child Deserves a
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #FAB548, #F7CA57)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chance to Dream
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-cocon leading-relaxed">
          Help us bridge the digital divide. Your contribution can light up a
          child's path to a future they never imagined.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <PrimaryBtn href="https://docs.google.com/forms/d/e/1FAIpQLSe0RE_gtyaMpSrcW8RoYDfd5c2O0xNBAqKsYDZpvFSspoeHCw/viewform?usp=header">
            Donate a Device
          </PrimaryBtn>

          {/* "Sponsor a Child" — no link yet, kept as non-clickable styled button */}
          <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/15 border-2 border-white text-white font-cocon font-semibold uppercase text-sm md:text-base hover:bg-white hover:text-[#3C91BA] hover:scale-105 transition-all duration-300">
            Sponsor a Child
          </button>

          <PrimaryBtn href="https://docs.google.com/forms/d/e/1FAIpQLSftyDcS_k4uVjUcJW7HhGOydJu2wI-FHxOh_Rl64B2414VdOw/viewform">
            Partner With Us
          </PrimaryBtn>
        </div>

        {/* Impact numbers */}
        <div className="pt-10">
          <p className="text-white/70 text-xs md:text-sm uppercase tracking-widest font-cocon mb-5">
            Together We've Already Made an Impact
          </p>
          <div className="flex justify-center gap-8 md:gap-16 text-white">
            {[
              { num: "500+", label: "Children Connected" },
              { num: "50+", label: "Schools Reached" },
              { num: "1000+", label: "Devices Donated" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-nexa font-bold text-[#FAB548]">
                  {num}
                </div>
                <div className="text-xs md:text-sm font-cocon text-white/80 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
);

const ImpactStats = () => (
  <section className="py-20 px-4 bg-[#FFFBF7]">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-14 space-y-3">
        <h2 className="text-4xl md:text-5xl font-nexa font-bold text-[#1E1E1E]/70">
          Your Impact in <span className="text-[#FAB548]">Numbers</span>
        </h2>
        <p className="text-lg text-[#1E1E1E]/50 font-cocon max-w-2xl mx-auto">
          See how your contribution creates ripples of change across communities
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-dashed border-[#3C91BA]/40 p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div
              className="text-4xl md:text-5xl font-nexa font-bold mb-2"
              style={{ color: stat.color }}
            >
              {stat.number}
            </div>
            <p className="text-sm font-cocon text-[#1E1E1E]/50 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom join-the-movement card */}
      <div className="text-center mt-14">
        <div className="inline-block bg-white border border-dashed border-[#3C91BA] rounded-2xl p-8 shadow-md max-w-sm">
          <h3 className="font-nexa font-bold text-lg text-[#1E1E1E]/70 mb-2">
            Join the Movement
          </h3>
          <p className="text-sm font-cocon text-[#1E1E1E]/50">
            Every contribution matters, no matter the size
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HowToHelp = () => (
  <section className="py-20 px-4 bg-[#FFFCF8]">
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-nexa font-bold text-[#1E1E1E]/70">
          How You Can <span className="text-[#3C91BA]">Make a Difference</span>
        </h2>
        <p className="text-xl font-cocon text-[#1E1E1E]/50 max-w-3xl mx-auto">
          Together, we can ensure that no child is excluded from discovering
          their passions, building skills, and preparing for the jobs of
          tomorrow.
        </p>
      </div>

      {/* Help options — alternating layout */}
      <div className="space-y-20">
        {helpOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-10 items-center`}
          >
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-dashed border-[#3C91BA]/30 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-5">
              <h3 className="text-3xl md:text-4xl font-nexa font-bold text-[#1E1E1E]/75">
                {option.title}
              </h3>
              <p className="text-lg font-cocon text-[#1E1E1E]/55 leading-relaxed">
                {option.description}
              </p>

              {/* Steps */}
              <div className="space-y-3">
                <h4 className="font-cocon font-semibold text-[#1E1E1E]/70">
                  How it works:
                </h4>
                <ul className="space-y-2">
                  {option.steps.map((step, si) => (
                    <li
                      key={si}
                      className="flex items-center gap-3 font-cocon text-[#1E1E1E]/55"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: "#3C91BA" }}
                      >
                        {si + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {option.buttonStyle === "primary" && (
                <PrimaryBtn href={option.link}>{option.buttonText}</PrimaryBtn>
              )}
              {option.buttonStyle === "secondary" && (
                <SecondaryBtn href={option.link}>
                  {option.buttonText}
                </SecondaryBtn>
              )}
              {option.buttonStyle === "outline" && (
                <OutlineBtn href={option.link}>{option.buttonText}</OutlineBtn>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA card */}
      <div className="mt-20 pt-16 border-t border-[#3C91BA]/20">
        <div
          className="p-8 md:p-12 rounded-2xl text-white text-center max-w-4xl mx-auto shadow-xl flex flex-col items-center"
          style={{
            background: "linear-gradient(135deg, #2A6B8B, #3C91BA, #FAB548)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-nexa font-bold mb-4">
            Ready to Light Up a Child's Future?
          </h3>
          <p className="text-lg font-cocon opacity-90 mb-8">
            Every action you take creates a ripple of hope across Africa. Start
            your impact journey today.
          </p>
          <PrimaryBtn href="https://docs.google.com/forms/d/e/1FAIpQLSe0RE_gtyaMpSrcW8RoYDfd5c2O0xNBAqKsYDZpvFSspoeHCw/viewform?usp=header">
            Start Making a Difference
          </PrimaryBtn>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const Outreach = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactStats />
      <HowToHelp />
    </div>
  );
};

export default Outreach;
