import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import ContactHero from "../assets/contact-hero.svg";
import knowledge from "../data/websiteKnowledge.json";
import { useLanguage } from "../components/LanguageContext";

const Contact = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    question: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.question) {
      setStatus({
        loading: false,
        success: false,
        error:
          "Please fill in all required fields (First name, Email, and Question).",
      });
      return;
    }

    const emailBody = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Question:
      ${formData.question}
    `;

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          question: "",
        });
      } else {
        // NestJS validation errors come back as result.message (string or array)
        const errorMsg = Array.isArray(result.message)
          ? result.message.join(", ")
          : result.message || "Something went wrong. Please try again.";

        setStatus({ loading: false, success: false, error: errorMsg });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to connect to the server. Please try again later.",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full h-[400px] md:h-[600px] relative bg-cover bg-center flex items-center justify-center p-4">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://wekraft.blob.core.windows.net/videos/contact%20cover(1).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/60 z-[2]"></div>

        {/* Content */}
        <motion.div
          className="relative z-[3] flex flex-col items-center gap-6 pt-20 md:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={ContactHero} alt="Contact Icon" className="w-20 md:w-32" />
          <h1
            className="text-[#FFFFFF] font-nexa text-3xl md:text-6xl text-center tracking-wide"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            {t("contact.hero_title")}
          </h1>
        </motion.div>
      </div>

      <div className="relative w-full max-w-3xl p-4 -top-20">
        {/* Header */}
        <div className="w-full h-[150px] rounded-t-[30px] bg-[#FFF1DC]/99 text-center flex items-center justify-center font-cocon text-xl md:text-3xl text-[#1E1E1E]/50">
          Let's get your details in order for us
          <br /> to help you
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFCF8] border-l-[1.09px] border-r-[1.09px] border-dashed border-[#3C91BA] p-4 md:p-6"
        >
          {/* Status Messages */}
          {status.error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-semibold">
              ⚠️ {status.error}
            </div>
          )}
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-semibold">
              🎉 Thank you! Your message has been sent. We will get back to you
              shortly.
            </div>

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
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.form_email")}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400"
            />

            <input
              type="tel"
              name="phoneNumber" // ← matches backend DTO
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder={t("contact.form_phone")}
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Question Field */}
          <div>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              disabled={status.loading}
              className="border-2 border-dashed border-[#3C91BA] rounded-lg p-3 w-full outline-none focus:border-blue-500"
            />
          </div>

          {/* Send Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={status.loading}
              className={`flex items-center bg-[#FAB548] text-white font-semibold uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#f8a933] transition duration-300 font-cocon ${
                status.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? t("btn.sending") : t("btn.send")}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-500 text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-center mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col gap-8 font-cocon"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-[#3C91BA]/5 p-8 rounded-3xl border border-[#3C91BA]/20">
            <h3 className="text-2xl font-medium text-[#1E1E1E] mb-6">
              {t("contact.info_title")}
            </h3>

            <div className="flex flex-col gap-6 text-[#1E1E1E]/80">
              <div className="flex items-start gap-4 hover:text-[#3C91BA] transition-colors group cursor-pointer">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                  <IoLocationSharp size={24} className="text-[#FAB548]" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-lg">Location</p>
                  <p className="text-sm mt-1">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:text-[#3C91BA] transition-colors group cursor-pointer">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                  <FaPhone size={22} className="text-[#FAB548]" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-lg">Phone</p>
                  <div className="flex flex-col mt-1">
                    {contactInfo.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="text-sm hover:underline"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:text-[#3C91BA] transition-colors group cursor-pointer">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                  <AiOutlineMail size={24} className="text-[#FAB548]" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-lg">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm mt-1 hover:underline block"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Contact Info */}
        <div className="bg-[#FFF1DC]/99 p-4 md:p-6 space-y-6">
          <p className="text-[#1E1E1E]/50 text-2xl md:text-4xl font-cocon">
            Contact Information
          </p>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <IoLocationSharp size={20} color="#1E1E1E" />
            <span className="md:text-xl font-regular">
              Norsken House, Kigali, RW
            </span>
          </div>
          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <AiOutlineMail size={20} color="#1E1E1E" />
            <span className="md:text-xl font-regular">
              skillseed@wekraft.co
            </span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#1E1E1E]/60">
            <FaPhone size={20} color="#1E1E1E" />
            <span className="md:text-xl font-regular">
              +250793177089 / +250787161453
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
