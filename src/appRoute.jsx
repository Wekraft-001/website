import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Toolkit from "./pages/Toolkit";
import Skillseed from "./pages/Skillseed";
import Contact from "./pages/Contact";
import Outreach from "./pages/Outreach";

const AppRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-toolkit" element={<Toolkit />} />
          <Route path="/skillseed" element={<Skillseed />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/outreach" element={<Outreach />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRoute;
