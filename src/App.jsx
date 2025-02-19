import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import '../locomotive-custom.scss';
import Sponsors from './components/Sponsors';
import Reel from './components/Reel';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot";
import Start from "./components/Start";
import SchedulePage from "./components/SchedulePage";
import chatbotIcon from "./assets/AcunetixChatbot.png";

<img src={chatbotIcon} alt="Chatbot Logo" />

import EventCard from "./pages/EventCard";

function App() {
  const [startAnimationComplete, setStartAnimationComplete] = useState(false);
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const reelRef = useRef(null);
  const footerRef = useRef(null);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const locomotiveScroll = useRef(null);

  // Function to toggle Chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimationComplete(true);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startAnimationComplete) {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        inertia: 0.75,
        getDirection: true,
      });

      locomotiveScroll.current.on('scroll', (args) => {
        document.documentElement.setAttribute('data-direction', args.direction);
      });

      return () => {
        if (locomotiveScroll.current) {
          locomotiveScroll.current.destroy();
        }
      };
    }
  }, [startAnimationComplete]);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current);
    }
  };

  return (
    <>
      {!startAnimationComplete && <div><Start /></div>}

      {startAnimationComplete && (
        <>
          <section className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
            <Navbar scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef,scheduleRef, reelRef, footerRef }} scrollToSection={scrollToSection} />
          </section>

          <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
            <section ref={heroRef} data-scroll-section data-scroll-speed="3" className="flex flex-col backdrop-blur-xl items-center justify-center h-screen w-full bg-cover bg-center">
              <Hero />
            </section>

            <section ref={aboutRef} data-scroll-section data-scroll-speed="1" className='flex bg-black text-white flex-col items-center justify-center min-h-screen w-full'>
              <About />
            </section>

            <section ref={eventRef} data-scroll-section className='min-h-screen mt-6'>
              <Event />
            </section>
            <section ref={eventRef} data-scroll-section className='min-h-screen mt-6'>
            <EventCard/>
          </section>
            <section ref={scheduleRef} data-scroll-section data-scroll-speed="2" className="min-h-screen">
              <SchedulePage/>
<<<<<<< HEAD
            </section>
            <section ref={sponsorsRef}  data-scroll-section data-scroll-speed="2" className="min-h-screen">
=======
            </section>          

            <section ref={sponsorsRef} data-scroll-section data-scroll-speed="2" className="min-h-screen">
>>>>>>> 541119d848cdd8cdbd7aea191d6d029e4d1a383a
              <Sponsors />
            </section>
            
            {/* <section ref={reelRef} data-scroll-section data-scroll-speed="2" className="min-h-screen">
              <Reel />
            </section> */}

            {/* <section ref={footerRef} data-scroll-section data-scroll-speed="2" className="bg-black/90 backdrop-blur-lg pt-16 pb-8 relative z-20 border-t border-white/10">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Footer />
              </div>
            </section> */}
          </div>

          {/* Chatbot Section */}
          {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}

          {/* Bot Logo */}
          <div
            className="fixed bottom-5 right-5 z-50 cursor-pointer"
            onClick={toggleChatbot}
          >
            <img
              src={chatbotIcon}
              alt="Chatbot Logo"
              className="w-15 h-15 rounded-full shadow-lg hover:scale-110 transition-transform"
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
