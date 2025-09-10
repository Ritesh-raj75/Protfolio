import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "./components/AboutSection";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  useEffect(() => {
     // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Refresh ScrollTrigger when the page is fully loaded
      ScrollTrigger.refresh();

      // clean up scroll triggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
  }, [])
  return (
   <>
    <Header />
    <div id="home"><HeroSection /></div>
    <CustomCursor />
    <div id="about"><AboutSection /></div>
  <div id="projects"><ProjectsSection /></div>
  <div id="experience"><ExperienceSection /></div>
  <div id="contact"><ContactSection /></div>
    <Footer />
    <ProgressBar />
   </>
  )
}