import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserTie, FaLaptopCode, FaAward } from "react-icons/fa";

// Typewriter animated paragraph component
const TypewriterParagraph = () => {
  const text = "I am a passionate Full Stack Developer skilled in Java, JDBC, Servlets, Spring Boot, React.js, HTML, CSS, JavaScript, SQL, and MongoDB. I love turning ideas into interactive, user-friendly, and scalable web applications. I’ve built projects like LMS with payment integration, 3D websites, and responsive clones that showcase my problem-solving and creativity. If you are looking for someone who is dedicated, quick to learn, and excited to take on challenges — I’m the right fit. Let’s build something impactful together!";
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.p
      className="mt-12 text-base font-semibold text-center text-pink-400 whitespace-pre-line"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {displayed}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

const ExperienceSection = () => {
  const [showWorkPopup, setShowWorkPopup] = useState(false);
  const [showCertPopup, setShowCertPopup] = useState(false);
  const [showSkillsPopup, setShowSkillsPopup] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
            onLeave: () => {
              gsap.to(sectionRef.current, { opacity: 0, y: 80, scale: 0.95, duration: 0.8, ease: "power2.in" });
            },
            onEnterBack: () => {
              gsap.to(sectionRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" });
            },
          },
        }
      );
    }
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
              onLeave: () => {
                gsap.to(card, { opacity: 0, scale: 0.8, y: 40, duration: 0.6, ease: "power2.in" });
              },
              onEnterBack: () => {
                gsap.to(card, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" });
              },
            },
          }
        );
      }
    });
  }, []);

  const experiences = [
    {
      icon: <FaUserTie size={40} className="text-purple-500" />,
      title: "Work History",
      onClick: () => setShowWorkPopup(true),
    },
    {
      icon: <FaLaptopCode size={40} className="text-pink-500" />,
      title: "Skills",
      onClick: () => setShowSkillsPopup(true),
    },
    {
      icon: <FaAward size={40} className="text-yellow-500" />,
      title: "Certifications",
      onClick: () => setShowCertPopup(true),
    },
  ];

  return (
    <>
      <motion.section
        ref={sectionRef}
        id="experience"
        className="relative py-20 text-white bg-gradient-to-br from-gray-900 via-purple-900 to-black"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            className="mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className="relative p-8 transition-transform duration-500 border-2 border-purple-500 shadow-2xl cursor-pointer rounded-3xl bg-gradient-to-br from-gray-800 via-purple-800 to-black hover:scale-105 hover:border-pink-500 group"
                style={{ perspective: 1000 }}
                onClick={exp.onClick}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 z-0 pointer-events-none rounded-3xl group-hover:animate-gradient-glow"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180,0,255,0.2) 0%, rgba(255,0,180,0.2) 100%)",
                    filter: "blur(16px)",
                  }}
                ></div>
                <motion.div className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {exp.icon}
                  <h3 className="mt-4 mb-2 text-2xl font-bold text-purple-300 transition-colors duration-300 group-hover:text-pink-300">
                    {exp.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <TypewriterParagraph />
        </div>
      </motion.section>
      {/* Animated Work History Popup */}
      {showWorkPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowWorkPopup(false)}
        >
          <div
            className="relative w-full max-w-md p-8 shadow-2xl bg-gradient-to-br from-purple-900 via-black to-gray-900 rounded-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'fadeIn 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          >
            <h2 className="mb-4 text-2xl font-bold text-purple-300">Work History</h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <div>
                  <span className="font-bold text-pink-400">(2025 - Current) <br />Jspider/Qspider - Noida</span> Full Stack Developer Intern<br />
                  Core Java, Spring Boot, React.js • APIs, backend modules, responsive apps
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/work-history-jspider.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download Jspider Work History
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span className="font-bold text-yellow-400">Intern</span> SDE Ventures (1-sept-2024 to 30-Nov-2024)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/work-history-sde.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download SDE Ventures Work History
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">Tap anywhere outside to close.</p>
          </div>
        </div>
      )}
      {/* Animated Skills Popup */}
      {showSkillsPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowSkillsPopup(false)}
        >
          <div
            className="relative w-full max-w-sm p-6 shadow-2xl bg-gradient-to-br from-pink-900 via-black to-gray-900 rounded-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'fadeIn 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          >
            <h2 className="mb-4 text-2xl font-bold text-pink-300">Skills</h2>
            <div className="space-y-6 text-gray-200">
              <div>
                <h3 className="mb-2 text-lg font-bold text-pink-400">Frontend Development</h3>
                <ul className="ml-6 list-disc">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, React Router</li>
                  <li>Tailwind CSS (responsive UI design)</li>
                  <li>Framer Motion (animations & transitions)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-yellow-400">Backend Development</h3>
                <ul className="ml-6 list-disc">
                  <li>Java (Core + Advanced)</li>
                  <li>JDBC, Servlets, Hibernate</li>
                  <li>Spring Boot (REST APIs)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-green-400">Databases</h3>
                <ul className="ml-6 list-disc">
                  <li>SQL (MySQL / PostgreSQL)</li>
                  <li>MongoDB (NoSQL)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-blue-400">Additional Integrations</h3>
                <ul className="ml-6 list-disc">
                  <li>Payment Gateway Integration</li>
                  <li>Email Services (SMTP, EmailJS)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-300">Tools & Workflow</h3>
                <ul className="ml-6 list-disc">
                  <li>Git, GitHub (version control)</li>
                  <li>VS Code, Eclipse, IntelliJ IDEA</li>
                  <li>Postman (API testing)</li>
                  <li>npm, yarn (package management)</li>
                  <li>Deployment (Netlify, Vercel)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">Tap anywhere outside to close.</p>
          </div>
        </div>
      )}
      {/* Animated Certifications Popup */}
      {showCertPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowCertPopup(false)}
        >
          <div
            className="relative w-full max-w-md p-8 shadow-2xl bg-gradient-to-br from-purple-900 via-black to-gray-900 rounded-2xl animate-fadeIn"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'fadeIn 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          >
            <h2 className="mb-4 text-2xl font-bold text-purple-300">Certifications</h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <div>
                  <span className="font-bold text-purple-400">ServiceNow</span> (2024)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/serviceNow.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download ServiceNow
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span className="font-bold text-purple-400"> Salesforce Administrator Virtual
 Internship</span> (2023)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/salesforce.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download  Salesforce Administrator Virtual
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span className="font-bold text-purple-400">Altyrex Designer core</span> (2024)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/alteryx.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download Altyrex Designer core
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span className="font-bold text-purple-400">Zscaler Certificate</span> (2023)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/zscaler.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                       Download Zscaler Cybersecurity
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <span className="font-bold text-purple-400">Block Chain Certificate</span> (2024)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/blockchain.jpg"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download BlockChain Certificate
                    </a>
                  </div>
                </div>
              </li>
               <li>
                <div>
                  <span className="font-bold text-purple-400">Blue Prism</span> (2023)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/blueprism.pdf"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download Blue Prism
                    </a>
                  </div>
                </div>
              </li>
               <li>
                <div>
                  <span className="font-bold text-purple-400">Azure Developer Certificate</span> (2022)
                  <div className="flex flex-col items-center mt-4">
                    <a
                      href="/public/images/azureDeveloper.jpg"
                      download
                      className="px-6 py-2 font-bold text-center text-white transition bg-purple-600 shadow-lg rounded-xl hover:bg-purple-800"
                    >
                      Download Azure Developer
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">Tap anywhere outside to close.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceSection;