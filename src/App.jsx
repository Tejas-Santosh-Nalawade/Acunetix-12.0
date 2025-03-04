import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import AcunetixMetaTags from "./components/AcunetixMetaTags";
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
import EventDetails from "./components/EventDetails";
import chatbotIcon from "./assets/AcunetixChatbot.webp";
import EventCard from "./pages/EventCard";
import Reel from "./components/Reel";
import Brainiac from "./pages/Brainiac";
import CodeOfLies from "./pages/CodeOfLies";
import Timescape from "./pages/TimeScape";
import CtrlAltElite from "./pages/CtrlAltElite";
import CinemaEyesLens from "./pages/CinemaEyesLens";
import Dpl from "./pages/Dpl";
import GameStorm from "./pages/GameStorm";
import BuildAThon from "./pages/Build-A-Thon";
import BugBounty from "./pages/BugBounty";

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
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update navbar scroll state on window scroll
  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.1; // 10% of viewport height
      setIsScrolled(scrollPosition > threshold);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  // Initialize Locomotive Scroll on main page and, if requested, scroll to Event section
  useEffect(() => {
    if (location.pathname === '/') {
      

      if (!isMobile) {
        locomotiveScroll.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          getDirection: true,
          smartphone: { smooth: false },
          tablet: { smooth: false },
        });

        const scrollToTopTimeout = setTimeout(() => {
          locomotiveScroll.current?.scrollTo(0, { immediate: true, duration: 0 });
        }, 200);

        // If returning with state scrollToEvent, scroll to the Event section after a short delay.
        if (location.state?.scrollToEvent && eventRef.current) {
          setTimeout(() => {
            locomotiveScroll.current?.scrollTo(eventRef.current, { offset: -50, duration: 1000 });
          }, 300);
        }

        return () => {
          clearTimeout(scrollToTopTimeout);
          locomotiveScroll.current?.destroy();
        };
      } else {
        // For mobile devices, use native smooth scrolling
        if (location.state?.scrollToEvent && eventRef.current) {
          setTimeout(() => {
            eventRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, [location, isMobile]);

  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);

  const scrollToSection = (ref) => {
    if (isMobile) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current, {
        offset: -50, // Adjust offset for navbar height
        duration: 1000, // Smooth scroll duration
      });
    }
  };

  return (
    <>
      <Navbar  
        isScrolled={isScrolled}
        scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef, scheduleRef, reelRef, footerRef }} 
        scrollToSection={scrollToSection} 
      />
      
      <div 
        ref={scrollRef} 
        data-scroll-container={!isMobile}
        style={{ minHeight: '100vh' }}
      >
        <section 
          ref={heroRef} 
          data-scroll-section={!isMobile} 
          className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center"
        >
          <Hero />
        </section>

        <section 
          ref={aboutRef} 
          data-scroll-section={!isMobile} 
          className='flex bg-black text-white flex-col items-center justify-center min-h-screen w-full'
        >
          <About />
        </section>

        <section 
          ref={eventRef} 
          data-scroll-section={!isMobile} 
          className='min-h-screen mt-6'
        >
          <Event />
        </section>

        {/* <section 
          ref={scheduleRef} 
          data-scroll-section={!isMobile} 
          className="min-h-screen py-16"
        >
          <SchedulePage/>
        </section> */}

        {/* <section 
          ref={sponsorsRef} 
          data-scroll-section={!isMobile} 
          className="min-h-screen"
        >
          <Sponsors />
        </section> */}

        <section 
          ref={footerRef} 
          data-scroll-section={!isMobile} 
          data-scroll-speed={!isMobile ? "2" : "0"} 
          className="bg-black/90 backdrop-blur-lg pt-16 pb-8 relative z-20 border-t border-white/10 min-h-screen flex items-end"
        >
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

function EventWrapper({ Component }) {
  const location = useLocation();

  useEffect(() => {
    console.log("Trying to scroll to top...");
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-black">
      {/* <button
        onClick={handleBack}
        className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Back to events"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button> */}
      <Component />
    </div>
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
      <AcunetixMetaTags /> 
      {!startAnimationComplete ? <Start /> : (
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event/brainiac" element={<EventWrapper Component={Brainiac} />} />
          <Route path="/event/codeOfLies" element={<EventWrapper Component={CodeOfLies} />} />
          <Route path="/event/timeScape" element={<EventWrapper Component={Timescape} />} />
          <Route path="/event/dpl" element={<EventWrapper Component={Dpl} />} />
          <Route path="/event/gamestrom" element={<EventWrapper Component={GameStorm} />} />
          <Route path="/event/ctrlAltElite" element={<EventWrapper Component={CtrlAltElite} />} />
          <Route path="/event/cinemaEyesLens" element={<EventWrapper Component={CinemaEyesLens} />} />
          <Route path="/event/timeScape2" element={<EventWrapper Component={Timescape} />} />
          <Route path="/event/cinemaEyesLens2" element={<EventWrapper Component={CinemaEyesLens} />} />
          <Route path="/event/codeOfLies2" element={<EventWrapper Component={CodeOfLies} />} />
          <Route path="/event/:id" element={<EventWrapper Component={EventCard} />} />
          <Route path="/event/build-a-thon" element={<EventWrapper Component={BuildAThon} /> } />
          <Route path="/event/BugBounty" element={<EventWrapper Component={BugBounty} /> } />
        </Routes>
      )}
    </>
  );
}

export default App;