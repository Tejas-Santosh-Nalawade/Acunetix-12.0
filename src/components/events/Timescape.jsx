import React, { useState, useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';

const Timescape = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref } = useParallax({ speed: 10 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 text-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Left Side - Info Cards */}
        <div className="space-y-6">
          <article className="rounded-xl bg-gray-800/90 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
            <h2 className="mb-4 text-2xl font-bold font-orbitron text-blue-400">Event Details</h2>
            <p className="text-gray-300">
              Embark on a temporal journey where reality bends and time unravels. 
              Decrypt ancient mysteries, solve paradoxical enigmas, and escape the 
              chrono-loop before time runs out...
            </p>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Team Members Card */}
            <div className="rounded-lg bg-gray-800 p-4 transition-transform hover:scale-105">
              <h3 className="font-orbitron text-sm text-green-400 mb-2">TEAM SIZE</h3>
              <p className="text-2xl font-bold">3-5</p>
              <p className="text-sm text-gray-400">Members</p>
            </div>

            {/* Entry Fee Card */}
            <div className="rounded-lg bg-gray-800 p-4 transition-transform hover:scale-105">
              <h3 className="font-orbitron text-sm text-purple-400 mb-2">ENTRY FEE</h3>
              <p className="text-2xl font-bold">₹300</p>
              <p className="text-sm text-gray-400">Per Team</p>
            </div>

            {/* Prize Pool Card */}
            <div className="rounded-lg bg-gray-800 p-4 transition-transform hover:scale-105">
              <h3 className="font-orbitron text-sm text-red-400 mb-2">PRIZE POOL</h3>
              <p className="text-2xl font-bold">₹10K</p>
              <p className="text-sm text-gray-400">Total Rewards</p>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Poster */}
        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[400px] perspective-1000">
          <div className={`relative h-full w-full animate-rotate ${isMobile ? 'scale-75' : ''}`}>
            {/* Rotating Rings */}
            <div className="absolute h-full w-full rounded-full border border-blue-400/40 animate-rotate [animation-delay:-5s]" />
            <div className="absolute h-full w-full rounded-full border border-purple-400/40 animate-rotate [animation-delay:-7s]" />
            
            {/* Glowing Core */}
            <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gradient from-blue-400 to-transparent blur-xl" />
            
            {/* Floating Stars - Fixed Image */}
            <div 
              className="absolute h-full w-full animate-rotate bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-cover opacity-50 [animation-duration:100s]"
              style={{ backgroundSize: '2px 2px' }}
            />
            
            {/* Hologram Text */}
            <div className="absolute bottom-[-2rem] left-1/2 w-full -translate-x-1/2 text-center font-orbitron text-lg text-white/80 [text-shadow:0_0_15px_#00ffff]">
              ESCAPE THE LOOP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timescape;