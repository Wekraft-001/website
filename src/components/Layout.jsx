import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[72px] md:pt-10 overflow-y-auto">
        {children}{" "}
        <a
          href="https://wa.me/+254716564553"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 rounded-full p-3 shadow-lg cursor-pointer z-50"
          style={{
            backgroundColor: "#3C91BA",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <FaWhatsapp size={35} color="white" />
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
