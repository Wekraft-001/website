import React, { useState } from "react";
import HeroBG from "../assets/contact-hero.svg";
import { IoArrowForwardCircle, IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.question) {
      setStatus({
        loading: false,
        success: false,
        error: "Please fill in all required fields (First name, Email, and Question).",
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          question: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to connect to the server. Make sure the API server is running.",
      });
    }
  };

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
        <form onSubmit={handleSubmit} className="bg-[#FFFCF8] border-l-[1.09px] border-r-[1.09px] border-dashed border-[#3C91BA] p-4 md:p-6">
          {/* Status Message */}
          {status.error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-semibold">
              ⚠️ {status.error}
            </div>
          )}
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-semibold">
              🎉 Thank you! Your message has been sent successfully to skillseedrw@gmail.com.
            </div>
          )}

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
          </div>
          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
          </div>
          {/* Question Field */}
          <div className="">
            <textarea
              rows="4"
              name="question"
              placeholder="Question *"
              value={formData.question}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {/* Send Button */}
          <div className="mt-6">
            <button 
              type="submit" 
              disabled={status.loading}
              className={`flex items-center bg-[#FAB548] text-white font-semibold uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#f8a933] transition duration-300 font-cocon ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status.loading ? "Sending..." : "Send"}
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
              Norsken House, Kigali, RW
            </span>
          </div>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <a href="#" target="_blank">
              <AiOutlineMail size={20} color="#1E1E1E" />
            </a>
            <span className="md:text-xl font-regular">
              skillseed@wekraft.co
            </span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#1E1E1E]/60">
            <a href="#">
              <FaPhone size={20} color="#1E1E1E" />
            </a>
            <span className="md:text-xl font-regular">
              +250793177089 / +250787161453
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
