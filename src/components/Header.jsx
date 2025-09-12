import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_02tgjgf', // Your EmailJS service ID
      'template_jlicp2v', // Your EmailJS template ID
      {
        name: formData.name,      // matches {{name}} in template
        email: formData.email,    // matches {{email}} in template
        title: "Contact",         // matches {{title}} in template
        message: formData.message // matches {{message}} in template
      },
      'APX57tKGmwi2WkyUH' // Your EmailJS public key
    )
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }, (error) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <header className="absolute z-50 w-full transition-all duration-300 ">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 md:h-20">
          {/* Logo/name */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl font-bold text-purple-600 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100">
              RR
            </div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
              Ritesh-Raj
            </span>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 lg:flex">
            {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className='relative font-medium text-gray-800 transition-colors duration-300 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 group'
              >
                {item}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
              </motion.a>
            ))}
          </nav>
          {/* Social icons-Desktop */}
          <div className='items-center hidden space-x-4 md:flex'>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className='text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              href='https://github.com/Ritesh-raj75' target='_blank' rel='noopener noreferrer'>
              <FiGithub className='w-6 h-6 sm:w-5 sm:h-5' />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className='text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              href='https://x.com/RiteshRaj431029' target='_blank' rel='noopener noreferrer'>
              <FiTwitter className='w-6 h-6 sm:w-5 sm:h-5' />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className='text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              href='https://www.linkedin.com/in/ritesh-raj-18775a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
              <FiLinkedin className='w-6 h-6 sm:w-5 sm:h-5' />
            </motion.a>
            {/* Hire Me Button */}
            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className='w-full px-4 py-2 ml-4 font-bold transition-all duration-500 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 hover:from-violet-700 hover:to-purple-700 hover:text-white sm:w-auto'>
              Hire Me
            </motion.button>
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.7,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className='flex items-center w-full px-4 py-2 ml-2 font-bold text-white transition-all duration-500 rounded-xl bg-gradient-to-r from-violet-400 to-purple-600 hover:from-purple-700 hover:to-violet-700 hover:text-white sm:w-auto'
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
            </motion.a>
          </div>
          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={toggleMenu}
              className='text-gray-300'>
              {isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className='px-4 py-5 space-y-5 overflow-hidden bg-white shadow-lg md:hidden dark:bg-gray-900'>
          <nav className='flex flex-col space-y-3'>
            {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
              <a onClick={toggleMenu}
                key={item}
                className='py-2 font-medium text-gray-300'
                href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
            <div className='flex space-x-5'>
              <a href='https://github.com/Ritesh-raj75' target='_blank' rel='noopener noreferrer'>
                <FiGithub className='w-6 h-6 text-gray-300 sm:w-5 sm:h-5' />
              </a>
              <a href='https://x.com/RiteshRaj431029' target='_blank' rel='noopener noreferrer'>
                <FiTwitter className='w-6 h-6 text-gray-300 sm:w-5 sm:h-5' />
              </a>
              <a href='https://www.linkedin.com/in/ritesh-raj-18775a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
                <FiLinkedin className='w-6 h-6 text-gray-300 sm:w-5 sm:h-5' />
              </a>
            </div>
            <button
              onClick={() => {
                toggleMenu();
                openContactForm();
              }}
              className='block w-full py-2 mt-4 font-bold text-center text-white rounded-lg bg-gradient-to-r from-violet-600 to-violet-400'>
              Hire Me
            </button>
            <a
              href="/resume.pdf"
              download
              className='flex items-center justify-center block w-full py-2 mt-2 font-bold text-center rounded-lg bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700'
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
            </a>
          </div>
        </motion.div>
        {/* Contact Form */}
        <AnimatePresence>
          {contactFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 background-blur-sm'
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                  duration: 0.8
                }}
                className='w-full max-w-md p-6 bg-white shadow-xl dark:bg-gray-800 rounded-xl'>
                <div className='flex items-center justify-between mb-4'>
                  <h1 className='text-2xl font-bold text-gray-300'>
                    Get In Touch
                  </h1>
                  <button onClick={closeContactForm}>
                    <FiX className='w-5 h-5 font-extrabold text-gray-300' />
                  </button>
                </div>
                {/* Input Forms */}
                <form className='space-y-4' onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name" className='block mb-1 text-sm font-medium text-gray-300'>
                      Name
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleFormChange} placeholder='Enter your name' className='w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500' />
                  </div>
                  <div>
                    <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-300'>
                      Email
                    </label>
                    <input type="email" id="email" value={formData.email} onChange={handleFormChange} placeholder='Enter your email' className='w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500' />
                  </div>
                  <div>
                    <label htmlFor="message" className='block mb-1 text-sm font-medium text-gray-300'>
                      Message
                    </label>
                    <textarea rows='4' id="message" value={formData.message} onChange={handleFormChange} placeholder='How can I help you?' className='w-full px-4 py-2 bg-gray-700 border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500' />
                  </div>
                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className='w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-violet-600/50'>
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Toast message */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg font-bold z-[999] animate-bounce">
          Message sent successfully!
        </div>
      )}
    </>
  );
};

export default Header;