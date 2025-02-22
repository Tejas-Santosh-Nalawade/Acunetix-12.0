import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import '../locomotive-custom.scss';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot";
import Start from "./components/Start";
import SchedulePage from "./components/SchedulePage";
import chatbotIcon from "./assets/AcunetixChatbot.png";
import EventCard from "./pages/EventCard";
import Reel from "./components/Reel";
import Brainiac from "./pages/Brainiac";
import CodeOfLies from "./pages/CodeOfLies";
import Timescape from "./pages/TimeScape";
import CtrlAltElite from "./pages/CtrlAltElite";
import CinemaEyesLens from "./pages/CinemaEyesLens";

function MainContent() {
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const reelRef = useRef(null);
  const footerRef = useRef(null);
  const locomotiveScroll = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {

      // Initialize Locomotive Scroll for all devices
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        getDirection: true,
        smartphone: {
          smooth: true

      // Mobile detection logic
      const checkMobile = () => {
        return window.matchMedia('(max-width: 768px)').matches;
      };
  
      const isMobile = checkMobile();
  
      // Initialize Locomotive Scroll with conditional multiplier
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: isMobile ? 0.5 : 3.5, // Slower on desktop (0.5), normal on mobile (1)
        inertia: 2.1,
        getDirection: true,
        smartphone: {
          smooth: 0.1
        },
        tablet: {
          smooth: true
        }
      });

      // Handle scroll event
      const handleScroll = (args) => {
        if (heroRef.current) {
          const heroHeight = heroRef.current.offsetHeight;
          setIsScrolled(args.scroll.y > heroHeight);
        }
      };

      // Handle initial scroll to event
      const handleInitialScroll = () => {
        // Check if we need to scroll to event section
        const shouldScroll = location.state?.scrollToEvent || checkMobile();
        
        if (shouldScroll && eventRef.current) {
          // Use ResizeObserver to wait for content
          const observer = new ResizeObserver(() => {
            locomotiveScroll.current.update();
            locomotiveScroll.current.scrollTo(eventRef.current);
            observer.unobserve(eventRef.current);
          });

          observer.observe(eventRef.current);
        }
      };

      locomotiveScroll.current.on('scroll', handleScroll);
      setTimeout(handleInitialScroll, 150);

      return () => {
        if (locomotiveScroll.current) {
          locomotiveScroll.current.destroy();
        }
      };
    }
  }, [location, navigate]);

  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);

  const scrollToSection = (ref) => {
    if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current);
    }
  };

  return (
    <>
      <Navbar  
        isScrolled={isScrolled}
        scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef, scheduleRef, reelRef, footerRef }} 
        scrollToSection={scrollToSection} 
      />
      
      <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
        <section ref={heroRef} data-scroll-section className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center">
          <Hero />
        </section>

        <section ref={aboutRef} data-scroll-section className='flex bg-black text-white flex-col items-center justify-center min-h-screen w-full'>
          <About />
        </section>

        <section ref={eventRef} data-scroll-section className='min-h-screen mt-6'>
          <Event />
        </section>

        <section ref={scheduleRef} data-scroll-section className="min-h-screen">
          <SchedulePage/>
        </section>

        <section ref={sponsorsRef} data-scroll-section className="min-h-screen">
          <Sponsors />
        </section>

        <section ref={footerRef} data-scroll-section data-scroll-speed="2" className="bg-black/90 backdrop-blur-lg pt-16 pb-8 relative z-20 border-t border-white/10 min-h-screen flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reel />
            <Footer 
              scrollToRefs={{ heroRef }} 
              scrollToSection={scrollToSection} 
            />
          </div>
        </section>
      </div>

      {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}
      <div className="fixed bottom-5 right-5 z-50 cursor-pointer" onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="Chatbot" className="w-15 h-15 rounded-full shadow-lg hover:scale-110 transition-transform" />
      </div>
    </>
  );
}

function App() {
  const [startAnimationComplete, setStartAnimationComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimationComplete(true), 3900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!startAnimationComplete ? <Start /> : (
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/event/brainiac" element={<Brainiac />} />
          <Route path="/event/codeOfLies" element={<CodeOfLies />} />
          <Route path="/event/timeScape" element={<Timescape />} />
          <Route path="/event/ctrlAltElite2" element={<CtrlAltElite />} />
          <Route path="/event/ctrlAltElite" element={<CtrlAltElite />} />
          <Route path="/event/cinemaEyesLens" element={<CinemaEyesLens />} />
          <Route path="/event/timeScape2" element={<Timescape />} />
          <Route path="/event/brainiac2" element={<Brainiac />} />
          <Route path="/event/cinemaEyesLens2" element={<CinemaEyesLens />} />
          <Route path="/event/codeOfLies2" element={<CodeOfLies />} />
          <Route path="/event/:id" element={<EventCard />} />
        </Routes>
      )}
    </>
  );
}

export default App;