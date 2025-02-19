import React, { useState, useEffect } from "react";
import img from "../assets/logo.png";
import "./styles.css";

export default function LogoAnimation() {
  // Controls the logo's animation (move/rotate/scale)
  const [moveUp, setMoveUp] = useState(false);
  // Controls whether the logo is visible
  const [showLogo, setShowLogo] = useState(true);
  // Controls whether the heading is visible
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    // Start the logo animation after 1 second
    const moveTimer = setTimeout(() => setMoveUp(true), 1000);
    // Show the heading after 3 seconds
    const headingTimer = setTimeout(() => setShowHeading(true), 2000);
    // Fade out (or remove) the logo after 4 seconds
    const logoFadeTimer = setTimeout(() => setShowLogo(false), 4000);
    
    return () => {
      clearTimeout(moveTimer);
      clearTimeout(headingTimer);
      clearTimeout(logoFadeTimer);
    };
  }, []);

  return (

    <div className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* Logo Container */}
      {showLogo && (
        <div
          className={`relative flex flex-col items-center transition-all duration-1000 ${
            moveUp ? "mt-[-40vh]" : "mt-0"
          }`}
        >
          <img
            src={img}
            alt="Logo"
            className={`w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-1000 ${
              moveUp
                ? "translate-y-[-24vh] max-sm:translate-y-[-18vh] scale-40 rotate-360"
                : ""
            }`}
          />
        </div>
      )}

      {/* Heading Container */}
      {showHeading && (
        <div className="absolute flex flex-col pt-5 items-center justify-center text-center animate-fadeIn">
          <h1 className="text-4xl md:text-8xl font-bold text-white">
            Acunetix 12.0
          </h1>
          <p className="text-lg md:text-2xl text-white">Dive into world of illusions</p>
        </div>
      )}
    </div>
  );
}
