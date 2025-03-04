import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Squares from '../components/Squares';
import TreasureTroveImg from '../assets/treasure-trove.webp'


const TreasureTrove= () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/");
  };

  // Back button click navigates to home with state for scrolling to Event section
  const handleBackClick = () => {
    navigate("/", {
      state: {
        scrollToEvent: true,
        timestamp: Date.now(), // Cache buster for mobile
      },
      replace: true,
    });
  };

  const handleRegisterClick = () => {
    window.open("https://forms.gle/SXWBVpjo8ThZXDkMA", "_blank");
  };

  // // Scroll to top on component mount (especially for mobile)
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, []);
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="flex-1 flex justify-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick();
            }}
          >
            {/* <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="transform hover:scale-105 ml-8 transition-transform duration-300"
            /> */}
          </a>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-6 left-6 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 z-50"
      >
        <IoArrowBack className="text-lg" />
      </button>

      <div className=" min-h-screen pt-12 pb-12">
        <div className="absolute inset-0">
          <Squares
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          <div className="absolute inset-0 bg-black/60 pb-0 "></div>
        </div>

        {/* Content Container */}
          <div className="relative z-10 container mx-auto m-0 pb-0 mb-0 p-10 h-full sm:h-[50vh] md:h-[70vh]">
            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
              {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center h-full space-y-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white">Dpu Premier League</h1>

              {/* Mobile View */}
                      <div className="md:hidden flex flex-col items-center space-y-10" >
                      <img
                        src={dplImg}
                        alt="Event Poster"
                        className="rounded-xl shadow-2xl w-full max-w-sm max-h-[350px] object-contain transform hover:scale-105 transition-all duration-300"
                      />
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm pb-5">
                        <p className="text-gray-50 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <button
                        onClick={handleRegisterClick}
                        className="bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-gray-300 hover:scale-105 shadow-xl cursor-pointer"
                      >
                        Register Now
                      </button>
                      </div>

                      {/* Desktop View */}
              <div className="hidden md:flex flex-col items-center space-y-6">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border mb-15 border-gray-500 p-11 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xl">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleRegisterClick}
                    className="bg-gradient-to-r from-gray-600 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-gray-300 hover:scale-105 shadow-xl cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <img
                src={TreasureTroveImg}
                alt="Event Poster"
                className="rounded-xl shadow-2xl w-full md:w-auto max-w-xl max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
              />
            </div>
            
          </div>
        </div>
        
      </div>
      {/* <Footer /> */}
      
    </>
  );
};

export default TreasureTrove;