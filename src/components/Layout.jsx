import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import Chatbot from "./Chatbot";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[72px] md:pt-10 overflow-y-auto">
        {children}{" "}
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
