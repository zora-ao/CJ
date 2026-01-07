import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Certificate from "../components/Certificate";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Certificate /> {/* Shows 4 certificates */}
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
