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
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = knowledge.contact;
  const socials = knowledge.socials;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const emailBody = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Question:
      ${formData.question}
    `;

    try {
      // In a real application, you'd send this to your backend
      // For now, we'll open the user's email client
      window.location.href = `mailto:${
        contactInfo.email
      }?subject=Inquiry from ${formData.firstName}&body=${encodeURIComponent(
        emailBody
      )}`;
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        question: "",
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
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 p-6 md:p-20 bg-[#FFFBF7]">
        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 max-w-[600px] bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-[#FAB548]/10 border border-[#3C91BA]/20 font-cocon"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="text-[#3C91BA] text-xl md:text-3xl mb-8 font-medium" dangerouslySetInnerHTML={{__html: t("contact.header")}}>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("contact.form_fn")}
                required
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("contact.form_ln")}
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400"
              />
            </div>

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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.form_phone")}
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400"
            />

            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder={t("contact.form_q")}
              required
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FAB548] focus:ring-1 focus:ring-[#FAB548] bg-gray-50 transition-all placeholder:text-gray-400 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-[200px] h-14 bg-[#FAB548] text-white rounded-full font-semibold text-lg hover:bg-[#e09e3a] transition-colors duration-300 shadow-md ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
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

          <div className="bg-[#FAB548]/10 p-8 rounded-3xl border border-[#FAB548]/20 flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl font-medium text-[#1E1E1E] mb-2">
              Follow Us
            </h3>
            <div className="flex gap-6">
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 hover:text-[#0077b5] transition-all text-[#1E1E1E]/70"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 hover:text-[#E1306C] transition-all text-[#1E1E1E]/70"
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 hover:text-[#1877F2] transition-all text-[#1E1E1E]/70"
                >
                  <FaFacebook size={24} />
                </a>
              )}
              {socials.tiktok && (
                <a
                  href={socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 hover:text-black transition-all text-[#1E1E1E]/70"
                >
                  <FaTiktok size={24} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
