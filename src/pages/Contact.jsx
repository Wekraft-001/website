import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { useLanguage } from "../components/LanguageContext";
import ContactHero from "../assets/contact-hero.svg";

const contactInfo = {
  location: "Norsken House, Kigali, RW",
  email: "skillseed@wekraft.co",
  phones: ["+250793177089", "+250787161453"],
};

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  question: "",
};

const inputClass =
  "w-full bg-transparent border-2 border-dashed border-[#3C91BA] rounded-lg p-3 outline-none focus:border-blue-500 placeholder:text-[#1E1E1E]/50 disabled:opacity-60";

const Contact = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { t } = useLanguage();

  const [formData, setFormData] = useState(initialForm);
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

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData(initialForm);
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
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[320px] md:h-[440px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={ContactHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (uncomment to darken the image) */}
        {/* <div className="absolute inset-0 bg-black/50 z-[2]" /> */}

        {/* Title */}
        <motion.h1
          className="relative z-[3] -mt-10 px-4 text-white font-cocon font-bold uppercase text-4xl md:text-6xl text-center tracking-wide"
          style={{
            WebkitTextStroke: "1px #FAB548",
            textShadow: "0 0 10px rgba(250,181,72,0.8)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("contact.hero_title")}
        </motion.h1>
      </div>

      {/* Form card (overlaps the hero) */}
      <motion.div
        className="relative z-[4] w-full max-w-3xl mx-auto px-4 -mt-16 mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Header */}
        <div className="w-full h-[150px] rounded-t-[30px] bg-[#FFF1DC] text-center flex items-center justify-center px-4 font-cocon text-xl md:text-3xl text-[#1E1E1E]/50">
          <p>
            Let's get your details in order for us
            <br /> to help you
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#FFFCF8] border-x border-dashed border-[#3C91BA] p-4 md:p-6"
        >
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
          )}

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              disabled={status.loading}
              className={inputClass}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={status.loading}
              className={inputClass}
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mb-6 md:mb-10">
            <input
              type="email"
              name="email"
              placeholder={t("contact.form_email")}
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
              className={inputClass}
            />
            <input
              type="tel"
              name="phoneNumber" // matches backend DTO
              placeholder={t("contact.form_phone")}
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={status.loading}
              className={inputClass}
            />
          </div>

          {/* Question */}
          <textarea
            name="question"
            rows={5}
            placeholder="Question *"
            value={formData.question}
            onChange={handleChange}
            disabled={status.loading}
            className={inputClass}
          />

          {/* Send */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={status.loading}
              className={`flex items-center bg-[#FAB548] text-white font-semibold uppercase px-6 py-3 rounded-full shadow-md hover:bg-[#f8a933] transition duration-300 font-cocon ${
                status.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {status.loading ? t("btn.sending") : t("btn.send")}
            </button>
          </div>
        </form>

        {/* Contact information */}
        <div className="bg-[#FFF1DC] rounded-b-[30px] p-4 md:p-6 space-y-6">
          <p className="text-[#1E1E1E]/50 text-2xl md:text-4xl font-cocon">
            Contact Information
          </p>

          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <IoLocationSharp size={20} color="#1E1E1E" />
            <span className="md:text-xl">{contactInfo.location}</span>
          </div>

          <div className="flex items-center gap-2 font-cocon text-[#1E1E1E]/60">
            <AiOutlineMail size={20} color="#1E1E1E" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="md:text-xl hover:underline"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-2 font-bold text-[#1E1E1E]/60">
            <FaPhone size={20} color="#1E1E1E" />
            <span className="md:text-xl">
              {contactInfo.phones.map((phone, i) => (
                <React.Fragment key={phone}>
                  {i > 0 && " / "}
                  <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                  </a>
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
