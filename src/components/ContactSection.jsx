import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  //main refs
  const [showContact, setShowContact] = useState(false);
  const sectionRef = useRef(null)
  const circleRef = useRef(null)
  const initialTextRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true)
        }
      })
    }
    cleanup()
    gsap.set(circleRef.current, { scale: 1, backgroundColor: 'white' })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    })

    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0,
    )
    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
    )
    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5,
    )
    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7,
    )
    return cleanup
  }, [])

  // Handler for "Email Me" button
  const handleEmailMe = () => {
    window.location.href = "mailto:rs8317594@gmail.com";
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-90"
      style={{ overscrollBehavior: 'none' }}>
      {/* Simple circle with minimal nesting */}
      <div
        ref={circleRef}
        className="relative flex items-center justify-center w-24 h-24 transition-shadow duration-1000 rounded-full shadow-lg sm:w-28 md:w-32 sm:h-28 md:h-32 shadow-violet-300/50 bg-gradient-to-r from-violet-400 to-pink-100"
      >
        {/* Initial text */}
        <p
          ref={initialTextRef}
          className="absolute inset-0 flex items-center text-base font-bold text-center text-black sm:text-lg md:text-xl"
        >
          SCROLL DOWN
        </p>
        {/* Final text */}
        <div
          ref={finalTextRef}
          className="relative flex flex-col items-center justify-center text-center opacity"
        >
          <h1
            className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5"
          >
            Step Into the Future with Ritesh Raj
          </h1>
          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068] ">
            Front-end Developer specialized in crafting modern, responsive web interfaces
            using React, Tailwind CSS, and advanced UI animations techniques. Focused on
            clean code, and pixel-perfect designs that stand out.
          </p>

          <button
            className="px-10 py-2  transition-all duration-500 bg-black rounded-xl hover:bg-purple-400 hover:text-black scale-[0.1] absolute sm:mt-9 mt-10 text-nowrap"
            onClick={handleEmailMe}
          >
            Email Me
          </button>
          <button
            className="px-10 py-2 transition-all duration-500 bg-purple-400 rounded-xl hover:bg-white hover:text-black scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap"
            onClick={() => setShowContact(true)}
          >
            Contact Me
          </button>
          
          {showContact && (
            <div className="fixed flex flex-col items-center justify-center px-1 py-1 text-center text-black bg-white border border-purple-400 shadow-lg top-1/2 left-1/2 rounded-xl"
              style={{ transform: 'translate(-50%, -50%)', minWidth: '30px', minHeight: '30px', maxWidth: '40px', maxHeight: '40px' }}>
              <button onClick={() => setShowContact(false)} className="text-purple-400 hover:text-pink-400 text-[2px] font-bold mb-1 self-end">✕</button>
              <span className="text-[2px] font-bold text-purple-600">Ritesh Raj</span>
              <span className="text-[2px] font-medium">Email: <span className="text-pink-500">rs8317594@gmail.com</span></span>
              <span className="text-[2px] font-medium">Phone: <span className="text-purple-500">+91-7541881699</span></span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection