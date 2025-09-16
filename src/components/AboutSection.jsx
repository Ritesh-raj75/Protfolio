import {useRef,useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const starRef = useRef([]);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        //Title Animation
        
        gsap.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            {
                y:20,
                opacity:1,
                duration:0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )
        //Intro Animation
        gsap.fromTo(
            introRef.current,
            { y: 100, opacity: 0 , filter: "blur(10px)"},
            {
                y: -350,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )
        
        //Stars Animation with different speed and direction
        starRef.current.forEach((star, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            const speed = 0.5 + Math.random() * 0.5;
            
            gsap.to(star, {
                x:`${direction *(100 + index *20)}`,
                y: `${direction * -50 - index *10}`,
                rotation: direction * 360,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom-top",
                    scrub: speed,
                }
            })
    })
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
            if(trigger.vars.trigger === sectionRef.current){
                trigger.kill();
            }
        });
    }
    })
    const addToStars = (el) => {
        if(el && !starRef.current.includes(el)){
            starRef.current.push(el);
        }
    }
  return (
    <section ref={sectionRef} className=" h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
        <div className="absolute inset-0 overflow-hidden">
            {/* stars */}
            {[...Array(10)].map((_,i) =>(
                <div 
                ref={addToStars}
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{
                    width: `${10 +i*3}px`,
                    height:`${10 +i*3}px`,
                    backgroundColor:"white",
                    opacity:0.2 + Math.random()*0.4,
                    top: `${Math.random()*100}%`,
                    left: `${Math.random()*100}%`,
                }}
                />
            ))}
            
            
        </div>
     <div className="container flex flex-col items-center h-full px-4 mx-auto justify-normal">
        <h1 ref={titleRef} className="text-4xl font-bold text-center text-white opacity-0 md:text-6xl sm:mb-16">
            About Me
            </h1>
     </div>
     <div ref={introRef} className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0">
                <h3 className="z-50 text-sm font-bold text-purple-200 md:text-2xl lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
                        Hi, I'm Ritesh Raj, a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. I craft responsive,user-friendly
                        web interfaces using React.js, Tailwind CSS, and Framer Motion, JavaScript.Wether it's a landing page, a landing page, a full-scale web app, or something in between.
                        I'm all about clean code, fast delivery, and seamless user experiences.
                </h3>
                <div className="flex flex-col items-center">
                    <img className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten" src="/images/Person.png" alt="profile-img" />
                </div>
     </div>
    </section>
  )
}

export default AboutSection;
