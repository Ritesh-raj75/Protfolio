import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
      // Listen for scroll and update active project index
      const panels = document.querySelectorAll('.panel');
      const onScroll = () => {
        let found = 0;
        panels.forEach((panel, idx) => {
          const rect = panel.getBoundingClientRect();
          if (rect.left < window.innerWidth / 2 && rect.right > window.innerWidth / 2) {
            found = idx;
          }
        });
        setActiveProject(found);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);
    const triggerRef = useRef(null);
    const horizontalRef = useRef(null);

    //Project Images data
    const projectImages =[
      {
        id:1,
        title:"3D Gaming Website",
        imgSrc:"/images/project-1.png",
      },
      {
        id:2,
        title:"Startup App",
        imgSrc:"/images/project-2.png",
      },
      {
        id:3,
        title:"Portfolio Website",
        imgSrc:"/images/project-3.png",
      },
      {
        id:4,
        title:"Awward Winning Web",
        imgSrc:"/images/project-4.png",
      },
    ]

    useEffect(() =>{
      gsap.registerPlugin(ScrollTrigger);
      // Title reveal animation
      gsap.fromTo(
        titleRef.current,
        { y:100, opacity:0 },
        { y:0, opacity:1, duration:1.2, ease:"power3.out",
          scrollTrigger:{ trigger: sectionRef.current, start:"top 80%", toggleActions:"play none none reverse" }
        }
      );
      // Title Line animation
      gsap.fromTo(
        titleLineRef.current,
        { width:0, opacity:0 },
        { width:"620px", opacity:1, duration:1.5, ease:"power3.inOut",
          scrollTrigger:{ trigger: sectionRef.current, start:"top 80%", toggleActions:"play none none reverse" }
        }
      );
      // Section entrance effect
      gsap.fromTo(
        triggerRef.current,
        { y:100, rotationX:20, opacity:0 },
        { y:0, rotationX:0, opacity:1, duration:1, ease:"power2.out",
          scrollTrigger:{ trigger: sectionRef.current, start:"top 70%", toggleActions:"play none none reverse" }
        }
      );
      // Animate gradient background color on scroll
      gsap.to(sectionRef.current, {
        background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
      //Horizontal Scrolling
      //Create the horizontal Scrolling animation
      const horizontalScroll= gsap.to(".panel",{
        xPercent:-100 * (projectImages.length -1),
        ease:"none",
        scrollTrigger:{
          trigger: triggerRef.current,
          start:"top top",
          end: () => `+=${horizontalRef.current.offsetWidth}`,
          pin:true,
          scrub:1,
          snap:{
            snapTo: 1 / (projectImages.length -1),
            duration: { main: 0.2, max: 0.3 },
            delay: 0.1,
          },
          invalidateOnRefresh:true,
        },
      })
      //Images Animation
      //Animate each Image panel
      const panels = gsap.utils.toArray(".panel");
      panels.forEach((panel, index) =>{
        const image = panel.querySelector(".project-image");
        const imageTitle = panel.querySelector(".project-title");
        
        // create  aTimeline for each panel
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger: panel,
            containerAnimation: horizontalScroll,
            start:"left center",
            end:"right left",
            scrub:true,
          }
        })
        
        // Image Scale and opacity animation
        tl.fromTo(ImageTrackList,{scale:0, rotate:-20, },{scale:1, rotate:1, duration:0.5, })
        
        //Title animation  if it exists
        if(imageTitle){
          tl.fromTo(imageTitle,{y:30, },{y:-100, duration:0.3, },0.2)
        }
      })
    },[projectImages.length] )
  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 overflow-hidden transition-all duration-700"
      style={{ background: "linear-gradient(135deg, #f6f6f6 0%, #f472b6 100%)" }}
    >
      {/* Section Title */}
      <div className="container relative z-10 px-10 mx-auto mb-16">
        <h2 ref={titleRef} className="mb-4 text-4xl font-bold text-center text-black opacity-0 md:text-5xl lg:text-6xl">
          Featured Projects
        </h2>
        <div ref={titleLineRef} className="w-0 h-1 mx-auto opacity-0 bg-gradient-to-r from-purple-500 to-purple-700">
        </div>
      </div>
      {/* Horizontal Scroll Section */}
      <div ref={triggerRef} className="overflow-x-hidden opacity-100">
        <div ref={horizontalRef} className="flex horizontal-section w-[400vw]">
          {projectImages.map((project)=>(
            <div key={project.id} className="flex items-center justify-center panel min-w-screen">
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 sm:p-8 md:p-12">
                <img 
                  className="object-cover max-w-full max-h-full shadow-lg rounded-2xl project-image"
                  src={project.imgSrc} 
                  alt="Project Image" 
                />
                <h2 className="z-50 flex items-center gap-0 mt-6 text-sm text-black transition-colors duration-300 cursor-pointer project-title md:text-3xl md:font-bold text-nowrap hover:text-purple-800">
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection